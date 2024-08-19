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

export function AddHouseScreen() {
  const [load, setLoad] = React.useState(false);

  const { handleSubmit, control, formState: { errors } } = useForm<IValidationSchema>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: IValidationSchema) => {
    try {
      setLoad(true);
      // Simulate API call
      toast(`Imóvel criado: ${data.title}`);
    } catch (e) {
      console.error(e);
    } finally {
      setLoad(false);
    }
    console.log(data);
  };

  return (
    <DefaultCard>
      <ToastContainer />
      <Box sx={{ marginTop: 4, marginBottom: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Novo Imóvel
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ display: "flex", mt: 1, gap: 2, flexDirection: 'column', minWidth: { xs: "100%", sm: 550 } }}>
        <ControllerField name="title" control={control} helperText={errors.title?.message} error={!!errors.title} label="Título" />
        <ControllerField name="description" control={control} helperText={errors.description?.message} error={!!errors.description} label="Descrição" />
        <ControllerField name="price" type="number" control={control} helperText={errors.price?.message} error={!!errors.price} label="Preço" />
        <ControllerField name="address" control={control} helperText={errors.address?.message} error={!!errors.address} label="Endereço" />
        <ControllerField name="city" control={control} helperText={errors.city?.message} error={!!errors.city} label="Cidade" />
        <ControllerField name="neighborhood" control={control} helperText={errors.neighborhood?.message} error={!!errors.neighborhood} label="Bairro" />
        <ControllerField name="zip" control={control} helperText={errors.zip?.message} error={!!errors.zip} label="CEP" />
        <ControllerField name="bedrooms" control={control} helperText={errors.bedrooms?.message} error={!!errors.bedrooms} label="Quantidade de Quartos" />
        <ControllerField name="bathrooms" control={control} helperText={errors.bathrooms?.message} error={!!errors.bathrooms} label="Quantidade de Banheiros" />
        <ControllerField name="garages" control={control} helperText={errors.garages?.message} error={!!errors.garages} label="Quantidade de Garagens" />
        <ControllerField name="area" control={control} helperText={errors.area?.message} error={!!errors.area} label="Tamanho da Área" />

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

function ControllerField({ control, error, label, multiline, rows, name, helperText, type = "text" }: {
  control: Control<IValidationSchema>,
  error?: boolean,
  label: string,
  multiline?: boolean,
  rows?: number,
  name: keyof IValidationSchema,
  helperText?: string,
  type?: string
}) {
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type={type}
            multiline={multiline}
            rows={rows}
            fullWidth
            label={label}
            variant="outlined"
            error={error}
            helperText={helperText}
          />
        )}
      />
    </Box>
  );
}
