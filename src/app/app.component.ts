import { style } from '@angular/animations';
import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { elementAt, from } from 'rxjs';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  nuevaColumna: any;
  json = {
    numerColumnas: 2,
    title: 'Creacion del formulario',
    textText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur',
    footerText: 'Este es el pie de pagina',
    formulario: {
      label: {
        text: 'Apellidos:',
        ancho: 50,
        alto: 15,
      },
      input: {
        ancho: 110,
        ancho2: 180,
        alto: 15,

      },
    },
  }

  dataColumn: dataColumn = {
    id: 1,
    numeroColumnas: 2,
    form: [
      {
        label: {
          text: "label1",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "labe2",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su correo electrónico",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label3",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label4",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label5",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label6",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label7",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label8",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label9",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label10",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label11",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label12",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label13",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label14",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label15",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label16",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
      {
        label: {
          text: "label17",
          width: 100,
          height: 40
        },
        input: {
          placeholder: "Ingrese su nombre",
          width: 200,
          height: 40
        }
      },
    ]
  };




  title = 'pdf_make';

  docForm: any = {
    pageSize: 'A4',
    header: [
      {
        text: this.json.title,
        style: 'header',
      },
    ],
    footer: function (paginaActual = 0, numeroPaginas = 0) {
      return [
        {
          text: 'Pag ' + paginaActual.toString() + ' de ' + numeroPaginas,
          alignment: 'right',
          style: 'footer',
        }
      ];
    },

    content: [
      {
        text: 'hola mundo'
      },
      //FILA DE 3 COLUMNAS
      {
        columns: [
          {
            columns: [
              {
                text: this.json.formulario.label.text,
                width: this.json.formulario.label.ancho,
                height: this.json.formulario.label.alto,
                style: 'formLabel'
              },
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: this.json.formulario.input.ancho,
                    h: this.json.formulario.input.alto,
                    lineWidth: 0.5,
                    lineColor: 'black',
                    fillColor: 'yellow'
                  }
                ],
                style: 'formInput',
                border: [true, true, true, true],
              },
            ],
            width: '*',
            text: this.json.textText,

          },
          {
            columns: [
              {
                width: this.json.formulario.label.ancho,
                height: this.json.formulario.label.alto,
                text: this.json.formulario.label.text,
                style: 'formLabel'
              },
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: this.json.formulario.input.ancho,
                    h: this.json.formulario.input.alto,
                    lineWidth: 0.5,
                    lineColor: 'black',
                    fillColor: 'yellow'
                  }
                ],
                style: 'formInput',
                border: [true, true, true, true],
              },
            ],
            width: '*',
            text: this.json.textText,
          },
          {
            columns: [
              {
                width: this.json.formulario.label.ancho,
                height: this.json.formulario.label.alto,
                text: 'Label:',
                style: 'formLabel'
              },
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: this.json.formulario.input.ancho,
                    h: this.json.formulario.input.alto,
                    lineWidth: 0.5,
                    lineColor: 'black',
                    fillColor: 'yellow'
                  }
                ],
                style: 'formInput',
                border: [true, true, true, true],
              },
            ],
            width: '*',
            text: this.json.textText,
          },
        ],
        style: 'saltoLinea',
      },
      //FILA DE 2 COLUMNAS
      {
        columns: [
          //1 COLUMNA
          {
            columns: [
              {
                width: this.json.formulario.label.ancho,
                height: this.json.formulario.label.alto,
                text: 'Label:',
                style: 'formLabel'
              },
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: this.json.formulario.input.ancho2,
                    h: this.json.formulario.input.alto,
                    lineWidth: 0.5,
                    lineColor: 'black',
                    fillColor: 'yellow'
                  }
                ],
                style: 'formInput',
                border: [true, true, true, true],
              },
            ],
            width: '*',
            text: this.json.textText,
          },
          //2 COLUMNA
          {
            columns: [
              {
                width: this.json.formulario.label.ancho,
                height: this.json.formulario.label.alto,
                text: 'Label:',
                style: 'formLabel'
              },
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: this.json.formulario.input.ancho2,
                    h: this.json.formulario.input.alto,
                    lineWidth: 0.5,
                    lineColor: 'black',
                    fillColor: 'yellow'
                  }
                ],
                style: 'formInput',
                border: [true, true, true, true],
              },
            ],
            width: '*',
            text: this.json.textText,
          },
        ],
      },
      //FILA DE 2 COLUMNAS
      {
        columns: [
          //1 COLUMNA
          {
            columns: [
              {
                width: this.json.formulario.label.ancho,
                height: this.json.formulario.label.alto,
                text: 'Label:',
                style: 'formLabel'
              },
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: this.json.formulario.input.ancho2,
                    h: this.json.formulario.input.alto,
                    lineWidth: 0.5,
                    lineColor: 'black',
                    fillColor: 'yellow'
                  }
                ],
                style: 'formInput',
                border: [true, true, true, true],
              },
            ],
            width: '*',
            text: this.json.textText,
          },
          //2 COLUMNA
          {
            columns: [
              {
                width: this.json.formulario.label.ancho,
                height: this.json.formulario.label.alto,
                text: 'Label:',
                style: 'formLabel'
              },
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: this.json.formulario.input.ancho2,
                    h: this.json.formulario.input.alto,
                    lineWidth: 0.5,
                    lineColor: 'black',
                    fillColor: 'yellow'
                  }
                ],
                style: 'formInput',
                border: [true, true, true, true],
              },
            ],
            width: '*',
            text: this.json.textText,
          },
        ],
      },
      {
        alignment: 'justify',
        columns: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          }
        ]
      },


    ],
    styles: {
      // fontSize: tamaño de fuente en puntos
      // font: nombre de la fuente
      // bold: true/false para negrita
      // italics: true/false para cursiva
      // alignment: alineación del texto ('left', 'right', 'center', 'justify')
      // margin: objeto con las propiedades top, left, bottom, right para definir márgenes
      // color: color del texto en formato RGB o hexadecimal
      // fillColor: color de relleno en formato RGB o hexadecimal
      // characterSpacing: espaciado entre caracteres en puntos
      // lineHeight: altura de línea
      // decoration: tipo de subrayado ('underline', 'lineThrough', 'overline')

      //estilo apra el encabezado
      header: {
        fontSize: 20,
        bold: true,
        margin: [0, 10, 0, 10], //[left, top, right, bottom]
        alignment: 'center',
      },
      footer: {
        fontSize: 10,
        margin: [0, 10, 50, 10], //[left, top, right, bottom]
      },
      formLabel: {
        fontSize: 10,

      },
      formInput: {
        fontSize: 12,
        width: '100%',
        height: 20,
        margin: [0, 0, 5, 0], //[left, top, right, bottom]
      },
      saltoLinea: {
        margin: [0, 5, 0, 10], //[left, top, right, bottom]
      }
    }
  };
  crearPDF() {

    //crar una variable donde pueda almacenar la UNION de mi laber con mi input
    let uniones: any = [];
    //luego crear otra variable donde pueda almacenar la COLUMNA con la UNION de mi input
    let columnas: any = [];
    //luego crear otra variable donde pueda almacenar TODAS LAS COLUMNAS dentro de mi CONTENT
    let content: any = [];


    this.dataColumn.form.forEach(elementAt => {
      uniones.push([
        {
          columns: [
            {
              text: elementAt.label.text,
              width: 75,
              height: 20,
              style: 'formLabel',
            },
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 150,
                  h: 20,
                  lineWidth: 0.5,
                  lineColor: 'black',
                  fillColor: 'yellow'
                }
              ],
              style: 'formInput',
              border: [true, true, true, true],
            },
          ],
          width: '*',
        }
      ]);
    });

    //HAY QUE CREAR UNA FILA POR CADA DOS COLUMNAS

    let createCol = false;
    for (let i = 0; i < uniones.length; i++) {
      const element = uniones[i];

      if (createCol) {

        //Creamos una fila nueva con las dos columnas
        columnas.push([{
          columns: [element],
        }]);

        //insertamos la columna 
        content.push({columnas});

        //limpiamos la columna
        columnas = [];
        createCol=false;

      }
      else {
        
        columnas.push([{
          columns: [element],
        }]);
        createCol = true;

      }


    }
    console.log(content);
    this.docForm.content.push(columnas);
    console.log(this.docForm);
    const pdf = pdfMake.createPdf(this.docForm);
    pdf.open();

  }


}




export interface dataColumn {
  id: number,
  numeroColumnas: number,
  form: form[]
}
export interface form {
  label: label,
  input: input
}

export interface label {
  text: string,
  width?: number,
  height?: number,
}

export interface input {
  placeholder?: string,
  width?: number,
  height?: number,
}