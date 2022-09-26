module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
    },
  },
  email: {
    config: {
      provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: process.env.SENDGRID_API_KEY,
      },
      settings: {
        defaultFrom: "congressorrte@gmail.com",
			  defaultReplyTo: "congressorrte@gmail.com",
      },
    },
  },
  upload: {
		config: {
		  provider: 'aws-s3',
		  providerOptions: {
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.AWS_ACCESS_SECRET,
			region: process.env.AWS_REGION,
			params: {
			  Bucket: process.env.AWS_BUCKET,
			},
		  },
		},
	  },
});
