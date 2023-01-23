import { NotificationNotFound } from './notification-not-found.error';

class UseCaseError {
  static notificationNotFound(): NotificationNotFound {
    return new NotificationNotFound();
  }
}

export default UseCaseError;
