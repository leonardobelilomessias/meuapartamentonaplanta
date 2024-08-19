import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventIcon from '@mui/icons-material/Event';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RadarIcon from '@mui/icons-material/Radar';
import FlagIcon from '@mui/icons-material/Flag';
import HomeIcon from '@mui/icons-material/Home';
export const navigationElementsAccount = [
  { title: 'Home', link: '/', icon: HomeIcon  },
  { title: 'Perfil', link: '/perfil', icon: AccountCircleIcon },
  { title: 'Favoritos', link: "/favoritos", icon: FavoriteIcon },
  { title: 'Agendamentos', link: "/agendamentos", icon: EventIcon },
  { title: 'Documentos', link: "/documentos", icon: DescriptionIcon }
];

export const navigationElementsTools = [
  { title: 'Notificações', link: '/notificacoes', icon: NotificationsIcon },
  { title: 'Radar', link: "/radar", icon: RadarIcon }, 
  { title: 'Metas', link: "/metas", icon: FlagIcon },
  { title: 'Novo Imovel', link: "/novo-imovel", icon: '' }
];
