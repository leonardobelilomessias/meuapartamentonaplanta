import React, { useState } from 'react';
import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, FormControlLabel, FormLabel, MenuItem, Paper, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import dayjs, { Dayjs } from 'dayjs';
import { useUserData } from '@/context/ContextAccount';
import { updateFinanceProfile } from '@/lib/updateFinanceProfile';
import { convertDateFormat } from '@/utils/date';
import { DialogModal } from '@/components/modal/DialogModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';


interface IFormInput {
  renda: number;
  entrada: number;
  saldoFgts: number;
  estadoCivil: string;
  filhosDependentes: string;
  trabalho3Anos: string;
  primeiroImovel: string;
  financiamento: string;
  dataNascimento: Dayjs | null |Date | any;
  tipoRenda:string
}

export function EditProfile() {
  return (
    <Container maxWidth="lg" style={{ minHeight: '100vH', marginBottom: '1rem' }}>
      <Paper sx={{ mt: 8, p: 4 }}>
        <Link href={'/'}>
          <Button sx={{ mb: 4 }} variant="text"><ArrowBack fontSize="small" /> Voltar</Button>
        </Link>
        <Typography variant="h4" sx={{ mb: 4 }} fontWeight={'bold'}>Editar Perfil Financeiro</Typography>
        <BasicTextFields />
      </Paper>
    </Container>
  );
}

