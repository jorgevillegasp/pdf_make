import { Component, OnInit } from '@angular/core';
import { Datos } from '../interfaces/data';
import * as pdfMake from "pdfmake/build/pdfmake";

@Component({
   selector: 'app-pdf',
   templateUrl: './pdf.component.html',
   styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

   constructor() { }

   ngOnInit(): void {
   }


   generatePDF() {

      var dd: any = {
         pageSize: 'A4',


         // header: {
         //    text: Datos.pdfData3.title,
         //    alignment: 'center',
         //    style: 'header'
         // },
         
         //FONDO DE AGUA
         watermark: {
            text: Datos.pdfData3.fondoAgua,
            color: '#C0D1EB',
            opacity: 0.5,
            bold: true,
            italics: false,
         },


         footer: function (currentPage = 0, pageCount = 0) {
            return {
               text: Datos.pdfData3.fechaCreacion + ' - Pagina ' + currentPage.toString() + ' de ' + pageCount,
               style: 'footer',
            };
         },

         //Body
         content: [
            //ENCABEZADO
            {
               text: [
                  {
                     text: 'Confiere \n\n',
                     alignment: 'center'
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
            },



            Datos.pdfData3.data.section.map(function (section) {
               return [

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

                     //SI EXISTEN COLUMNA
                     if (fila.columns != null) {

                        if (fila.columns.length == 1) {

                           //si es un tipo TEXT
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


                           //Si es uin tipo TextArea
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

                           //Si es un tipo CHECK
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

                        return {
                           table: {
                              body: [
                                 [
                                    {
                                       text: fila.table.head[0].label,
                                       style: 'tableHeader',
                                    },
                                    {
                                       text: fila.table.head[1].label,
                                       style: 'tableHeader',
                                    },
                                    {
                                       text: fila.table.head[2].label,
                                       style: 'tableHeader',
                                    },
                                    {
                                       text: fila.table.head[3].label,
                                       style: 'tableHeader',
                                    }
                                 ],
                                 fila.table.body.map(function (body) {
                                    return [
                                       {
                                          text: body.label,
                                          style: 'tableBody',
                                       }
                                    ];
                                 }),
                              ],
                           },
                           style: 'table',
                        };

                        /*
                        return {
                           table: {
                              body: [
                                 fila.table.head.map(function (head) {
                                    return [
                                       {
                                          text: head.label,
                                          style: 'tableHeader',
                                       }
                                    ];
                                 }),
                                 fila.table.body.map(function (body) {
                                    return [
                                       {
                                          text: body.label,
                                          style: 'tableBody',
                                       }
                                    ];
                                 }),
                              ],
                           },
                           style: 'table',
                        };
                        */
                     }
                     return { text: 'NO RETORNA NADA', color: 'red' };
                  })
               ];
            }),

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


            //TIPO TABLA
            /*
            {
               table: {
                  body: [
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
                        },
                     ],
                     [
                        {
                           text: 'formulario_centro de produccion',
                           style: 'tableBody',
                        },
                        {
                           text: 'formulario_forma farmaceutica',
                           style: 'tableBody',
                        },
                        {
                           text: 'formulario_categoria',
                           style: 'tableBody',
                        },
                        {
                           text: 'actividad de produccion',
                           style: 'tableBody',
                        },
                     ],
                  ]
               },
               style: 'table',
            },
            */

            //final por lo general las firmas
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
               margin: [0, 50, 0, 20], //[izquierda, superior, derecha, inferior].
            }

         ],



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
         defaultStyle: {
            alignment: 'justify',
            fontSize: 10,
         }

      }

      pdfMake.createPdf(dd).open();
   }

}
