import { Component, OnInit } from '@angular/core';
import { Datos } from '../interfaces/datos';
import * as pdfMake from "pdfmake/build/pdfmake";
import { DataTableColumnI } from '../interfaces/pdf3.interface';


@Component({
   selector: 'app-pdf',
   templateUrl: './pdf.component.html',
   styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {


   tableColumns: DataTableColumnI[] = [
      { name: "Name", dataKey: "name" },
      { name: "Edad", dataKey: "age" },
      { name: "Ciudad", dataKey: "country" },
      { name: "Notas", dataKey: "notes" },
   ];

   constructor() { }

   ngOnInit(): void {
   }

   private head() {
      return {
         text: [
            {
               text: 'Confiere \n\n',
               alignment: 'center',
               fontSize: 13,
            },
            {
               text: [
                  {
                     text: 'El registro del certificado de Buenas Practicas de Manufactura extranjero emitido por ',
                     alignment: 'center'
                  },
                  {
                     text: '(' + Datos.pdfData3.nombreFactura + ') ',
                     alignment: 'center',
                     color: '#1b9aa1',
                     bold: true,
                  },
                  {
                     text: 'por lo que se le comunica que su codigo BPM es: \n\n',
                     alignment: 'center'
                  },
               ],
               alignment: 'center'
            },
            {
               text: Datos.pdfData3.codigo,
               bold: true,
               alignment: 'center'
            },
            {
               text: ' ' + Datos.pdfData3.anexo + ' \n\n',
               color: '#1b9aa1',
               fontSize: 9,
            },
            {
               text: 'A:',
               alignment: 'center'
            },
         ]
      }
   }


   private body() {
      return Datos.pdfData3.data.section.map(function (section) {
         return [

            //Titulo de la SECCION
            {
               table: {
                  widths: ['*'],
                  body: [
                     [section.title,]
                  ]
               },
               style: 'titleSection'
            },



            section.fila.map(function (fila) {




               /**
                * SI EXISTEN COLUMNA:
                * 
                * SI en el json en la parte columna tiene contenido, se creara.
                * 
                * En el caso de solo haber 1 resultado usaremos todo el ancho.
                * En el cado de haber 2. Se dibide en 2 partes en todo el ancho
                * En el caso de haber 3. Se dibide en 3 partes en todo el ancho.
                * 
                * No podran haber mas de 3 elementos (denido a que ese el maximo
                * establecido por nosotros).
                */
               if (fila.columns != null) {

                  if (fila.columns.length == 1) {

                     /**
                      * En el caso de ser de tipo TEXT.
                      * 
                      * se creara dos valores, una es la etiketa que va a parecer
                      * a lado izquiedo y la segunda sera el resultado que se piensa
                      * mostrar 
                      * 
                      * ej:
                      * 
                      * Nombre: Jorge
                      * Apellido: Villegas
                      */
                     if (fila.columns[0].typeField == 'text') {
                        return {

                           text: [
                              {
                                 text: fila.columns[0].label + ':  ',
                                 bold: true,
                              },
                              {
                                 text: fila.columns[0].value,
                                 style: 'textValor',
                              }
                           ],
                           style: 'saltoLinea',
                           fontSize: 10,
                        }
                     }


                     /**
                      * Si es un tipo TEXTAREA
                      * 
                      * Se crearan dos elementos. uno de tipo label y otro de input.
                      * la etiketa aparecera ensima del elemento de input de gran tamaño.
                      */
                     if (fila.columns[0].typeField == 'textArea') {
                        return {
                           columns: [
                              {
                                 stack: [
                                    {
                                       text: fila.columns[0].label,
                                       style: 'label',
                                    },
                                    {
                                       canvas: [
                                          {
                                             type: 'rect',
                                             x: 0, y: 0, w: 515, h: 75,
                                             rx: 10, ry: 10,
                                             lineWidth: 0.5,
                                             lineColor: 'black',
                                             fillColor: 'yellow',
                                          }
                                       ],
                                    }
                                 ],
                                 style: 'column',
                              },
                           ]
                        }

                     }

                     /**
                      * Si es un tipo CHECK
                      * 
                      * SE creara dos elementos. Uno de tipo label y otro en forma de cuadrado
                      */
                     if (fila.columns[0].typeField == 'check') {
                        return {
                           columns: [
                              {
                                 columns: [
                                    {
                                       width: '4%',
                                       canvas: [
                                          {
                                             type: 'rect',
                                             x: 0, y: 0, w: 15, h: 15,
                                             lineWidth: 0.5,
                                             lineColor: 'black',
                                             fillColor: 'yellow',
                                          }
                                       ],

                                    },
                                    {
                                       text: fila.columns[0].label
                                    },
                                 ],
                                 style: 'column',
                              },
                           ]
                        }
                     }

                     //Si es un tipo Input
                     return {

                        columns: [
                           {
                              stack: [
                                 {
                                    text: fila.columns[0].label,
                                    style: 'label',
                                 },
                                 {
                                    canvas: [
                                       {
                                          type: 'rect',
                                          x: 0, y: 0, w: 515, h: 20,
                                          rx: 10, ry: 10,
                                          lineWidth: 0.5,
                                          lineColor: 'black',
                                          fillColor: 'yellow',
                                       }
                                    ],
                                 }
                              ],
                              style: 'column',
                           },
                        ]

                     };
                  };


                  if (fila.columns.length == 2) {

                     //Si es un tipo CHECK
                     if (fila.columns[0].typeField == 'check' || fila.columns[1].typeField == 'check') {
                        return {
                           columns: [
                              {
                                 columns: [
                                    {
                                       width: '8%',
                                       canvas: [
                                          {
                                             type: 'rect',
                                             x: 0, y: 0, w: 15, h: 15,
                                             lineWidth: 0.5,
                                             lineColor: 'black',
                                             fillColor: 'yellow',
                                          }
                                       ],

                                    },
                                    {
                                       text: fila.columns[0].label
                                    },
                                 ],
                                 style: 'column',
                              },

                              {
                                 columns: [
                                    {
                                       width: '8%',
                                       canvas: [
                                          {
                                             type: 'rect',
                                             x: 0, y: 0, w: 15, h: 15,
                                             lineWidth: 0.5,
                                             lineColor: 'black',
                                             fillColor: 'yellow',
                                          }
                                       ],

                                    },
                                    {
                                       text: fila.columns[1].label
                                    },
                                 ],
                                 style: 'column',
                              },
                           ]
                        };
                     };

                     if (fila.columns[0].typeField == 'text' || fila.columns[1].typeField == 'text') {
                        return {
                           columns: [
                              {
                                 columns: [
                                    {
                                       text: [
                                          {
                                             text: fila.columns[0].label + ':  ',
                                             bold: true,
                                          },
                                          {
                                             text: fila.columns[0].value,
                                             style: 'textValor',
                                          }
                                       ],
                                       style: 'saltoLinea',
                                       fontSize: 10,
                                    },
                                 ],
                              },
                              {
                                 columns: [
                                    {
                                       text: [
                                          {
                                             text: fila.columns[1].label + ':  ',
                                             bold: true,
                                          },
                                          {
                                             text: fila.columns[1].value,
                                             style: 'textValor',
                                          }
                                       ],
                                       style: 'saltoLinea',
                                       fontSize: 10,
                                    },
                                 ],
                              },
                           ],
                        };
                     }

                     //Si es un tipo Input
                     return {

                        columns: [
                           {
                              stack: [
                                 {
                                    text: fila.columns[0].label,
                                    style: 'label',
                                 },
                                 {
                                    canvas: [
                                       {
                                          type: 'rect',
                                          x: 0, y: 0, w: 254, h: 20,
                                          rx: 10, ry: 10,
                                          lineWidth: 0.5,
                                          lineColor: 'black',
                                          fillColor: 'yellow',
                                       }
                                    ],
                                 }
                              ],
                              style: 'column',
                           },
                           {
                              stack: [
                                 {
                                    text: fila.columns[1].label,
                                    style: 'label',
                                 },
                                 {
                                    canvas: [
                                       {
                                          type: 'rect',
                                          x: 0, y: 0, w: 254, h: 20,
                                          rx: 10, ry: 10,
                                          lineWidth: 0.5,
                                          lineColor: 'black',
                                          fillColor: 'yellow',
                                       }
                                    ],
                                 }
                              ],
                              style: 'column',
                           },
                        ]

                     };
                  };


                  if (fila.columns.length == 3) {

                     //Si es un tipo CHECK
                     if (fila.columns[0].typeField == 'check' || fila.columns[1].typeField == 'check' || fila.columns[2].typeField == 'check') {
                        return {
                           columns: [
                              {
                                 columns: [
                                    {
                                       width: '12%',
                                       canvas: [
                                          {
                                             type: 'rect',
                                             x: 0, y: 0, w: 15, h: 15,
                                             lineWidth: 0.5,
                                             lineColor: 'black',
                                             fillColor: 'yellow',
                                          }
                                       ],

                                    },
                                    {
                                       text: fila.columns[0].label
                                    },
                                 ],
                                 style: 'column',
                              },

                              {
                                 columns: [
                                    {
                                       width: '12%',
                                       canvas: [
                                          {
                                             type: 'rect',
                                             x: 0, y: 0, w: 15, h: 15,
                                             lineWidth: 0.5,
                                             lineColor: 'black',
                                             fillColor: 'yellow',
                                          }
                                       ],

                                    },
                                    {
                                       text: fila.columns[1].label
                                    },
                                 ],
                                 style: 'column',
                              },
                              {
                                 columns: [
                                    {
                                       width: '12%',
                                       canvas: [
                                          {
                                             type: 'rect',
                                             x: 0, y: 0, w: 15, h: 15,
                                             lineWidth: 0.5,
                                             lineColor: 'black',
                                             fillColor: 'yellow',
                                          }
                                       ],

                                    },
                                    {
                                       text: fila.columns[2].label
                                    },
                                 ],
                                 style: 'column',
                              },
                           ]
                        };
                     };

                     if (fila.columns[0].typeField == 'text' || fila.columns[1].typeField == 'text' || fila.columns[2].typeField == 'text') {
                        return {
                           columns: [
                              {
                                 columns: [
                                    {
                                       text: [
                                          {
                                             text: fila.columns[0].label + ':  ',
                                             bold: true,
                                          },
                                          {
                                             text: fila.columns[0].value,
                                             style: 'textValor',
                                          }
                                       ],
                                       style: 'saltoLinea',
                                       fontSize: 10,
                                    },
                                 ],
                              },
                              {
                                 columns: [
                                    {
                                       text: [
                                          {
                                             text: fila.columns[1].label + ':  ',
                                             bold: true,
                                          },
                                          {
                                             text: fila.columns[1].value,
                                             style: 'textValor',
                                          }
                                       ],
                                       style: 'saltoLinea',
                                       fontSize: 10,
                                    },
                                 ],
                              },
                              {
                                 columns: [
                                    {
                                       text: [
                                          {
                                             text: fila.columns[2].label + ':  ',
                                             bold: true,
                                          },
                                          {
                                             text: fila.columns[2].value,
                                             style: 'textValor',
                                          }
                                       ],
                                       style: 'saltoLinea',
                                       fontSize: 10,
                                    },
                                 ],
                              },
                           ],
                        };
                     }

                     //Si es un tipo Input
                     return {

                        columns: [
                           {
                              stack: [
                                 {
                                    text: fila.columns[0].label,
                                    style: 'label',
                                 },
                                 {
                                    canvas: [
                                       {
                                          type: 'rect',
                                          x: 0, y: 0, w: 167, h: 20,
                                          rx: 10, ry: 10,
                                          lineWidth: 0.5,
                                          lineColor: 'black',
                                          fillColor: 'yellow',
                                       }
                                    ],
                                 }
                              ],
                              style: 'column',
                           },
                           {
                              stack: [
                                 {
                                    text: fila.columns[1].label,
                                    style: 'label',
                                 },
                                 {
                                    canvas: [
                                       {
                                          type: 'rect',
                                          x: 0, y: 0, w: 167, h: 20,
                                          rx: 10, ry: 10,
                                          lineWidth: 0.5,
                                          lineColor: 'black',
                                          fillColor: 'yellow',
                                       }
                                    ],
                                 }
                              ],
                              style: 'column',
                           },
                           {
                              stack: [
                                 {
                                    text: fila.columns[2].label,
                                    style: 'label',
                                 },
                                 {
                                    canvas: [
                                       {
                                          type: 'rect',
                                          x: 0, y: 0, w: 167, h: 20,
                                          rx: 10, ry: 10,
                                          lineWidth: 0.5,
                                          lineColor: 'black',
                                          fillColor: 'yellow',
                                       }
                                    ],
                                 }
                              ],
                              style: 'column',
                           },
                        ]

                     };
                  };

               }

               //SI EXISTE UNA TABLA
               if (fila.table != null) {

                  /*
                     //Se lo va hacer de manera ceparada debido a que en el head
                     //no coge el color que uno le desea si lo recorremos con map
                     if(fila.table.body != null && fila.table.head != null){
                        if (fila.table.head.length == 1 && fila.table.body != null){
                           return {
                              table: {
                                 widths: ['*',],
                                 body: [
                                    [
                                       {
                                          text: fila.table.head[0].label,
                                          style: 'tableHeader',
                                       },
                                    ],
                                    [
                                       {
                                          text: fila.table.body[0].fila[0].label,
                                          style: 'tableHeader',
                                       },
                                    ],
                                 ],
                              },
                              style: 'table',
                           };
                        };
                     }
   
                     }
                  */

                  /**
                   * ESTA ES UNA TABLA DIFERENTE PARA PRUEBA DE OTRO TIPO
                   */
                  if (fila.table.body != null && fila.table.head != null) {


                     var body: any = [];

                     // body.push([
                     //    { text: 'CENTRO DE PRODUCCION', style: 'tableHeader', },
                     //    { text: 'FORMA FARMACEUTICA', style: 'tableHeader', },
                     //    { text: 'CATEGORIA', style: 'tableHeader', },
                     //    { text: 'ACTIVIDA DE PRODUCTO', style: 'tableHeader', }
                     // ]);

                     
                     fila.table.body.map(function (data) {
                        var r:any = [];
                        fila?.table?.head.map(function (key) {
                           console.log(data[key.dataKey]);
                           r.push([
                              {
                                 text:data[key.dataKey],
                                 style: 'tableBody'
                              }
                           ]);
                        });
                        body.push(r);
                     });

                     return {
                        table: {
                           widths: ['*', '*', '*', '*'],
                           body: [
                              //head
                              [
                                 {
                                    text: 'CENTRO DE PRODUCCION',
                                    style: 'tableHeader',
                                 },
                                 {
                                    text: 'FORMA FARMACEUTICA',
                                    style: 'tableHeader',
                                 },
                                 {
                                    text: 'CATEGORIA',
                                    style: 'tableHeader',
                                 },
                                 {
                                    text: 'ACTIVIDA DE PRODUCTO',
                                    style: 'tableHeader',
                                 }
                              ],
                              ...body
                           ],
                        },
                        style: 'table',
                     };
                  }

               }
               return { text: 'NO RETORNA NADA', color: 'red' };
            })
         ];
      });
   }
   generatePDF() {

      var dd: any = {
         pageSize: 'A4',

         //FONDO DE AGUA
         //aparecera si exite un valor dentro
         watermark: {
            text: Datos.pdfData3.fondoAgua,
            color: '#C0D1EB',
            opacity: 0.5,
            bold: true,
            italics: false,
         },

         //PIE DE PAGINA
         //en este caso mostrara la cantidad de pagina
         footer: function (currentPage = 0, pageCount = 0) {
            return {
               text: Datos.pdfData3.fechaCreacion + ' - Pagina ' + currentPage.toString() + ' de ' + pageCount,
               style: 'footer',
            };
         },

         //Body
         content: [

            //ENCABEZADO DEL BODY
            this.head(),

            //DATA
            this.body(),


            //LUGAR DONDE VA LA INFORMACION DESPUES DE LOS DATOS
            {
               text: 'Historial de cambios del certificado de BPM',
               margin: [10, 15, 0, 15], //[izquierda, superior, derecha, inferior].
               italics: true,
            },
            {
               text: [
                  {
                     text: 'fecha cuando el cordinador general|tecnico genera el certificado_tipo_solicitud ',
                     color: '#1b9aa1',
                  },
                  {
                     text: 'de registro del certificado de Buenas Practicas de Manufactura extranjera',
                  }
               ],
            },

            //FINAL POR LO GENERAL EN ESTE EJEMPLO DONDE VA LA FIRMA
            {
               text: [
                  {
                     text: 'cordinador general tecnico\n',
                     color: '#1b9aa1',
                     alignment: 'center',
                  },
                  {
                     text: 'FIRMA',
                     bold: true,
                     alignment: 'center',
                     fontSize: 11,
                  }
               ],
               margin: [0, 75, 0, 20], //[izquierda, superior, derecha, inferior].
            }

         ],


         //ESTILOS PERSONALIZADOS
         styles: {
            header: {
               fontSize: 18,
               bold: true,
               margin: [0, 15, 0, 0] //[izquierda, superior, derecha, inferior].
            },

            footer: {
               alignment: 'right',
               fontSize: 10,
               margin: [0, 0, 40, 0] //[izquierda, superior, derecha, inferior].
            },

            titleSection: {
               fillColor: '#000',
               color: 'white',
               fontSize: 12,
               margin: [0, 15, 0, 15] //[izquierda, superior, derecha, inferior]
            },

            label: {
               fontSize: 11,
               margin: [0, 0, 0, 3] //[izquierda, superior, derecha, inferior].
            },

            saltoLinea: {
               margin: [0, 5, 0, 0] //[izquierda, superior, derecha, inferior].
            },

            textValor: {
               color: '#1b9aa1',
            },

            column: {
               margin: [0, 10, 7, 0] //[izquierda, superior, derecha, inferior].
            },

            //Estilos para la tabla en general
            table: {
               margin: [0, 15, 0, 15] //[izquierda, superior, derecha, inferior]
            },

            //estilos para el encabezado dela  tablas
            tableHeader: {
               fillColor: '#000',
               color: '#FFF',
               alignment: 'center',
            },

            //Estilos para el cuerpo de la tabla
            tableBody: {
               color: '#1b9aa1',
               fontSize: 10,
               alignment: 'center',
            },

         },

         //ESTILOS POR DEFECTO QUE LE DARE A TODO EL DOCUMENTO
         defaultStyle: {
            alignment: 'justify',
            fontSize: 10,
         }

      }

      //console.log(JSON.stringify(dd));

      pdfMake.createPdf(dd).open();
   }


}