export default function BasicTextFields() {
  const validationSchema = Yup.object().shape({
    renda: Yup.number().typeError('A renda deve ser um número valido').required('Renda é obrigatória').min(0, 'Renda não pode ser negativa'),
    entrada: Yup.number().typeError('A entrada deve ser um número valido').required('Entrada é obrigatória').min(0, 'Entrada não pode ser negativa'),
    saldoFgts: Yup.number().typeError('A saldo FGTS deve ser um número valido').required('Saldo FGTS é obrigatório').min(0, 'Saldo FGTS não pode ser negativo'),
    estadoCivil: Yup.string().required('Estado Civil é obrigatório'),
    filhosDependentes: Yup.string().required('Campo obrigatório'),
    trabalho3Anos: Yup.string().required('Campo obrigatório'),
    primeiroImovel: Yup.string().required('Campo obrigatório'),
    financiamento: Yup.string().required('Campo obrigatório'),
    dataNascimento: Yup.date().nullable().required('Data de nascimento é obrigatória'),
    tipoRenda: Yup.string().required('Tipo de renda é obrigatório'),


  });

  const { handleSubmit, control, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });
  const {id,updateDataFinance,dataFinanceProfile} = useUserData()
  const onSubmit = async (data: IFormInput) => {
    
    const formattedDate = dayjs(data.dataNascimento).format('DD-MM-YYYY');
    data.dataNascimento = formattedDate

    try{
      setLoad(true)
      await updateFinanceProfile(id,data)
      await updateDataFinance(id)
      toast("Dados Alterados com sucesso!");
    }catch(e){
      console.log(e)
    }finally{
      setLoad(false)
    }
    console.log(data);

  };

  const currencies = [
    { value: 'solteiro', label: 'Solteiro' },
    { value: 'casado', label: 'Casado' },
    { value: 'divorciado', label: 'Divorciado' },
    { value: 'viúvo', label: 'Viúvo' },
  ];
  const tiposRenda = [
    { value: 'Formal', label: 'Formal' },
    { value: 'informal', label: 'Informal' },
    { value: 'mista', label: 'Mista' },
  ];
  const defaultDate = convertDateFormat(dataFinanceProfile.dataNascimento)
  const [openModal,setOpenModal] =useState(false)
  const messageModal = 'tem certeza que deseja salvar as alterações'
  const titleModal = "Alteração de Perfil"
  const [load,setLoad] = useState(false)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ToastContainer />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="renda"
          control={control}
          defaultValue={dataFinanceProfile.renda ?? 0}
          render={({ field }) => (
            <TextField
              {...field}
              label="Renda"
              variant="outlined"
              error={!!errors.renda}
              helperText={errors.renda?.message}
            />
          )}
        />
        <Controller
          name="entrada"
          control={control}
          defaultValue={dataFinanceProfile.entrada}
          render={({ field }) => (
            <TextField
              {...field}
              label="Entrada"
              variant="outlined"
              error={!!errors.entrada}
              helperText={errors.entrada?.message}
            />
          )}
        />
        <Controller
          name="saldoFgts"
          control={control}
          defaultValue={dataFinanceProfile.saldoFgts}
          render={({ field }) => (
            <TextField
              {...field}
              label="Saldo FGTS"
              variant="outlined"
              error={!!errors.saldoFgts}
              helperText={errors.saldoFgts?.message}
            />
          )}
        />
        <Controller
          name="estadoCivil"
          control={control}
          defaultValue={dataFinanceProfile.estadoCivil}
          render={({ field }) => (
            <TextField
              select
              label="Estado Civil"
              {...field}
              error={!!errors.estadoCivil}
              helperText={errors.estadoCivil?.message}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
                <Controller
          name="tipoRenda"
          control={control}
          defaultValue={dataFinanceProfile.tipoRenda?dataFinanceProfile.tipoRenda:"Formal"}
          render={({ field }) => (
            <TextField
              select
              label="Tipo de Renda"
              {...field}
              error={!!errors.tipoRenda}
              helperText={errors.tipoRenda?.message}
            >
              {tiposRenda.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <Controller
          name="dataNascimento"
          control={control}
          defaultValue={dayjs(defaultDate)}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Box sx={{display:'flex', flexDirection:"column"}}>
            <DatePicker
              label="Data de Nascimento"
              sx={{ border:errors.dataNascimento?'1px red solid':'', borderRadius:2}}
              value={value}
              defaultValue={dayjs(defaultDate)}
              onChange={(newValue) => onChange(newValue)}
              format='DD/MM/YYYY'
            />
        {errors.dataNascimento&&<Typography color={'red'} variant='caption'>Data é obrigatorio</Typography>}
            </Box>
          )}
        />
        <FormLabel>Filhos ou dependentes?</FormLabel>
        <Controller
          name="filhosDependentes"
          control={control}
          defaultValue={dataFinanceProfile.filhosDependentes?dataFinanceProfile.filhosDependentes:'nao'}
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel value="nao" control={<Radio />} label="Não" />
              <FormControlLabel value="sim" control={<Radio />} label="Sim" />
            </RadioGroup>
          )}
        />
        <FormLabel>Já trabalhou mais de 3 anos de carteira assinada?</FormLabel>
        <Controller
          name="trabalho3Anos"
          control={control}
          defaultValue={dataFinanceProfile.trabalho3Anos?dataFinanceProfile.trabalho3Anos:'nao'}
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel value="nao" control={<Radio />} label="Não" />
              <FormControlLabel value="sim" control={<Radio />} label="Sim" />
            </RadioGroup>
          )}
        />
        <FormLabel>Primeiro imóvel?</FormLabel>
        <Controller
          name="primeiroImovel"
          control={control}
          defaultValue={dataFinanceProfile.primeiroImovel?dataFinanceProfile.primeiroImovel:'nao'}
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel value="nao" control={<Radio />} label="Não" />
              <FormControlLabel value="sim" control={<Radio />} label="Sim" />
            </RadioGroup>
          )}
        />
        <FormLabel>Possui algum financiamento?</FormLabel>
        <Controller
          name="financiamento"
          control={control}
          defaultValue="nao"
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel value="nao" control={<Radio />} label="Não" />
              <FormControlLabel value="sim" control={<Radio />} label="Sim" />
            </RadioGroup>
          )}
        />
  {
    !load&&
    <Button size="large" type="submit" variant="contained">Salvar</Button>
  }
  
  {
  load && 
   <LoadingButton size="large" variant="outlined" loading loadingPosition="center" startIcon={<SaveIcon />}>
  Salvando
  </LoadingButton>

}
      </Box>
    </LocalizationProvider>
  );
}
