
import { Pdf } from './pdf.interface';
import { Pdf2 } from './pdf2.interface';
import { Pdf3 } from './pdf3.interface';


export class Datos {

  static pdfData: Pdf = {
    title: 'Formulario de creacion',
    footer: 'Este informe fue generado el 06/02/2023',
    data: {
      forms: [
        {
          subtitulo: 'Seccion 1',
          columns: [
            {
              typeField: 'input',
              label: 'Description',
              input: {
                height: 300,
                width: 100
              }
            },
          ],
        },
        {
          columns: [
            {
              label: 'Nombre',
              input: {
                height: 300,
                width: 100
              }
            },
            {
              label: 'Apellido',
              input: {
                height: 200,
                width: 200
              }
            }
          ],
        },
        {
          columns: [
            {
              label: 'N de solicitud',
              input: {
                height: 300,
                width: 100
              }
            },
            {
              label: 'Tipo de solicitud',
              input: {
                height: 200,
                width: 200
              }
            },
            {
              label: 'Estado',
              input: {
                height: 100,
                width: 300
              }
            }
          ],
        },
        {
          columns: [
            {
              label: 'Direccion',
              input: {
                height: 300,
                width: 100
              }
            },
            {
              label: 'Gastos',
              input: {
                height: 200,
                width: 200
              }
            },
            {
              label: 'Beneficios',
              input: {
                height: 100,
                width: 300
              }
            }
          ],
        },
        {
          columns: [
            {
              label: 'Direccion',
              input: {
                height: 300,
                width: 100
              }
            },
            {
              label: 'Gastos',
              input: {
                height: 200,
                width: 200
              }
            },
            {
              label: 'Beneficios',
              input: {
                height: 100,
                width: 300
              }
            }
          ],
        },
        {
          columns: [
            {
              label: 'Nombre',
              input: {
                height: 300,
                width: 100
              }
            },
            {
              label: 'Apellido',
              input: {
                height: 200,
                width: 200
              }
            }
          ],
        },


      ],
    }
  };


