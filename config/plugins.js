module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT"),
        //secure: true,
        //requireTLS: true,
        secureConnection: false, // TLS requires secureConnection to be false
        auth: {
          user: env("SMTP_USER"),
          pass: env("SMTP_PASS"),
        },
        /* tls: {
            ciphers:'SSLv3'
        }, */
      },
      settings: {
        defaultFrom: env("SMTP_DEFAULT_FROM"),
        defaultReplyTo: env("SMTP_DEFAULT_REPLYTO"),
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  documentation: {
    enabled: true,
    config: {
      openapi: "3.0.0",
      info: {
        version: "2.2.4",
        title: "DOCUMENTATION",
        description: "",
        termsOfService: "https://treckstar.net/terms",
        contact: {
          name: "Brandon Trecki",
          email: "treckstar@twitter.com",
          url: "https://treckstar.net",
        },
        license: {
          name: "Apache 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0.html",
        },
      },
      "x-strapi-config": {
        // Leave empty to ignore plugins during generation
        plugins: ["upload", "users-permissions"],
        path: "/documentation",
      },
      servers: [
        { url: env("BASE_URL") + `/api`, description: "Production server" },
      ],
      externalDocs: {
        description: "Find out more",
        url: "https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html",
      },
      security: [{ bearerAuth: [] }],
    },
  },
});
