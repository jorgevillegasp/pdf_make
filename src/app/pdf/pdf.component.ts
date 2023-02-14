import { Component, Input, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import { Pdf } from '../interfaces/pdf.interface';


@Component({
   selector: 'app-pdf',
   templateUrl: './pdf.component.html',
   styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {



   @Input() data!: Pdf;




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
                     text: '(' + this.data.nombreFactura + ') ',
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
               text: this.data.codigo,
               bold: true,
               alignment: 'center'
            },
            {
               text: ' ' + this.data.anexo + ' \n\n',
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
      return this.data.data.section.map(function (section) {
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
                * No podran haber mas de 3 elementos (teniendo encuenta que ese 
                * el maximo establecido por nosotros).
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


                  //ESTA ES UNA TABLA DIFERENTE PARA PRUEBA DE OTRO TIPO
                  if (fila.table.body != null && fila.table.head != null) {

                     /**                     
                      * Arreglo de datos que vamos a usar para almacenar lo que 
                      * contendra el encabezado de la tabla
                      */
                     var head: any = [];

                     /**                     
                      * Arreglo de datos que vamos a usar para almacenar lo que 
                      * contendra el cuerpo de la tabla
                      */
                     var body: any = [];


                     
                     // Contenido para la cabecera de la tabla
                     var h:any = [];
                     fila?.table?.head.map(function (data) {
                        h.push(
                           {
                              text: data.name, 
                              style: 'tableHeader', 
                           }
                        );
                     });
                     head.push(h);

                     
                     // Hacemos la inserccion de los datos que vamos a presentar
                     // dentro del cuerpo de la tabla
                     fila.table.body.map(function (data) {
                        var r:any = [];
                        fila?.table?.head.map(function (key) {
                           r.push([
                              {
                                 text:data[key.dataKey],
                                 style: 'tableBody'
                              }
                           ]);
                        });
                        body.push(r);
                     });

                     /**
                      * widths:
                      * 
                      * elemento arreglo que contendra el total de columnas
                      * que tendra la tabla, de tal manera que por cada columna
                      * tendra un '*' que representa a tomar todo el ancho 
                      * del documento
                      */
                     var widths:any = [];
                     for (var i = 0 ; i < fila.table.head.length; i++) {
                        widths.push('*');
                     }



                     //Retornamos tabla en si 
                     return {
                        table: {
                           /**
                           * El  total de ancho que va a tener cada columna
                           * este ancho es determinado por la cantidad que
                           * tiene el head de la tabla ya que alli es donde
                           * almacemaos la data y el datakey de cada columna
                           **/
                           widths: [...widths],

                           /**
                            * El contenido de la tabla.
                            * 
                            * donde estara insertada la cabecera y
                            * el contenido de la tabla
                            */
                           body: [
                              ...head,
                              ...body,
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
            text: this.data.fondoAgua,
            color: '#C0D1EB',
            opacity: 0.5,
            bold: true,
            italics: false,
         },

         //PIE DE PAGINA
         //en este caso mostrara la cantidad de pagina
         footer: function (currentPage = 0, pageCount = 0) {
            return {
               text: 'Pagina ' + currentPage.toString() + ' de ' + pageCount,
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
