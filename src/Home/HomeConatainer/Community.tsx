import { Button, Typography } from "@mui/material";

export function Community(){
    return(
<div>
        <div style={{display:"flex",flexDirection:"row", justifyItems:'center',alignItems:"center", alignContent:"center", justifyContent:"space-between", padding:'1rem' }}>
        <h2 style={{margin:0, fontWeight:"bold"}}>Conversas</h2>
        <Button style={{alignSelf:"end"}} variant="contained">Novo Topico</Button>
        </div>
        <div>
            <Item/>
            <Item/>
            <Item/>
            <Item/>

        </div>
</div>
    )
}

function Item(){
    return(
        <>
        <div>
            <Typography color={'primary'} variant="subtitle2">{truncateText("Amei o atendimento, graças a Deus encontrei esse empreendimento",500)}</Typography>
        </div>
        </>
    )
}

const truncateText = (text:string, maxLength:number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };