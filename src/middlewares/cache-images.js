// ./src/middlewares/cache-images.js
module.exports = () => {
    return async (ctx, next) => {
        await next();
        if (ctx.response.is('image/*')) {
            // 1 Tag Cache, immutable
            ctx.set('Cache-Control', 'public, max-age=31536000, immutable');
            ctx.set('CDN-Cache-Control', 'max-age=31536000');
            ctx.set('Vercel-CDN-Cache-Control', 'max-age=31536000');
        }
    };
};
