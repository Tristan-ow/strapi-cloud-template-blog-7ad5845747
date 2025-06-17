module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      providerOptions: {
        localServer: {
          // 1 Jahr in Millisekunden
          maxage: 31536000000,
        },
      },
    },
  },
  seo: {
    enabled: true,
  },
  'webp-converter': {
    enabled: true,
    config: {
      // mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']
      mimeTypes: undefined,
      options: {
        // WebP options: https://sharp.pixelplumbing.com/api-output#webp
      },
    },
  },
  // ...
});