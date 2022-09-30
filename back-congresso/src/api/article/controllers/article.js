'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::article.article', ({strapi}) => ({
	async create(ctx){
		const {data} =	await super.create(ctx);
		await strapi.plugins['email'].services.email.send({
			to: 'bguilherme51@gmail.com',
			from: 'congressorrte@gmail.com',
			replyTo: 'congressorrte@gmail.com',
			subject: 'O registro do seu artigo foi realizado com sucesso!!',
			text: 'Parabens! o seu artigo foi enviado à nossa comissão com as seguintes informações: <br>',
			html: 'Hello world!',
		})
		return {data};
	}
}));
