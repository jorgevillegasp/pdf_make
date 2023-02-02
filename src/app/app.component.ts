import { style } from '@angular/animations';
import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { from } from 'rxjs';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  json = {
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
    form: [
      {
        label: {
          text: "Nombre",
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
          text: "Correo electrónico",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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
          text: "Nombre",
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

  crearPDF() {
    var docForm: any = {
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
        {
          columns: [
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
     var cont = 1;
    /*
      hay que recorrer por cada FILAS una ves
      luego recorrerla para ir dibujando las COLUMNAS
      para terminar pintando el LABEL y INPUT
    */
    this.dataColumn.form.forEach(element => {
      cont++;
      if(cont <= 3){
        docForm.content[0].columns[1].columns[cont].text = element.label.text
      }
    });
  
    // for (var i = 0; i < this.dataColumn.f; i++) {
    //   var columnIndex = i % 3;
    //   docDefinition.content[0].columns[columnIndex].text += data[i] + '\n';
    // }
  

    const pdf = pdfMake.createPdf(docForm);
    pdf.open();

  }


}




export interface dataColumn{
  id: number,
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