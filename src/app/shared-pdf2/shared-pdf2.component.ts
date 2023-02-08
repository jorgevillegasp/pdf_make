import { Component, OnInit } from '@angular/core';
import { Datos } from '../interfaces/data';
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
      content: [

        Datos.pdfData2.data.section.map(function (section) {
          return [
            {
              text: section.title,
              style: 'titleSection'
            },
            {
              text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ducimus assumenda a doloremque impedit enim, maiores ipsam. Nam natus quidem ea, assumenda voluptate facere at possimus ex animi enim a.',
              alignment: 'justify',
            },
            section.fila.map(function (fila) {
              console.log(fila.columns.length);
              if (fila.columns.length == 1) {
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
                              x: 0, y: 0, w: 515, h: 60,
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
          margin: [0, 0, 40, 0] //[izquierda, superior, derecha, inferior].
        },

        titleSection: {
          fontSize: 15,
          margin: [0, 10, 0, 10] //[izquierda, superior, derecha, inferior].
        },
        label: {
          fontSize: 11,
          margin: [0, 0, 0, 3] //[izquierda, superior, derecha, inferior].
        },
        column: {
          margin: [0, 7, 7, 0] //[izquierda, superior, derecha, inferior].
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

    pdfMake.createPdf(dd).open();
  }

}
