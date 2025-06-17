// ./src/middlewares/cache-images.js
module.exports = () => {
    return async (ctx, next) => {
        await next();
        if (ctx.response.is('image/*')) {
            // Browser 1 Tag, Cloudflare 1 Jahr
            ctx.set('Cache-Control', 'public, max-age=86400, s-maxage=31536000, immutable');
            // nur Cloudflare:
            ctx.set('Cloudflare-CDN-Cache-Control', 'max-age=31536000');
        }
    };
};
