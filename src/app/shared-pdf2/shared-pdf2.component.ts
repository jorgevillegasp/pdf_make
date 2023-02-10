import { Component, OnInit } from '@angular/core';
import { Datos } from '../interfaces/datos';
import * as pdfMake from "pdfmake/build/pdfmake";

@Component({
   selector: 'app-shared-pdf2',
   templateUrl: './shared-pdf2.component.html',
   styleUrls: ['./shared-pdf2.component.scss']
})
export class SharedPdf2Component implements OnInit {

   constructor() { }

   ngOnInit(): void {
   }

   generatePDF() {

      var dd: any = {
         pageSize: 'A4',


         header: {
            text: Datos.pdfData2.title,
            alignment: 'center',
            style: 'header'
         },


         footer: function (currentPage = 0, pageCount = 0) {
            return {
               text: Datos.pdfData2.footer + ' - Pagina ' + currentPage.toString() + ' de ' + pageCount,
               style: 'footer',
            };
         },

         //Body
         content: [


            Datos.pdfData2.data.section.map(function (section) {
               return [

                  {
                     text: section.title,
                     style: 'titleSection'
                  },


                  section.fila.map(function (fila) {


                     if (fila.columns.length == 1) {

                        //si es un tipo TEXT
                        if (fila.columns[0].typeField == 'text') {
                           return {
                              text: fila.columns[0].label,
                              style: 'column',
                              fontSize: 10,
                           }
                        }


                        //Si es uin tipo TextArea
                        if(fila.columns[0].typeField == 'textArea'){
                           return{
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


                     return { text: 'no retorna nada' };
                  })
               ];
            }),

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
               fontSize: 15,
               margin: [0, 15, 0, 5] //[izquierda, superior, derecha, inferior].
            },

            label: {
               fontSize: 11,
               margin: [0, 0, 0, 3] //[izquierda, superior, derecha, inferior].
            },

            column: {
               margin: [0, 10, 7, 0] //[izquierda, superior, derecha, inferior].
            },

         },
         defaultStyle: {
            alignment: 'justify'
         }

      }

      pdfMake.createPdf(dd).open();
   }

}
