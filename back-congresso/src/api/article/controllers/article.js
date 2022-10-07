'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::article.article', ({strapi}) => ({
	async create(ctx){
		const {data} =	await super.create(ctx);
		console.log(data.attributes.email);
		await strapi.plugins['email'].services.email.send({
			to: `${data.attributes.email}`,
			from: 'congressorrte@gmail.com',
			replyTo: 'congressorrte@gmail.com',
			subject: 'O registro do seu artigo foi realizado com sucesso!!',
			text: `Parabens! ${data.attributes.nome} o seu artigo ${data.attributes.titulodoartigo} foi enviado à nossa comissão com as seguintes informações:
			
			- Titulo: ${data.attributes.titulodoartigo}
			- Numero: ${data.attributes.numero}
			- Data de Submissão: ${data.attributes.createdAt}
			- Modalidade: ${data.attributes.modalidade}
			- Area Temática: ${data.attributes.areadeestudo}
			- Autores: ${data.attributes.autores}

			
	Cordialmente.
	A Comissão Científica.`,

			html: this.text,
		})
		return {data};
	}
}));
