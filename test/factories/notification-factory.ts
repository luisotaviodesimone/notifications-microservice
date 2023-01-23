import { Content } from '@application/entities/content.entity';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification.entity';
import { randomBytes } from 'crypto';

const randomString = (): string => {
  return randomBytes(8).toString('hex');
};

const makeNotification = (
  overrides: Partial<NotificationProps> = {},
): Notification => {
  const notification = new Notification({
    recipientId: randomString(),
    content: new Content(randomString()),
    category: randomString(),
    ...overrides,
  });

  return notification;
};

export { makeNotification };
