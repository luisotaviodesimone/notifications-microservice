import { Content } from '../../../src/application/entities/content.entity';
import { Notification } from '../../../src/application/entities/notification.entity';

describe('Notification', () => {
  describe('constructor', () => {
    it('should create a valid notification', () => {
      const notification = new Notification({
        recipientId: '123',
        content: new Content('Você recebeu uma solicitação de amizade!'),
        category: 'category',
      });

      expect(notification.recipientId).toEqual('123');
      expect(notification.content.value).toEqual(
        'Você recebeu uma solicitação de amizade!',
      );
    });
  });
});
