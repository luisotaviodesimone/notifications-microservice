import { Notification } from '@application/entities/notification.entity';
import { NotificationsRepository } from '@application/repositories/notifications.repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  public async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
