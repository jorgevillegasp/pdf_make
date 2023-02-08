
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
							typeField: 'textArea',
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
		title: 'Formulario de creacion',
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
									label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui magnam atque doloribus sed obcaecati sint, quod reiciendis repudiandae eveniet corporis iusto tenetur modi placeat quasi deserunt commodi! Eaque, numquam.',
								},
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
									label: 'Masculino',
								},
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
					title: 'Seccion 1',
					fila: [
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
									typeField: 'input',
									label: 'Nombre',
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
					title: 'Seccion 2',
					fila: [
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
							],
						},
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
						}
					]
				},
				{
					title: 'Seccion 3',
					fila: [
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
									typeField: 'textArea',
									label: 'Description',
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
				}
			]
		}
	}

}
