
import { Pdf } from './pdf.interface';
import { Pdf2 } from './pdf2.interface';


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
									label: 'direccion',
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

}
