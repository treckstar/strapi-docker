const directives = [
  "'self'",
  'data:',
  'blob:',
  'loremflickr.com', // lorem picsum
  'images.unsplash.com', // unsplash
  'res.cloudinary.com', // cloudinary images
  'lh3.googleusercontent.com', // google avatars
  'platform-lookaside.fbsbx.com', // facebook avatars
  'dl.airtable.com', // strapi marketplace
  'market-assets.strapi.io' // strapi marketplace
];

module.exports = [
  "strapi::errors",
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': directives,
          'media-src': directives,
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // modify form body
      jsonLimit: "256mb", // modify JSON body
      textLimit: "256mb", // modify text body
      formidable: {
        maxFileSize: 200 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
