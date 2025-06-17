module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      // provider: 'local',   // braucht man nicht anzugeben, ist default
      providerOptions: {
        localServer: {
          // Millisekunden! 1 Jahr = 365 × 24 × 60 × 60 × 1000
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