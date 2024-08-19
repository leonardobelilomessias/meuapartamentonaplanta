import { DefaultCard } from "@/components/shared/CardContainer";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useForm, Controller, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useRouter } from "next/router";
import {v4 } from 'uuid'
import axios from "axios";

import { Divider } from "@mui/material";
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';
import { verifyFormdata } from "@/utils/verifyFormdata";
import { ModalSelectImage } from "@/AddHouseScreen/ModalSelectImage";
import { gray } from "@/LandingPage/getLPTheme";

// Interfaces
interface Amenities {
  pool?: boolean;
  porter?: boolean;
  gym?: boolean;
  private_area?: boolean;
  lift?: boolean;
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
}

interface IValidationSchema {
  title: string;
  description: string;
  price: number;
  address: string;
  city: string;
  neighborhood: string;
  zip: string;
  bedrooms: string;
  bathrooms: string;
  garages: string;
  area: string;
  amenities: Amenities;
}
interface IProductsResponse{
    id?:string
    title: string;
    description: string;
    price: number;
    address: string;
    city: string;
    neighborhood: string;
    zip: string;
    bedrooms: string;
    bathrooms: string;
    garages: string;
    area: string;
    amenities: Amenities;
}

// Validação com Yup
const validationSchema = Yup.object({

  title: Yup.string().required("Título é obrigatório"),
  description: Yup.string().required("Descrição é obrigatória"),
  price: Yup.number().positive("Preço deve ser um número positivo").typeError("Preço obrigatório. Digite apenas números").required("Preço é obrigatório"),
  address: Yup.string().required("Endereço é obrigatório"),
  city: Yup.string().required("Cidade é obrigatória"),
  neighborhood: Yup.string().required("Bairro é obrigatório"),
  zip: Yup.string().required("CEP é obrigatório"),
  bedrooms: Yup.string().required("Quantidade de quartos é obrigatória (Apenas números)"),
  bathrooms: Yup.string().required("Quantidade de Banheiros é obrigatório (Apenas números)"),
  garages: Yup.string().required("Quantidade de Garagens é obrigatório (Apenas números)"),
  area: Yup.string().required("Tamanho da área é obrigatório (Apenas números)"),
  amenities: Yup.object({
    pool: Yup.boolean(),
    porter: Yup.boolean(),
    gym: Yup.boolean(),
    private_area: Yup.boolean(),
    lift: Yup.boolean(),
    salon_party: Yup.boolean(),
    playground: Yup.boolean(),
    sauna: Yup.boolean(),
    bike_rack: Yup.boolean(),
    coworking: Yup.boolean(),
    washing: Yup.boolean(),
    handicapped: Yup.boolean(),
    backyard: Yup.boolean(),
    pet_place: Yup.boolean(),
    service_area: Yup.boolean(),
  }).required()
});

// Lista de campos de amenities
const amenitiesFields = [
  'pool',
  'porter',
  'gym',
  'private_area',
  'lift',
  'salon_party',
  'playground',
  'sauna',
  'bike_rack',
  'coworking',
  'washing',
  'handicapped',
  'backyard',
  'pet_place',
  'service_area'
];

