const encodeUTF8 = (decodedString: string) =>
  unescape(encodeURIComponent(decodedString));
const decodeUTF8 = (encodedString: string) =>
  decodeURIComponent(escape(encodedString));

export { encodeUTF8, decodeUTF8 };
