
import { Pdf, Data, Form, Column, Input } from './pdf.interface';

export class Datos{

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


}