export function ScreenEditProduct() {
    const router = useRouter();
    const {id_product} = router.query
    const [product,setProduct] = React.useState({} as IProductsResponse )
    async function getProduct() {
        
        try {
            const productResponse = await axios.get(`/api/listproductById?id=${id_product}`);
            const imagesResponse = await axios.get(`/api/listImagesByIdProduct?id=${id_product}`);
            setImagesBucket(imagesResponse.data.urls)
            setProduct(productResponse.data as IProductsResponse);
            setCover(productResponse.data.cover)
            setPreviewCover(productResponse.data.cover) 
            console.log('chamadaaaaaa',imagesResponse.data );
        } catch (error) {
          console.error('Erro ao buscar produto:', error);
        }
      }
      React.useEffect(() => {
        if (id_product) {
          getProduct();
        }
      }, [id_product]);
      

  const [coverChange,setCoverChange]=React.useState(false)
  const [load, setLoad] = React.useState(false);
  const [imagesBucket, setImagesBucket] = React.useState<string[]>([]);
  const [imagesDelet, setImagesDelet] = React.useState<string[]>([]);
  const [messageModal,setMessageModal] = React.useState('')
  const [show, setShow] = React.useState(false);
  const [cover, setCover] = React.useState<File | null>(null);
  const [previewCover, setPreviewCover] = React.useState<string | undefined>();
  const [files, setFiles] = React.useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = React.useState<string[]>([]);
  const [folderName, setFolderName] = React.useState('');
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { handleSubmit, control, formState: { errors },reset } = useForm<IProductsResponse>({
    resolver: yupResolver(validationSchema),  defaultValues: product || {
        title: '',
        description: '',
        price: 0,
        address: '',
        city: '',
        neighborhood: '',
        zip: '',
        bedrooms: '',
        bathrooms: '',
        garages: '',
        area: '',
        amenities: {
          pool: false,
          porter: false,
          gym: false,
          private_area: false,
          lift: false,
          salon_party: false,
          playground: false,
          sauna: false,
          bike_rack: false,
          coworking: false,
          washing: false,
          handicapped: false,
          backyard: false,
          pet_place: false,
          service_area: false,
        }
      }
  });
  React.useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product, reset]);

  const onSubmit = async (data: IValidationSchema) => {
    if (files.length <= 0 && imagesBucket.length<=0) {
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
      setLoad(true)
      for (const file of files) {
        formData.append('files', file);
      }
      const uuidv4 = v4().split('-')[0]
      const slug = data.title.split(" ").join('-')+`-${uuidv4}`
      Object.assign(data,{slug:slug})
      const response = await axios.post('/api/updateProduct', {docId:id_product, data});
      console.log('productId aquiiiii', response.data)
       const {id} = response.data as IProductsResponse
       if(imagesDelet.length>0){
        await axios.post('/api/deleteImages',{productId:id_product,imageUrls:imagesDelet});
      }
       formCover.append('files', cover);
       formData.append('bucket', `${id}`);
       formCover.append('bucket', `${id}`);     
      if(files.length>0){
        const responseUploadImages = await axios.post('/api/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      if(coverChange){

        const responseUploadCover= await axios.post('/api/uploadCover', formCover, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });     
      }
      toast(`operação realizado${data.title}`)

      // if (response.status ==200) {
      //   router.push(`/sucesso/${slug}`);
      // }

    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
    finally{
      setLoad(false)
    }

  }
  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setCover(file);
    if (file) {
      setPreviewCover(URL.createObjectURL(file));
      
    }
    setCoverChange(true)
  };
  const handleRemoveCover = () => {
    setCover(null)
    setPreviewCover('');
    //fileInputRef.current.value = '';
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
      // Verifica se a referência não é null antes de acessar a propriedade value
      (fileInputRef.current as HTMLInputElement).value = '';
    }
  };

  const handleRemoveImageBucket = React.useCallback((e: React.MouseEvent<HTMLButtonElement>, url: string, index: number) => {
    e.preventDefault();
    setImagesDelet((prevDeletions) => [...prevDeletions, url]);
    setImagesBucket((prevUrls) => prevUrls.filter((_, i) => i !== index));
}, []);
  const handleClickFileInput = () => {
    const input = fileInputRef.current;
    if (input) {
      input.click();
    }
  };

