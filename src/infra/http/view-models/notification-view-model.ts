import { Notification } from '@application/entities/notification.entity';

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content,
      category: notification.category,
      recipientId: notification.recipientId,
      createdAt: notification.createdAt,
    };
  }
}
