import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Pdf } from './interfaces/pdf.interface';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'pdf_make';

	formatoPdfDePrueba: Pdf = {
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

	ejemploConInputs: Pdf = {
		codigo: 'BPLFE-000',
		nombreFactura: 'formulario_nombre de la agencia reguladora',
		anexo: 'anexo 5',
		footer: 'Este informe fue generado el 06/02/2023',
		fechaCreacion: 'Lunes 13 de Febrero del 2022',
		fondoAgua: 'INPUTS',
		data: {
			section: [
				{
					title: 'Ejemplo de como se verian los inputs',
					fila: [
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
						{
							columns: [
								{
									typeField: 'textArea',
									label: 'Label del textAarea',
									value: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus corporis officia totam, reprehenderit perferendis consectetur sit quos ab iste magni iure inventore ipsam cum soluta illo maxime quasi porro eveniet?'
								},
							],
						},
					],
				},
			],
		}
	}

	ejemploConTablas: Pdf = {
		codigo: 'BPLFE-000',
		nombreFactura: 'formulario_nombre de la agencia reguladora',
		anexo: 'anexo 5',
		footer: 'Este informe fue generado el 06/02/2023',
		fechaCreacion: 'Lunes 13 de Febrero del 2022',
		fondoAgua: 'TABLAS',
		data: {
			section: [
				{
					title: 'Ejemplo de como se verian con TABLAS',
					fila: [
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
					],
				}
			],
		}
	}




}


