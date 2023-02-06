export interface pdf{
    title: string;
    footer: string;
    data: data;
    
}

export interface data{
    forms: form[];
}
export interface form{
    //la cantidad de columnas que puede tener 
    //no debe de ser mas de 3 registros
    columns: column[]; //1 | 2 | 3
}

export interface column{
    label: string;
    input: input;
}

export interface input{
    height?: number;
    width?: number;
}
