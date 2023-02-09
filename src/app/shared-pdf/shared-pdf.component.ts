import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Datos } from '../interfaces/data';
import { Input, Data } from '../interfaces/pdf.interface';

@Component({
  selector: 'app-shared-pdf',
  templateUrl: './shared-pdf.component.html',
  styleUrls: ['./shared-pdf.component.scss']
})
export class SharedPdfComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  
  generatePDF() {

    var dd: any = {
      pageSize: 'A4',
      header: {
        text: Datos.pdfData.title,
        alignment: 'center',
        style: 'header'
      },
      footer: function(currentPage = 0, pageCount = 0) {
        return {
           text: 'Pagina '+ currentPage.toString() + ' de ' + pageCount,
           style: 'footer',
        };
     },
      content: [

        Datos.pdfData.data.forms.map(function (form) {
          if (form.columns.length == 1) {
            return {
              table: {
                widths: ['*'],
                body: [
                  [
                    {
                      stack: [
                        {
                          text: form.columns[0].label,
                          style: 'label',
                        },
                        {
                          canvas: [
                            {
                              type: 'rect',
                              x: 0, y: 0, w: 512, h: 60,
                              rx: 10, ry: 10,
                              lineWidth: 0.5,
                              lineColor: 'black',
                              fillColor: 'yellow',
                            }
                          ],
                        }
                      ]
                    },
                  ],
                ]
              },
              layout: 'noBorders',
              style: 'form',
            };
          }
          else if (form.columns.length == 2) {
            return {
              table: {
                widths: ['*', '*'],
                body: [
                  [
                    {
                      stack: [
                        {
                          text: form.columns[0].label,
                          style: 'label',
                        },
                        {
                          canvas: [
                            {
                              type: 'rect',
                              x: 0, y: 0, w: 250, h: 20,
                              rx: 10, ry: 10,
                              lineWidth: 0.5,
                              lineColor: 'black',
                              fillColor: 'yellow',
                            }
                          ],
                        }
                      ]
                    },
                    {
                      stack: [
                        {
                          text: form.columns[1].label,
                          style: 'label',
                        },
                        {
                          canvas: [
                            {
                              type: 'rect',
                              x: 0, y: 0, w: 250, h: 20,
                              rx: 10, ry: 10,
                              lineWidth: 0.5,
                              lineColor: 'black',
                              fillColor: 'yellow',
                            }
                          ],
                        }
                      ]
                    },
                  ],
                ]
              },
              layout: 'noBorders',
              style: 'form',
            };
          } else if (form.columns.length == 3) {
            return {
              table: {
                widths: ['*', '*', '*'],
                body: [
                  [
                    {
                      stack: [
                        {
                          text: form.columns[0].label,
                          style: 'label',
                        },
                        {
                          canvas: [
                            {
                              type: 'rect',
                              x: 0, y: 0, w: 163, h: 20,
                              rx: 10, ry: 10,
                              lineWidth: 0.5,
                              lineColor: 'black',
                              fillColor: 'yellow',
                            }
                          ],
                        }
                      ]
                    },
                    {
                      stack: [
                        {
                          text: form.columns[1].label,
                          style: 'label',
                        },
                        {
                          canvas: [
                            {
                              type: 'rect',
                              x: 0, y: 0, w: 163, h: 20,
                              rx: 10, ry: 10,
                              lineWidth: 0.5,
                              lineColor: 'black',
                              fillColor: 'yellow',
                            }
                          ],
                        }
                      ]
                    },
                    {
                      stack: [
                        {
                          text: form.columns[2].label,
                          style: 'label',
                        },
                        {
                          canvas: [
                            {
                              type: 'rect',
                              x: 0, y: 0, w: 163, h: 20,
                              rx: 10, ry: 10,
                              lineWidth: 0.5,
                              lineColor: 'black',
                              fillColor: 'yellow',
                            }
                          ],
                        }
                      ]
                    },
                  ],
                ]
              },
              layout: 'noBorders',
              style: 'form',
            };
          }
          return;
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
          margin: [0, 0, 40, 0] //[izquierda, superior, derecha, inferior].
        },

        label: {
          fontSize: 11,
          margin: [0, 0, 0, 3] //[izquierda, superior, derecha, inferior].
        },

        form: {
          margin: [0, 7, 0, 0] //[izquierda, superior, derecha, inferior].
        },

        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      },
      defaultStyle: {
        // alignment: 'justify'
      }

    }
    console.log(dd);

    pdfMake.createPdf(dd).open();
  }

}
