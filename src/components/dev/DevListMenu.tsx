import { navigationDev } from "@/contants/navegationElements";
import { gray } from "@/LandingPage/getLPTheme";
import { Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { blue } from "@mui/material/colors";
import Link from "next/link";
import { useRouter } from "next/router";
import InboxIcon from '@mui/icons-material/MoveToInbox';


export function DevListMenu(){
    const router = useRouter();
    const resulRouter = router.pathname;
    const goback = router.back
    const path = resulRouter as string;
    return(
      <>
      <Typography marginLeft={2} variant='overline'>Desenvolvimento</Typography>   
        <Divider />
        <List>
          {navigationDev.map((item, index) => (
          <Link href={item.link} key={item.title} style={{ textDecoration:"none", color:"inherit"}}>
            <ListItem key={item.title} disablePadding sx={{backgroundColor:path===item.link? gray[100]:""}}>
              <ListItemButton >
                <ListItemIcon color='primary' sx={{color:path===item.link? blue[800]:""}}>
                { item.icon?<item.icon/>:<InboxIcon/>}
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontWeight: path===item.link?'600':"",color:path===item.link? blue[700]:"",}}  primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
          ))}
        </List>
      </>
    )
  }