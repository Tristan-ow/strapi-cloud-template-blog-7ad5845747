module.exports = ({ env }) => ({
  // ...
  "upload-plugin-cache": {
    enabled: true,
    config: {
      maxAge: 86_400_000,
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