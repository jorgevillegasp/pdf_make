export interface Pdf{
    title: string;
    footer: string;
    data: Data;
}

export interface Data{

    forms: Form[];
}

export interface Form{
    subtitulo?: string;
    //la cantidad de columnas que puede tener 
    //no debe de ser mas de 3 registros
    columns: Column[]; //1 | 2 | 3
}

export interface Column{
    typeField?: string; //Input | TextArea | Check | Range | Select    
    label: string;
    input: Input;
}

export interface Input{
    height?: number;
    width?: number;
}


