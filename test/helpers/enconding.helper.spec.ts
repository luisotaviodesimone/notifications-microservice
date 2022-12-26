import { encodeUTF8, decodeUTF8 } from '../../src/helpers/encoding.helper';

describe('EncodingHelper', () => {
  describe('encodeUTF8', () => {
    it('should encode a string to UTF8', () => {
      const encoded = encodeUTF8('açaí');
      expect(encoded).toBe('aÃ§aÃ­');
    });
  });

  describe('decodeUTF8', () => {
    it('should decode a UTF8 to string', () => {
      const decoded = decodeUTF8('aÃ§aÃ­');

      expect(decoded).toBe('açaí');
    });
  });
});
