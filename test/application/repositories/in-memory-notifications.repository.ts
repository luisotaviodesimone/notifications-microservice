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
    throw new Error('Method not implemented.');
  }

  public async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