  static pdfData2: Pdf2 = {
    title: 'Formulario de Información del Cliente',
    footer: 'Este informe fue generado el 06/02/2023',
    data: {
      section: [
        {
          title: 'Descripcion del formulario',
          fila: [
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'Este formulario es una herramienta diseñada para recopilar información importante de nuestros usuarios. Incluye campos para ingresar datos personales como nombre, dirección y número de teléfono, así como también preguntas específicas relacionadas con el propósito del formulario. La información recopilada será utilizada para proporcionar un mejor servicio y atención a nuestros usuarios. Rellenar este formulario es sencillo y rápido, y nos ayudará a mantener actualizados nuestros registros. Gracias por tomarse el tiempo de completarlo..',
                },
              ],
            },
          ]
        },
        {
          title: 'Datos Personales',
          fila: [
            {
              columns: [
                {
                  typeField: 'input',
                  label: 'Nombre',
                },
                {
                  label: 'Apellido',
                  input: {
                    height: 200,
                    width: 200
                  }
                }
              ],
            },
            {
              columns: [
                {
                  typeField: 'input',
                  label: 'Numero cedula',
                },
                {
                  typeField: 'input',
                  label: 'Telefono',
                },
              ],

            },

            {
              columns: [
                {
                  typeField: 'input',
                  label: 'N de solicitud',
                },
                {
                  typeField: 'input',
                  label: 'Tipo de solicitud',
                },
                {
                  typeField: 'input',
                  label: 'Estado',
                }
              ],
            },
            {
              columns: [
                {
                  typeField: 'input',
                  label: 'Direccion',
                },
              ],
            },

            {
              columns: [
                {
                  typeField: 'textArea',
                  label: 'Description',
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'check',
                  label: 'Masculino',
                },
                {
                  typeField: 'check',
                  label: 'Femenino',
                },
                {
                  typeField: 'check',
                  label: 'Otro',
                }
              ],
            },
          ]
        },
        {
          title: 'Datos del trabajo',
          fila: [
            {
              columns: [
                {
                  typeField: 'input',
                  label: 'Nombre de la empresa',
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'input',
                  label: 'Direccion',
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'input',
                  label: 'N de solicitud',
                },
                {
                  typeField: 'input',
                  label: 'Tipo de solicitud',
                },
                {
                  typeField: 'input',
                  label: 'Estado',
                }
              ],
            }
          ]
        },
        {
          title: 'Seccion de CKECKS',
          fila: [

            {
              columns: [
                {
                  typeField: 'check',
                  label: 'Masculino',
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'check',
                  label: 'Femenino',
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'check',
                  label: 'Otros',
                },
              ],
            },
          ]
        },
      ]
    }
  }

  static pdfData3: Pdf3 = {
    codigo: 'BPLFE-000',
    nombreFactura: 'formulario_nombre de la agencia reguladora',
    anexo: 'anexo 5',
    footer: 'Este informe fue generado el 06/02/2023',
    fechaCreacion: 'Jueves 09 de Febrero del 2022',
    fondoAgua: 'BORRADOR',
    data: {
      section: [
        {
          title: 'DATOS GENERALES DEL LABORATORIO FARMACEUTICO EXTRANJERO',
          fila: [
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'NOMBRE DEL FABRICANTE',
                  value: 'Formulario_nombre_del_laboratorio'
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'TIPO DE ACTIVIDAD DEL FABRICANTE',
                  value: 'Formulario_nombre_del_laboratorio'
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'PAIS',
                  value: 'Formulario_pais del laboratotio'
                },
              ],

            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'CIUDAD',
                  value: 'Formulario_ciudad del laboratotio'
                },
              ],

            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'DIRECCION',
                  value: 'Formulario_direccion del laboratotio'
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'PLANTA',
                  value: 'Formulario_planta del laboratotio'
                },
              ],
            },
          ]
        },
        {
          title: 'DATOS GENERALES DEL SOLICITANTE',
          fila: [
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'NOMBRE DEL ESTABLECIMIENTO FARMACEUTICO',
                  value: 'Formulario_razon social'
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'RESPONSABLE LEGAL',
                  value: 'Formulario_nombre '
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'NUMERO DEL ESTABLECIMIENTO',
                  value: 'Formulario_establecimiento '
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'PROVINCIA',
                  value: 'Formulario_establecimiento '
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'CANTÓN',
                  value: 'Formulario_canton '
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'PARROQUIA',
                  value: 'Formulario_parroquia '
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'DIRECCIÓN',
                  value: 'Formulario_direccion'
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'ÁREAS CERTIFICADAS',
                  value: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus corporis officia totam, reprehenderit perferendis consectetur sit quos ab iste magni iure inventore ipsam cum soluta illo maxime quasi porro eveniet?'
                },
              ],
            },
            
            {
              table: {
                head: [
                  {
                    label: 'CENTRO DE PRODUCCION',
                  },
                  {
                    label: 'FORMA FARMACEUTICA',
                  },
                  {
                    label: 'CATEGORIA',
                  },
                  {
                    label: 'ACTIVIDA DE PRODUCTO',
                  },
                  {
                    label: 'ACTIVIDA DE PRODUCTO',
                  },
                ],
                body:
                  [
                    {
                      fila: [
                        {
                          label: 'formulario_centro de produccion',
                        },
                        {
                          label: 'formulario_forma farmaceutica',
                        },
                        {
                          label: 'formulario_categoria',
                        },
                        {
                          label: 'actividad de produccion',
                        },
                        {
                          label: 'actividad de produccion',
                        },
                      ]
                    }
                  ],                  
              },
            },
            //ESTA ES UNA TABLA DE PRUEBA PARA
            //LAS TABLAS QUE VIENEN CON DATOS  DIFERENTES
            // {
            //   table: {
            //     head1:[
            //       { 
            //         name: 'CENTRO DE PRODUCCION', 
            //         age: 'FORMA FARMACEUTICA', 
            //         country: 'CATEGORIA',
            //         notes: 'ACTIVIDA DE PRODUCTO',
            //       }
            //     ],
            //     body1: [
            //       { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
            //       { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
            //       { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
            //       { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
            //       { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
            //       { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
            //       { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
            //     ]
            //   },
            // },


            {
              table: {
                head: [
                  {
                    label: 'CENTRO DE PRODUCCION',
                  },
                  {
                    label: 'FORMA FARMACEUTICA',
                  },
                  {
                    label: 'CATEGORIA',
                  },
                ],
                body:[
                  {
                    fila: [
                      {
                        label: 'formulario_centro de produccion',
                      },
                      {
                        label: 'formulario_forma farmaceutica',
                      },
                      {
                        label: 'formulario_categoria',
                      },
                    ],
                  }
                ]
                  
              },
            },


            {
              table: {
                head: [
                  {
                    label: 'CENTRO DE PRODUCCION',
                  },
                  {
                    label: 'FORMA FARMACEUTICA',
                  },
                ],
                body:[
                  {
                    fila: [
                      {
                        label: 'fila 1 formulario_centro de produccion',
                      },
                      {
                        label: 'fila 1 formulario_forma farmaceutica',
                      },
                    ]
                  },
                  {
                    fila: [
                      {
                        label: 'fila 2 formulario_centro de produccion',
                      },
                      {
                        label: 'fila 2 formulario_forma farmaceutica',
                      },
                    ]
                  },
                ],
                  
              },
            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'FECHA DE EMICION',
                  value: 'Fecha cuando el coordinador general tecnico genera el certificado'
                },
              ],
            },
            {
              columns: [
                {
                  typeField: 'text',
                  label: 'FECHA DE VIGENCIA',
                  value: 'Formulario_fecha de vigencia del certificadio extranjero'
                },
              ],
            },
          ]
        },

      ],

    }
  }

}
