const replaceShortcodes = (content, replacements) => {
    if (!content || typeof content !== "string") return content;

    return content.replace(/\[(\w+)\]/g, (match, key) => {
        return replacements[key] || match; // Replace if key exists, else keep original
    });
};

module.exports = replaceShortcodes;
