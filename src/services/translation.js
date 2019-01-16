const CREDENTIALS = require("../../credentials/deepl.json");
const sourceTextMap = new Map();

export function translate(text, sourceLang, targetLang) {
  if (!sourceTextMap.has(text)) {
    sourceTextMap.set(text, getTranslatedText(text, sourceLang, targetLang));
  }
  return sourceTextMap.get(text);
}

function getTranslatedText(text, sourceLang = "DE", targetLang = "EN") {
  return fetch("https://api.deepl.com/v1/translate", {
    method: "POST",
    body: new URLSearchParams({
      text: text,
      source_lang: sourceLang,
      target_lang: targetLang,
      auth_key: CREDENTIALS.key
    })
  })
    .catch(error => console.log(error))
    .then(result => result.json())
    .then(result => {
      return result.translations[0].text;
    });
}
