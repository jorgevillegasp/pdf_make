import { style } from '@angular/animations';
import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { elementAt, from } from 'rxjs';
import { Datos } from './interfaces/data';
import { column } from './interfaces/pdf.interface';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pdf_make';


  crearColumna() {

    var columnas = {
      columns: [
        {
          text: 'Label:',
        },
        {
          canvas: [
            {
              type: 'rect',
              x: 0,
              y: 0,
              w: 180,
              h: 15,
              lineWidth: 0.5,
              lineColor: 'black',
              fillColor: 'yellow'
            }
          ],
          style: 'formInput',
          border: [true, true, true, true],
        },
      ],
      //width: '*',
    };

    var columnaGlobal = {
      columns: [
        //1 COLUMNA
        columnas,
        //2 COLUMNA
        columnas
      ]
    };

    var docForm: any = {
      pageSize: 'A4',

      content: [
        //1
        {
          columns: [
            {
              columns: [
                {
                  columns: [
                    {
                      text: 'Label:',
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
                },
                {
                  columns: [
                    {
                      text: 'Label:',
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
              ]
            }
          ]
        },
        //2
        {
          columns: [
            {
              columns: [
                columnas,
              ]
            },

          ]
        },
      ]
    };

    console.log(columnas);

    const pdf = pdfMake.createPdf(docForm);
    pdf.open();

  }


  test1() {
    var data = [
      { label: 'Label 1', input: 'Input 2' },
      { label: 'Label 2', input: 'Input 2' },
      { label: 'Label 3', input: 'Input 2' },
      { label: 'Label 4', input: 'Input 2' },
      { label: 'Label 5', input: 'Input 2' },
      { label: 'Label 6', input: 'Input 2' },
      { label: 'Label 7', input: 'Input 2' },
      { label: 'Label 8', input: 'Input 2' },
    ];

    var table = {
      headerRows: 0,
      widths: ['*', '*'],
      body: data.map(function (data) {
        return [
          {
            stack: [
              {
                text: data.label
              },
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 250,
                    h: 20,
                    lineWidth: 0.5,
                    lineColor: 'black',
                    fillColor: 'yellow',
                    rx: 10,
                    ry: 10,
                  }
                ],
              },
            ]
          },
          {
            stack: [
              {
                text: 'label'
              },
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 250,
                    h: 20,
                    lineWidth: 0.5,
                    lineColor: 'black',
                    fillColor: 'yellow'
                  }
                ],
              },
            ]
          },
        ];
      })
    };

    var pdf = pdfMake.createPdf({
      content: [
        {
          text: 'Titulo'
        },
        {
          table: table,
          layout: 'lightHorizontalLines'
        }
      ],
      styles: {
        label: {
          fontSize: 12,
          bold: true
        },
        input: {
          fontSize: 12
        }
      }
    });
    pdf.open();
  }


  ejemploDeTabla() {

    var starck: any = {
      stack: [
        {
          text: 'label'
        },
        {
          stack: [
            {
              text: 'label'
            },
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 250,
                  h: 20,
                  lineWidth: 0.5,
                  lineColor: 'black',
                  fillColor: 'yellow',
                  rx: 10,
                  ry: 10
                }
              ],
            },
          ]
        },
      ]
    };
    var dd: any = {
      content: [
        {
          style: 'tableExample',
          table: {
            widths: ['*', '*'],
            body: [
              [
                {
                  stack: [
                    {
                      text: 'label'
                    },
                    {
                      canvas: [
                        {
                          type: 'rect',
                          x: 0,
                          y: 0,
                          w: 250,
                          h: 20,
                          lineWidth: 0.5,
                          lineColor: 'black',
                          fillColor: 'yellow'
                        }
                      ],
                    },
                  ]

                },
                {
                  stack: [
                    {
                      text: 'label'
                    },
                    {
                      canvas: [
                        {
                          type: 'rect',
                          x: 0,
                          y: 0,
                          w: 250,
                          h: 20,
                          lineWidth: 0.5,
                          lineColor: 'black',
                          fillColor: 'yellow'
                        }
                      ],
                    },
                  ]

                }
              ],
            ]
          },
          layout: 'noBorders'
        },
        {
          style: 'tableExample',
          table: {
            body: [
              [
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]

                },
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]

                }
              ],
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            body: [
              ['Column 1', 'Column 2', 'Column 3'],
              [
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]
                },
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]
                },
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]
                }
              ],
              [
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]
                },
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]
                },
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]
                }
              ],
              [
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]
                },
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]
                },
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]
                }
              ], [
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]
                },
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]
                },
                {
                  stack: [
                    {
                      text: 'label'
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
                    },
                  ]
                }
              ]
            ]
          },
          layout: 'noBorders'
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
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

    const pdf = pdfMake.createPdf(dd);
    pdf.open();
  }


  ejemploConColumnas() {
    var data = [
      { label: 'Label 1', input: 'Input 2' },
      { label: 'Label 2', input: 'Input 2' },
      { label: 'Label 3', input: 'Input 2' },
      { label: 'Label 4', input: 'Input 2' },
      { label: 'Label 5', input: 'Input 2' },
      { label: 'Label 6', input: 'Input 2' },
      { label: 'Label 7', input: 'Input 2' },
      { label: 'Label 8', input: 'Input 2' },
    ];


    var pdf = pdfMake.createPdf({
      content: [
        {
          text: 'Titulo'
        },
        {
          table:
          {
            body: data.map(function (data) {
              return [
                {
                  columns: [
                    {
                      width: 'auto',
                      text: data.label
                    },
                    {
                      width: 250,
                      canvas: [
                        {
                          type: 'rect',
                          x: 0,
                          y: 0,
                          w: '100%',
                          h: 20,
                          lineWidth: 0.5,
                          lineColor: 'black',
                          fillColor: 'yellow',
                          rx: 10,
                          ry: 10,
                        }
                      ],
                    },
                  ]
                },
                {
                  columns: [
                    {
                      width: 'auto',
                      text: 'label'
                    },
                    {
                      width: 250,
                      canvas: [
                        {
                          type: 'rect',
                          x: 0,
                          y: 0,
                          w: '100%',
                          h: 20,
                          lineWidth: 0.5,
                          lineColor: 'black',
                          fillColor: 'yellow'
                        }
                      ],
                    },
                  ]
                },
              ];
            })
          },
          layout: 'lightHorizontalLines'
        }
      ],
      styles: {
        label: {
          fontSize: 12,
          bold: true
        },
        input: {
          fontSize: 12
        }
      }
    });
    pdf.open();
  }


  prueba() {
    const docDefinition = {
      content: [
        {
          text: Datos.pdfData.title,
          style: 'header'
        },
        {
          style: 'tableExample',
          table: {
            headerRows: 1,
            body: Datos.pdfData.data.forms.map(form => {
              return form.columns.map(column => [
                column.label,
                column.input.height,
                column.input.width
              ]);
            })
          }
        },
        { text: Datos.pdfData.footer, style: 'footer' }
      ],
    };

    pdfMake.createPdf(docDefinition).open();
  }

  tabla() {

    var table = {
      headerRows: 0,
      widths: ['*', '*', '*'],
      body: Datos.pdfData.data.forms.map(function (data) {
        console.log(data.columns.length);
        if (data.columns.length == 1) {
          return [
            {
              stack: [
                { text: data.columns[0].label },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0, y: 0, w: 150, h: 20,
                      rx: 10, ry: 10,
                      lineWidth: 0.5,
                      lineColor: 'black',
                      fillColor: 'yellow',
                    }
                  ],
                },
              ]
            },
            {
              stack: [
                { text: data.columns[0].label },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0, y: 0, w: 150, h: 20,
                      rx: 10, ry: 10,
                      lineWidth: 0.5,
                      lineColor: 'black',
                      fillColor: 'yellow',
                    }
                  ],
                },
              ]
            },
            {
              stack: [
                { text: data.columns[0].label },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0, y: 0, w: 150, h: 20,
                      rx: 10, ry: 10,
                      lineWidth: 0.5,
                      lineColor: 'black',
                      fillColor: 'yellow',
                    }
                  ],
                },
              ]
            },
          ];
        }
        else if (data.columns.length == 2) {
          return [
            {
              stack: [
                { text: data.columns[0].label },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0, y: 0, w: 150, h: 20,
                      rx: 10, ry: 10,
                      lineWidth: 0.5,
                      lineColor: 'black',
                      fillColor: 'yellow',
                    }
                  ],
                },
              ]
            },
            {
              stack: [
                { text: data.columns[1].label },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0, y: 0, w: 150, h: 20,
                      rx: 10, ry: 10,
                      lineWidth: 0.5,
                      lineColor: 'black',
                      fillColor: 'yellow',
                    }
                  ],
                },
              ]
            },
            {
              stack: [
                { text: data.columns[0].label },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0, y: 0, w: 150, h: 20,
                      rx: 10, ry: 10,
                      lineWidth: 0.5,
                      lineColor: 'black',
                      fillColor: 'yellow',
                    }
                  ],
                },
              ]
            },
          ];
        } else {
          return [
            {
              stack: [
                { text: data.columns[0].label },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0, y: 0, w: 150, h: 20,
                      rx: 10, ry: 10,
                      lineWidth: 0.5,
                      lineColor: 'black',
                      fillColor: 'yellow',
                    }
                  ],
                },
              ]
            },
            {
              stack: [
                { text: data.columns[1].label },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0, y: 0, w: 150, h: 20,
                      rx: 10, ry: 10,
                      lineWidth: 0.5,
                      lineColor: 'black',
                      fillColor: 'yellow',
                    }
                  ],
                },
              ]
            },
            {
              stack: [
                { text: data.columns[2].label },
                {
                  canvas: [
                    {
                      type: 'rect',
                      x: 0, y: 0, w: 150, h: 20,
                      rx: 10, ry: 10,
                      lineWidth: 0.5,
                      lineColor: 'black',
                      fillColor: 'yellow',
                    }
                  ],
                },
              ]
            }
          ];
        }
      })
    };

    var pdf = pdfMake.createPdf({
      content: [
        {
          table: table,
          layout: 'lightHorizontalLines'
        },
        {
          alignment: 'justify',
          columns: Datos.pdfData.data.forms.map(function (data) {
            return [
              [
                {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus ',

                },
                {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea',
                  style: 'margenes',
                }
              ],
            ];
          }),

        }
      ],
      styles: {
        label: {
          fontSize: 12,
          bold: true
        },
        input: {
          fontSize: 12
        },
        margenes: {
          margin: [10, 0, 0, 0]
        },
      }
    });
    pdf.open();


  }

  comoDeberiaMostrarse() {

    var dd: any = {
      content: [

        {
          style: 'tableExample',
          table: {
            body: [
              [

                {
                  table: {
                    body: [
                      [
                        {
                          table: {
                            widths: ['*'],
                            body: [
                              [
                                {
                                  stack: [
                                    'label',
                                    {
                                      canvas: [
                                        {
                                          type: 'rect',
                                          x: 0, y: 0, w: 512, h: 20,
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
                          layout: 'noBorders'
                        },

                      ],
                      [
                        {
                          table: {
                            widths: ['*', '*'],
                            body: [
                              [
                                {
                                  stack: [
                                    'label',
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
                                    'label',
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
                          layout: 'noBorders'
                        },
                      ],
                      [
                        {
                          table: {
                            widths: ['*', '*', '*'],
                            body: [
                              [
                                {
                                  stack: [
                                    'label',
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
                                    'label',
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
                                    'label',
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
                          layout: 'noBorders'
                        },
                      ],
                    ]
                  },
                  layout: 'noBorders',
                },

              ]
            ]
          },
          layout: 'noBorders',
        },



      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
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

  comoDeberiaMostrarseTest() {

    var dd: any = {
      content: [

        {
          style: 'tableExample',
          table: {
            body: [
              [
                {
                  table: {
                    body: [
                      Datos.pdfData.data.forms.map( data => {text: data.columns.length}),
                      // Datos.pdfData.data.forms.map(function (data) {
                      //   //console.log(data.columns.length);
                      //   if (data.columns.length == 1) {
                      //     return [
                      //       {
                      //         table: {
                      //           widths: ['*'],
                      //           body: [
                      //             [
                      //               //data.columns(function(column) { }),
                      //               {
                      //                 stack: [
                      //                   'label',
                      //                   {
                      //                     canvas: [
                      //                       {
                      //                         type: 'rect',
                      //                         x: 0, y: 0, w: 512, h: 20,
                      //                         rx: 10, ry: 10,
                      //                         lineWidth: 0.5,
                      //                         lineColor: 'black',
                      //                         fillColor: 'yellow',
                      //                       }
                      //                     ],
                      //                   }
                      //                 ]
                      //               },
                      //             ],
                      //           ]
                      //         },
                      //         layout: 'noBorders'
                      //       },

                      //     ];
                      //   };
                      //   return;
                      // }),
                      [
                        {
                          table: {
                            widths: ['*'],
                            body: [
                              [
                                //data.columns(function(column) { }),
                                {
                                  stack: [
                                    'label',
                                    {
                                      canvas: [
                                        {
                                          type: 'rect',
                                          x: 0, y: 0, w: 512, h: 20,
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
                          layout: 'noBorders'
                        },

                      ],
                      [
                        {
                          table: {
                            widths: ['*', '*'],
                            body: [
                              [
                                {
                                  stack: [
                                    'label',
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
                                    'label',
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
                          layout: 'noBorders'
                        },
                      ],
                      [
                        {
                          table: {
                            widths: ['*', '*', '*'],
                            body: [
                              [
                                {
                                  stack: [
                                    'label',
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
                                    'label',
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
                                    'label',
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
                          layout: 'noBorders'
                        },
                      ],
                    ]
                  },
                  layout: 'noBorders',
                },

              ]
            ]
          },
          layout: 'noBorders',
        },



      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
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


