'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const trimmed = sourceString.trim();
  const splited = trimmed.split(';');

  const filtered = splited.filter((part) => {
    const str = part.trim();
    return str.length > 0 && str.includes(':');
  });

  const result = {};

  filtered.forEach((part) => {
    const str = part.trim();
    const keep = str.indexOf(':');

    if (keep === -1) return;

    const key = str.slice(0, keep).trim();
    const value = str.slice(keep + 1).trim();

    if (key && value.length > 0) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
