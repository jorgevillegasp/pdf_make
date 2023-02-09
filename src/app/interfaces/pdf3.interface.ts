export interface Pdf3{
    codigo?: string;
    nombreFactura?: string;
    anexo?: string;
    footer: string;
    data: Data;
}

export interface Data{
    section: Section[];
}

export interface Section{
    title: string;
    fila: Fila[];

}

export interface Fila{
    //la cantidad de columnas que puede tener 
    //no debe de ser mas de 3 registros
    columns: Column[]; //1 | 2 | 3
}

export interface Column{
    typeField?: string; //input | textArea | check | text  
    label: string;
    value?: string;
}

export interface Table{
    header: Head[];
    body: Body[];
}

export interface Head{
    label: string;
}
export interface Body{
    label: string;
}



