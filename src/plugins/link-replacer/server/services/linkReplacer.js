"use strict";

const replaceWordsWithLinks = async (content) => {
  if (!content) return content; // Return as is if empty

  const replacements = await strapi.documents("api::link-replacement.link-replacement").findMany({
    populate: { article: true }
  });

  replacements.forEach(({ word, article }) => {
    if (!article || !article.slug) return; // Skip if no article or slug

    const articleUrl = `/articles/${article.slug}`; // Adjust the path as needed
    const link = `<a href="${articleUrl}" target="_blank">${word}</a>`;
    const regex = new RegExp(`\\b${word}\\b`, "gi"); // Match whole words only
    content = content.replace(regex, link);
  });

  return content;
};

module.exports = {
  replaceWordsWithLinks,
};