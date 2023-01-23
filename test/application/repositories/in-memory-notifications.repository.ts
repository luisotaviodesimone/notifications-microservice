import { Notification } from '@application/entities/notification.entity';
import { NotificationsRepository } from '@application/repositories/notifications.repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  public async findById(notificationId: string): Promise<Notification | null> {
    const notification =
      this.notifications.find(
        (notification) => notification.id === notificationId,
      ) || null;

    return notification;
  }

  public async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }

  public async create(notification: Notification) {
    this.notifications.push(notification);
  }

  public async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }

  public async findManyByRecipientId(
    recipientId: string,
  ): Promise<Notification[]> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );
  }
}
