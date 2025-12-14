const replaceShortcodes = require("../utils/shortcodeReplacer");

const shortcodeService = async (data) => {
    const replacements = {
        phone: "040 / 3691615-0",
        email: "ow@owlaw.com",
        kanzleialter: (new Date().getFullYear() - 1987),
        year: (new Date().getFullYear()),
    };

    const fieldsToProcess = ["content","introduction", "description", "body", "text", "heading", "headerInhalt", "Badge1", "Subheadline", "Headline", "Badge1", "items", "title", "subheader"]; // Specify fields to replace shortcodes in

    if (typeof data === "object" && data !== null) {
        for (const key in data) {
            if (fieldsToProcess.includes(key) && typeof data[key] === "string") {
                data[key] = replaceShortcodes(data[key], replacements);
            } else if (typeof data[key] === "object") {
                shortcodeService(data[key]); // Recursively process nested objects
            }
        }
    }

    return data;
};

module.exports = shortcodeService;
