import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Timestamp } from 'firebase/firestore';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
// Adicionar o plugin ao dayjs
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale('pt-br');
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
interface ITime{
  time:Date | Timestamp
}

export function converteTimestampFireStore(time:  Timestamp |Date){
dayjs.locale('pt-br');


  // Exemplo de uso
  const originalDate = '25-10-2000';
  const newFormatDate = convertDateFormat(originalDate);

  if (time instanceof Timestamp){
    const timestamp = new Timestamp(time.seconds, time.nanoseconds);
    const isoDate = timestamp.toDate().toISOString(); 
    const date = dayjs(isoDate);
    const formattedDate = date.fromNow();
    const specificFormat = date.format('D [de] MMMM [de] YYYY [às] H:mm'); 
    return specificFormat

  }


  
  // Convertendo para uma data JavaScript
}

