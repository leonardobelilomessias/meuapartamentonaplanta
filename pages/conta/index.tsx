import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Layout } from '@/components/Layout';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import dayjs, { Dayjs } from 'dayjs';
import { useUserData } from '@/context/ContextAccount';
import { FirebaseError } from 'firebase/app';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Phone } from '@mui/icons-material';
import { updateAccountUser } from '@/lib/updateAccountUser';
import { ContainerToFixHeader } from '@/components/shared/ContainerToFixHeader';
import { AccountScreen } from '@/AccountScreen';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
interface IFormInputs {
  name:string
  email: string;
  phone: string;
}
export default function conta() {


  return (

      <Layout>

      <AccountScreen/>

      </Layout>

  );
}