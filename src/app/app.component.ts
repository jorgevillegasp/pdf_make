import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Datos } from './interfaces/datos';
import { Pdf } from './interfaces/pdf.interface';
import { Pdf3 } from './interfaces/pdf3.interface';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'pdf_make';

	pdfData3: Pdf3 = {
		codigo: 'BPLFE-000',
		nombreFactura: 'formulario_nombre de la agencia reguladora',
		anexo: 'anexo 5',
		footer: 'Este informe fue generado el 06/02/2023',
		fechaCreacion: 'Jueves 09 de Febrero del 2022',
		fondoAgua: 'BORRADOR',
		data: {
		  section: [
			{
			  title: 'Test',
			  fila: [
				{
				  columns: [
					{
					  typeField: 'text',
					  label: 'Nombre',
					  value: 'Jorge Washington',
					},
					{
					  typeField: 'text',
					  label: 'Apellido',
					  value: 'Villegas Polanco',
					},
					{
					  typeField: 'input',
					  label: 'Apellido',
					  value: 'Villegas Polanco',
					},
				  ],
				},
				{
				  columns: [
					{
					  typeField: 'check',
					  label: 'Masculino'
					},
					{
					  typeField: 'check',
					  label: 'Femenino'
					},
					{
					  typeField: 'check',
					  label: 'Otros'
					},
				  ]
				},
				{
				  columns: [
					{
					  typeField: 'input',
					  label: 'nombre'
					},
				  ]
				},
				{
				  columns: [
					{
					  typeField: 'input',
					  label: 'nombre'
					},
				  ]
				},
				{
				  columns: [
					{
					  typeField: 'input',
					  label: 'Nombre'
					},
					{
					  typeField: 'input',
					  label: 'Apellido'
					},
				  ]
				},
				{
				  columns: [
					{
					  typeField: 'input',
					  label: 'Nombre'
					},
					{
					  typeField: 'input',
					  label: 'Apellido'
					},
					{
					  typeField: 'input',
					  label: 'Telefono'
					},
				  ]
				},
			  ],
			},
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
	
				//ESTA ES UNA TABLA DE PRUEBA PARA
				//LAS TABLAS QUE VIENEN CON DATOS  DIFERENTES
				{
				  table: {
					head: [
					  { name: "CENTRO DE PRODUCCION", dataKey: "name" },
					  { name: "FORMA FARMACEUTICA", dataKey: "age" },
					  { name: "CATEGORIA", dataKey: "country" },
					  { name: "ACTIVIDA DE PRODUCTO", dataKey: "notes" },
					],
					body: [
					  { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					  { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					  { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					  { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					  { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					  { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					  { name: 'formulario_centro de produccion', age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					]
				  },
				},
				{
				  table: {
					head: [
					  { name: "FORMA FARMACEUTICA", dataKey: "age" },
					  { name: "CATEGORIA", dataKey: "country" },
					  { name: "ACTIVIDA DE PRODUCTO", dataKey: "notes" },
					],
					body: [
					  { age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					  { age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					  { age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					  { age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					  { age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					  { age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					  { age: 'formulario_forma farmaceutica', country: 'formulario_categoria', notes: 'actividad de produccion' },
					]
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


	pdfData: Pdf = {
		title: 'Formulario de creacion',
		footer: 'Este informe fue generado el 06/02/2023',
		data: {
			forms: [
				{
					columns: [
						{
							label: 'Nombre',
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
							label: 'Nombre',
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
				{
					columns: [
						{
							label: 'Nombre',
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
							label: 'Nombre',
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
				{
					columns: [
						{
							label: 'Nombre',
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
							label: 'Nombre',
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
				{
					columns: [
						{
							label: 'Nombre',
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
							label: 'Nombre',
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
				{
					columns: [
						{
							label: 'Nombre',
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
							label: 'Nombre',
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
				{
					columns: [
						{
							label: 'Nombre',
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
							label: 'Nombre',
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
				{
					columns: [
						{
							label: 'Nombre',
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
							label: 'Nombre',
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
				{
					columns: [
						{
							label: 'Nombre',
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
							label: 'Nombre',
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
				{
					columns: [
						{
							label: 'Nombre',
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
							label: 'Nombre',
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


	generatePDF() {

		var dd: any = {
			header: {
				text: Datos.pdfData.title,
				alignment: 'center',
				style: 'header'
			},
			footer: function (currentPage = 0, pageCount = 0) {
				return {
					text: 'Pagina ' + currentPage.toString() + ' de ' + pageCount,
					style: 'footer',
				};
			},
			content: [

				Datos.pdfData.data.forms.map(function (form: any) {
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


