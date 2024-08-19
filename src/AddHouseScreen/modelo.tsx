import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { v4 } from 'uuid';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Container, Row, Col, Nav, Tab, Form } from 'react-bootstrap';
import Image from 'next/image';
import LayoutOne from '../components/LayoutOne';
import ModalSelectImage from '../components/ModalSelectImage';
import ShopBreadCrumb from '../components/ShopBreadCrumb';
import Loading from '../components/Loading';

// Define types for form data
interface FormData {
  title: string;
  description: string;
  price: string;
  category: string;
  status: string;
  standard: string;
  address: string;
  city: string;
  neighborhood: string;
  zip: string;
  mapIframe: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  garages: string;
  amenities: {
    porter?: boolean;
    gym?: boolean;
    private_area?: boolean;
    lift?: boolean;
    pool?: boolean;
    salon_party?: boolean;
    playground?: boolean;
    sauna?: boolean;
    bike_rack?: boolean;
    coworking?: boolean;
    washing?: boolean;
    handicapped?: boolean;
    backyard?: boolean;
    pet_place?: boolean;
    service_area?: boolean;
  };
}

// Define type for the location and neighborhood data
interface Location {
  cityName: string;
  neighborhood: string[];
}

// Define schema for yup validation
const schema = yup.object().shape({
  title: yup.string().required('Título é obrigatório'),
  description: yup.string(),
  price: yup.string().matches(/^[0-9]+$/, 'Preço deve ser numérico'),
  category: yup.string().required('Categoria é obrigatória'),
  status: yup.string().required('Status é obrigatório'),
  standard: yup.string().required('Padrão é obrigatório'),
  address: yup.string().required('Endereço é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  zip: yup.string().matches(/^[0-9]{5}-[0-9]{3}$/, 'CEP inválido'),
  mapIframe: yup.string(),
  area: yup.string(),
  bedrooms: yup.string(),
  bathrooms: yup.string(),
  garages: yup.string(),
  amenities: yup.object({
    porter: yup.boolean(),
    gym: yup.boolean(),
    private_area: yup.boolean(),
    lift: yup.boolean(),
    pool: yup.boolean(),
    salon_party: yup.boolean(),
    playground: yup.boolean(),
    sauna: yup.boolean(),
    bike_rack: yup.boolean(),
    coworking: yup.boolean(),
    washing: yup.boolean(),
    handicapped: yup.boolean(),
    backyard: yup.boolean(),
    pet_place: yup.boolean(),
    service_area: yup.boolean(),
  }).default({})
});

// Define the component
const AddListingPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cover, setCover] = useState<File | null>(null);
  const [previewCover, setPreviewCover] = useState<string | undefined>();
  const router = useRouter();
  const stepName = ["first", 'second', 'third', 'fourth', 'five'];
  const [stp, setStp] = useState<number>(0);
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [folderName, setFolderName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [neighborhoods, setNeighborhoods] = useState<string[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (files.length <= 0) {
      setMessageModal('Você precisa selecionar pelo menos uma imagem');
      handleShow();
      return;
    }
    if (!cover) {
      setMessageModal('Você precisa selecionar uma capa');
      handleShow();
      return;
    }
    const formData = new FormData();
    const formCover = new FormData();

    try {
      setLoading(true);
      for (const file of files) {
        formData.append('files', file);
      }
      formCover.append('files', cover);

      const uuidv4 = v4().split('-')[0];
      const slug = data.title.split(" ").join('-') + `-${uuidv4}`;
      Object.assign(data, { slug: slug });

      const response = await axios.post('/api/createproduct', data);
      const { id } = response.data;

      formData.append('bucket', `${id}`);
      formCover.append('bucket', `${id}`);

      if (files.length > 0) {
        await axios.post('/api/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      if (cover) {
        await axios.post('/api/uploadCover', formCover, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      if (response.status === 200) {
        router.push(`/sucesso/${slug}`);
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setCover(file);
    if (file) {
      setPreviewCover(URL.createObjectURL(file));
    }
  };

  const handleRemoveCover = () => {
    setCover(null);
    setPreviewCover(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);

    const newPreviewUrls = selectedFiles.map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
  };

  const handleRemoveImage = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setPreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  async function getLocations() {
    const resultLocations = await axios.get("/api/listLocations");
    setLocations(resultLocations.data);
    setNeighborhoods(resultLocations.data[0].neighborhood);
  }

  function getNeighborhood(location: Location) {
    setNeighborhoods(location.neighborhood);
  }

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <LayoutOne topbar={true}>
        <ModalSelectImage show={show} handleClose={handleClose} messageModal={messageModal} />
        <ShopBreadCrumb title="Adicionar Imovel" sectionPace="" currentSlug="Adicionar imóvel" />
        {loading && <Loading />}
        {!loading && (
          <div className="ltn__appointment-area pb-120">
            <Container>
              <Row>
                <Col xs={12}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Tab.Container defaultActiveKey="first">
                      <div className="ltn__tab-menu ltn__tab-menu-3 text-center">
                        <Nav className="nav justify-content-center">
                          {stepName.map((step, index) => (
                            <Nav.Link eventKey={step} onClick={() => setStp(index)} key={step}>
                              {index + 1}. {step.charAt(0).toUpperCase() + step.slice(1)}
                            </Nav.Link>
                          ))}
                        </Nav>
                      </div>
                      <Tab.Content>
                        {/* Descrição do Imóvel */}
                        <Tab.Pane eventKey="first">
                          <div className="ltn__apartments-tab-content-inner">
                            <h6>Descrição do Imóvel</h6>
                            <Row>
                              <div className="col-md-12">
                                <div className="input-item input-item-textarea ltn__custom-icon">
                                  <label>Titulo</label>
                                  <input
                                    type="text"
                                    {...register("title")}
                                    placeholder="*Título Do Imóvel (Obrigatório)"
                                    onChange={(e) => setFolderName(e.target.value)}
                                  />
                                  {errors.title && !folderName && <p style={{ color: "red" }}>{errors.title.message}</p>}
                                </div>
                                <div className="input-item input-item-textarea ltn__custom-icon">
                                  <label>Descrição</label>
                                  <textarea
                                    {...register("description")}
                                    placeholder="Descrição (Opcional)"
                                  />
                                </div>
                              </div>
                            </Row>
                            {/* Mais campos... */}
                          </div>
                        </Tab.Pane>

                        {/* Imagens */}
                        <Tab.Pane eventKey="second">
                          <div className="ltn__apartments-tab-content-inner">
                            <h6>Imagens</h6>
                            <Row>
                              <div className="col-md-12">
                                <div className="input-item input-item-textarea ltn__custom-icon">
                                  <label>Imagem de Capa</label>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleCoverChange}
                                  />
                                  {previewCover && (
                                    <div className="image-preview">
                                      <Image src={previewCover} alt="Capa" width={100} height={100} />
                                      <button type="button" onClick={handleRemoveCover}>
                                        <FaTrash />
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="input-item input-item-textarea ltn__custom-icon">
                                  <label>Imagens Adicionais</label>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                  />
                                  <div className="image-previews">
                                    {previewUrls.map((url, index) => (
                                      <div className="image-preview" key={index}>
                                        <Image src={url} alt={`Imagem ${index + 1}`} width={100} height={100} />
                                        <button type="button" onClick={() => handleRemoveImage(index)}>
                                          <FaTrash />
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Row>
                          </div>
                        </Tab.Pane>

                        {/* Dados Adicionais */}
                        <Tab.Pane eventKey="third">
                          <div className="ltn__apartments-tab-content-inner">
                            <h6>Dados Adicionais</h6>
                            <Row>
                              <div className="col-md-12">
                                {/* Campos adicionais... */}
                              </div>
                            </Row>
                          </div>
                        </Tab.Pane>

                        {/* Localização */}
                        <Tab.Pane eventKey="fourth">
                          <div className="ltn__apartments-tab-content-inner">
                            <h6>Localização</h6>
                            <Row>
                              <div className="col-md-12">
                                <div className="input-item input-item-textarea ltn__custom-icon">
                                  <label>Cidade</label>
                                  <select {...register("city")} onChange={(e) => getNeighborhood(e.target.value)}>
                                    {locations.map((location) => (
                                      <option key={location.cityName} value={location.cityName}>
                                        {location.cityName}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="input-item input-item-textarea ltn__custom-icon">
                                  <label>Bairro</label>
                                  <select {...register("neighborhood")}>
                                    {neighborhoods.map((neighborhood) => (
                                      <option key={neighborhood} value={neighborhood}>
                                        {neighborhood}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </Row>
                          </div>
                        </Tab.Pane>

                        {/* Finalização */}
                        <Tab.Pane eventKey="five">
                          <div className="ltn__apartments-tab-content-inner">
                            <Row>
                              <Col xs={12}>
                                <button type="submit">Salvar</button>
                              </Col>
                            </Row>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </form>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </LayoutOne>
    </>
  );
};

export default AddListingPage;