//   const onSubmit = async (data: IValidationSchema) => {
//     try {
//       setLoad(true);
//       // Simulate API call
//       toast(`Imóvel criado: ${data.title}`);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoad(false);
//     }
//     console.log(data);
//   };

  return (
    <DefaultCard>

        <ModalSelectImage show={show} handleClose={handleClose} messageModal={messageModal} />
      <ToastContainer />
      <Box sx={{ marginTop: 4, marginBottom: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Editar Imóvel id:{id_product}
        </Typography>
        <Typography component="h1" variant="h5">
          Produto by axios Imóvel id:{product.title}
        

        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ display: "flex", mt: 1, gap: 2, flexDirection: 'column', minWidth: { xs: "100%", sm: 550 } }}>
        <ControllerField defaultValue={product.title}  name="title" control={control} helperText={errors.title?.message} error={!!errors.title} label="Título" />
        <ControllerField defaultValue={product.title} name="description" control={control} helperText={errors.description?.message} error={!!errors.description} label="Descrição" />
        <ControllerField defaultValue={product.title} name="price" type="number" control={control} helperText={errors.price?.message} error={!!errors.price} label="Preço" />
        <ControllerField defaultValue={product.title} name="address" control={control} helperText={errors.address?.message} error={!!errors.address} label="Endereço" />
        <ControllerField defaultValue={product.title} name="city" control={control} helperText={errors.city?.message} error={!!errors.city} label="Cidade" />
        <ControllerField defaultValue={product.title} name="neighborhood" control={control} helperText={errors.neighborhood?.message} error={!!errors.neighborhood} label="Bairro" />
        <ControllerField defaultValue={product.title} name="zip" control={control} helperText={errors.zip?.message} error={!!errors.zip} label="CEP" />
        <ControllerField defaultValue={product.title} name="bedrooms" control={control} helperText={errors.bedrooms?.message} error={!!errors.bedrooms} label="Quantidade de Quartos" />
        <ControllerField defaultValue={product.title} name="bathrooms" control={control} helperText={errors.bathrooms?.message} error={!!errors.bathrooms} label="Quantidade de Banheiros" />
        <ControllerField defaultValue={product.title} name="garages" control={control} helperText={errors.garages?.message} error={!!errors.garages} label="Quantidade de Garagens" />
        <ControllerField defaultValue={product.title} name="area" control={control} helperText={errors.area?.message} error={!!errors.area} label="Tamanho da Área" />

        {/* Amenities - Boolean Fields */}
        {amenitiesFields.map((amenity) => (
          <Box key={amenity}>
            <Controller
              name={`amenities.${amenity}` as keyof IValidationSchema}
              control={control}
              render={({ field }) => (
                <FormControlLabel
                
                  control={<Checkbox {...field} />}
                  label={formatLabel(amenity)}
                />
              )}
            />
          </Box>
        ))}
        <Divider/>
{/* uploaaa de imagens */}
<div className="ltn__apartments-tab-content-inner">
<Typography variant="h5">Imagens</Typography>
                            <Box>
                              <div className="col-md-12">
                                <div className="input-item input-item-textarea ltn__custom-icon">
                            <Typography variant="h6">Adiconar imagens  De Capa</Typography>

                            <Button variant="contained" > 
                                  <label>Imagem de Capa

                                  <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleCoverChange}
                                    style={{ display: 'none' }}
                                    />
                                    </label>
                                </Button>
                                <Box sx={{display:'flex', flexDirection:"row",flexWrap:"wrap",bgcolor:gray[100]}}>
                                <div style={{position:"relative", width:'220px', height:'150px', margin:"1rem"}}>
                                  {previewCover && (
                                    <div className="image-preview">
                                      <Image src={previewCover} alt="Capa" width={220} height={150} />
                                      <button style={{position:"absolute", top:0, right:0}} type="button" onClick={handleRemoveCover}>
                                        <DeleteIcon />
                                      </button>
                                    </div>
                                  )}
                                  </div>
                                </Box>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="input-item input-item-textarea ltn__custom-icon">
                            <Typography variant="h6">Adiconar imagens a galeria</Typography>
                                <Button variant="contained">

                                  <label>Adicionar imagens

                                  <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                    />
                                    </label>
                                </Button>
                                <Box sx={{display:'flex', flexDirection:"row",flexWrap:"wrap",bgcolor:gray[100]}}>
                                {imagesBucket.map((url, index) => (
                                <div key={index} style={{position:"relative", width:'220px', height:'150px', margin:"1rem"}}>
                                <img key={index} src={url} alt={`Preview ${index}`} style={{position:"relative", width:'220px', height:'150px'}}/>
                                <button style={{position:"absolute", top:0, right:0}} onClick={(e) => handleRemoveImageBucket(e,url,index)}><DeleteIcon /></button>
                                </div>
                                ))}
                                </Box>
                                  <Box sx={{display:'flex', flexDirection:"row",flexWrap:"wrap",bgcolor:gray[100]}}>
                                    {previewUrls.map((url, index) => (
                                    <div key={index} style={{position:"relative", width:'220px', height:'150px', margin:"1rem"}}>
                                        <Image src={url} alt={`Imagem ${index + 1}`} width={220} height={150} style={{position:"relative", width:'220px', height:'150px'}} />
                                        <button style={{position:"absolute", top:0, right:0}} type="button" onClick={() => handleRemoveImage(index)}>
                                          <DeleteIcon  />
                                        </button>
                                      </div>
                                    ))}
                                  </Box>
                                </div>
                              </div>
                            </Box>
                          </div>
{/*  fim do upload de imagens */}
        {!load && <Button size="large" type="submit" variant="contained" fullWidth>Enviar</Button>}
        {load &&
          <LoadingButton size="large" variant="outlined" loading loadingPosition="center" startIcon={<SaveIcon />}>
            Enviando
          </LoadingButton>
        }
      </Box>
    </DefaultCard>
  );
}

// Helper function to format amenity labels
const formatLabel = (key: string) => {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
};

function ControllerField({ control, error, label, multiline, rows, name, helperText, type = "text", defaultValue }: {
  control: Control<IValidationSchema>,
  error?: boolean,
  label: string,
  multiline?: boolean,
  rows?: number,
  name: keyof IValidationSchema,
  helperText?: string,
  type?: string,
  defaultValue:string
}) {
  return (
    <Box>
        <Typography variant="overline">{label}</Typography>
      <Controller
        name={name}
        control={control}
        
        render={({ field }) => (
          <TextField
         
            {...field}
            type={type}
            placeholder={label}
            multiline={multiline}
            rows={rows}
            fullWidth
            label={!!defaultValue?"":label}
            variant="outlined"
            error={error}
            helperText={helperText}
          />
        )}
      />
    </Box>
  );
}
