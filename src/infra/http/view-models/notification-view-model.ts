import { Notification } from '@application/entities/notification.entity';

export interface NotificationViewModelResult {
  id: string;
  content: string;
  category: string;
  recipientId: string;
}

export class NotificationViewModel {
  static toHTTP(notification: Notification): NotificationViewModelResult {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}
