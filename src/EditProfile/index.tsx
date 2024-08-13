import { Box, Button, Container, FormControlLabel, FormLabel, MenuItem, Paper, Radio, RadioGroup, TextField } from "@mui/material";

export function EditProfile(){
    return(
  
        <Container maxWidth="lg" style={{minHeight:'100vH'}} >
            <Paper sx={{mt:8,p:4}}>
                <BasicTextFields/>
            </Paper>
        </Container>
     
    )
}


export default function BasicTextFields() {
    const currencies = [
        {
          value: 'solteiro',
          label: 'solteiro',
        },
        {
          value: 'casado',
          label: 'casado',
        },
        {
          value: 'divorciado',
          label: 'divorciado',
        },
        {
          value: 'viúvo',
          label: 'viúvo',
        },
      ];
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField defaultValue={0} label="Renda" variant="outlined" />
        <TextField defaultValue={0}  label="Entrada" variant="outlined" />
        <TextField defaultValue={0}  label="Saldo FGTS" variant="outlined" />
        <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Est. Civil"
          defaultValue="solteiro"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </div>
        <FormLabel id="demo-radio-buttons-group-label">Filhos ou dependentes?</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="nao"
            name="radio-buttons-group">
            <FormControlLabel value="nao" control={<Radio />} label="Não" />
            <FormControlLabel value={"sim"} control={<Radio />} label="Sim" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">Já tabalhou mais de 3 anos de carteira assinada?</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="nao"
            name="radio-buttons-group">
            <FormControlLabel value="nao" control={<Radio />} label="Não" />
            <FormControlLabel value={"sim"} control={<Radio />} label="Sim" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">Primeiro imovel?</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="nao"
            name="radio-buttons-group">
            <FormControlLabel value="nao" control={<Radio />} label="Não" />
            <FormControlLabel value={"sim"} control={<Radio />} label="Sim" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">Possui algum financiamento?</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="nao"
            name="radio-buttons-group">
            <FormControlLabel value="nao" control={<Radio />} label="Não" />
            <FormControlLabel value={"sim"} control={<Radio />} label="Sim" />
        </RadioGroup>
        <Button size="large" variant="contained">Salvar</Button>


      </Box>
    );
  }