"use strict";

const linkReplacerService = require("../plugins/link-replacer/server/services/linkReplacer");

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    if (ctx.response.body && ctx.response.body.data) {
      const processContent = async (data) => {
        if (!data.blocks) return;

        // Check if there is a "blocks" field containing rich-text content
        if (data.blocks && Array.isArray(data.blocks)) {
          for (let block of data.blocks) {
            if (block.__component === "shared.rich-text" && block.body) {
              block.body = await linkReplacerService.replaceWordsWithLinks(block.body);
            }
            if (block.__component === "shared.contentblock-html" && block.content) {
              block.content = await linkReplacerService.replaceWordsWithLinks(block.content);
            }
          }
        }
      };

      if (Array.isArray(ctx.response.body.data)) {
        await Promise.all(ctx.response.body.data.map(processContent));
      } else {
        await processContent(ctx.response.body.data);
      }
    }
  };
};
