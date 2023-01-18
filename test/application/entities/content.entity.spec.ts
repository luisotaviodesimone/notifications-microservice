import { Content } from '@application/entities/content.entity';

describe('Content', () => {
  describe('constructor', () => {
    it('should create a content object if content length is between 5 and 240 characters', () => {
      const content = 'Você recebeu uma solicitação de amizade!';
      const contentObject = new Content(content);
      expect(contentObject.value).toEqual(content);
    });

    it('should throw an error if content length is less than 5 characters', () => {
      const content = '1234';
      expect(() => new Content(content)).toThrowError(
        'Content length must be between 5 and 240 characters.',
      );
    });

    it('should throw an error if content length is greater than 240 characters', () => {
      const content = 'a'.repeat(241);
      expect(() => new Content(content)).toThrowError(
        'Content length must be between 5 and 240 characters.',
      );
    });
  });
});
