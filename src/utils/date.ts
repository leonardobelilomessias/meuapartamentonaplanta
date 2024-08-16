import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// Adicionar o plugin ao dayjs
dayjs.extend(customParseFormat);

// Função para converter o formato de data
export const convertDateFormat = (dateString: string| any): string => {
  // Analisar a data no formato dd-MM-yyyy
  const parsedDate = dayjs(dateString, 'DD-MM-YYYY');

  // Verificar se a data foi analisada corretamente
  if (!parsedDate.isValid()) {
    throw new Error('Data inválida');
  }

  // Formatar a data no formato MM-DD-YYYY
  return parsedDate.format('YYYY-MM-DD');
};

// Exemplo de uso
const originalDate = '25-10-2000';
const newFormatDate = convertDateFormat(originalDate);

console.log(newFormatDate); // Saída: 10-25-2000