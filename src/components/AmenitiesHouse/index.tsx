import { Avatar, Box, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import StraightenIcon from '@mui/icons-material/Straighten';
import ElevatorIcon from '@mui/icons-material/Elevator';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AttractionsIcon from '@mui/icons-material/Attractions';
import PoolIcon from '@mui/icons-material/Pool';
import BalconyIcon from '@mui/icons-material/Balcony';
import CountertopsIcon from '@mui/icons-material/Countertops';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import ComputerIcon from '@mui/icons-material/Computer';
import LanIcon from '@mui/icons-material/Lan';
import AirIcon from '@mui/icons-material/Air';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
export function AmenitiesHouse(){
    return(
        <Box sx={{mt:'3rem',mb:'3rem'}}>
                <Typography sx={{marginBottom:"1rem"}} variant="h5" fontWeight={'600'}>Comodidades do Emprendimento</Typography>
                <Box sx={{display:"flex",gap:'1.2rem', flexWrap:"wrap",mt:'3rem' }}>
                <BoxAmenities title='Elevador' >
                      <ElevatorIcon sx={{fontSize:"1.3rem"}} />
                </BoxAmenities>

                <BoxAmenities title='Playgroud' >
                      <AttractionsIcon sx={{fontSize:"1.3rem"}} />
                </BoxAmenities >

                <BoxAmenities title=' Piscina' >
                      <PoolIcon sx={{fontSize:"1.3rem"}} />
                </BoxAmenities >

                <BoxAmenities title='Varanda' >
                      <BalconyIcon sx={{fontSize:"1r1.3remem"}} />
                
                </BoxAmenities >

                <BoxAmenities title='Area Gourmert' >
                      <CountertopsIcon sx={{fontSize:"1r1.3remem"}} />
                
                </BoxAmenities >
                <BoxAmenities title='Salão de Festas' >
                      <CelebrationIcon sx={{fontSize:"1r1.3remem"}} />
                
                </BoxAmenities >
                <BoxAmenities title='Academia' >
                      <FitnessCenterIcon sx={{fontSize:"1r1.3remem"}} />
                
                </BoxAmenities >
                <BoxAmenities title='Lavanderia' >
                      <DirectionsCarIcon sx={{fontSize:"1r1.3remem"}} />
                
                </BoxAmenities >
                <BoxAmenities title='Espaço de Co-Working' >
                      <LanIcon sx={{fontSize:"1r1.3remem"}} />
                
                </BoxAmenities >
                <BoxAmenities title='Sauna' >
                      <AirIcon sx={{fontSize:"1r1.3remem"}} />
                
                </BoxAmenities >
                <BoxAmenities title='Portaria 24hrs' >
                      <MeetingRoomIcon sx={{fontSize:"1r1.3remem"}} />


                
                </BoxAmenities >
            </Box>
        </Box>
    )
}

function BoxAmenities({children, title}:{title:string,children:React.ReactNode}){
    return(
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", maxWidth:'300px', minWidth:{xs:"100px",sm:"120px"}, }}>
        <Box  sx={{color:blue[700], backgroundColor:'white', width:'2rem', height:"2rem",display:"flex", alignItems:"center", justifyContent:"center"}}>
            {children}
        </Box>
            <Typography fontWeight={'600'} textAlign={'center'} color={blue[700]} fontSize={"1rem"}>{title}</Typography>
        </Box>
    )
}