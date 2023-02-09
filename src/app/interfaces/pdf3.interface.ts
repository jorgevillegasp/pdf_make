export interface Pdf3{
    codigo?:        string;
    nombreFactura?: string;
    anexo?:         string;
    footer?:        string;
    fechaCreacion?: string;
    fondoAgua?:     string;
    data:           Data;
}

export interface Data{
    section: Section[];
}

export interface Section{
    title:  string;
    fila:   Fila[];
}

/**
 * interface que admite un solo objeto.
 * Puede tener columnas o
 * Puede tener una tabla
 **/
export interface Fila{
    
    columns?: Column[]; //1 | 2 | 3
    //la cantidad de columnas que puede tener 
    //no debe de ser mas de 3 registros

    table?: Table;  
    //Objeto Table en caso de insertar una tabla
}


export interface Column{
    typeField?: string; //input | textArea | check | text  
    // Se agregó una propiedad typeField a la interfaz Column 
    // para especificar el tipo de campo que se desea mostrar.  
    label:  string;
    value?: string;
}


//en caso de insertar una tabla
export interface Table{
    head: Head[];
    body: Body[];
}

export interface Head{
    label: string;
}
export interface Body{
    label: string;
}



