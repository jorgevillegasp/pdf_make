import { style } from '@angular/animations';
import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { elementAt, from } from 'rxjs';
import { Datos } from './interfaces/data';
import { Column, Form } from './interfaces/pdf.interface';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pdf_make';


  comoDeberiaMostrarseTest1() {

    var dd: any = {
      content: [

        { text: 'Haciendo uso de varias tablas sin depender de una' },
        Datos.pdfData.data.forms.map(function (form) {
          if(form.columns.length == 1){
            return {
              table: {
                widths: ['*'],
                body: [
                  [
                    {
                      stack: [
                        form.columns[0].label,
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
            };
          }
          else if(form.columns.length == 2){
            return {
              table: {
                widths: ['*','*'],
                body: [
                  [
                    {
                      stack: [
                        form.columns[0].label,
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
                        form.columns[1].label,
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
            };
          }else if(form.columns.length == 3){
            return {
              table: {
                widths: ['*','*','*'],
                body: [
                  [
                    {
                      stack: [
                        form.columns[0].label,
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
                        form.columns[1].label,
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
                        form.columns[2].label,
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
            };
          }
          return;
        }),
        


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
    console.log(dd);

    pdfMake.createPdf(dd).open();
  }

  


}


