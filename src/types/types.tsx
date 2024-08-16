export interface IFormInputFinance {
    renda?: number; // Agora os campos são opcionais
    entrada?: number;
    saldoFgts?: number;
    estadoCivil?: string;
    filhosDependentes?: string;
    trabalho3Anos?: string;
    primeiroImovel?: string;
    financiamento?: string;
    dataNascimento?: Date | null; // Agora é opcional
    tipoRenda?:string
  }

  export interface IUser{
    name?: string;
    phone?: string;
    email?: string;
    id?: string;
  }

  export interface INewPost{
    name?: string;
    id?: string;
    title?: string;
    message?: string;
    created_at:Date,
    updated_at:Date
  }

  export interface INewPostForm{

    title: string;
    message: string;
  }