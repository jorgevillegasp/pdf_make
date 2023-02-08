export interface Pdf2{
    title: string;
    footer: string;
    data: Data;
}

export interface Data{
    section: Section[];
}

export interface Section{
    title?: string;
    fila: Fila[];

}

export interface Fila{
    //la cantidad de columnas que puede tener 
    //no debe de ser mas de 3 registros
    columns: Column[]; //1 | 2 | 3
}

export interface Column{
    typeField?: string; //input | textArea | check | select?  
    label: string;
    input?: Input;
}

export interface Input{
    height?: number; //altura
    width?: number; //ancho
}
