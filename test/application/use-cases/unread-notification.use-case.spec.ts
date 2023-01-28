import { NotificationsRepository } from '@application/repositories/notifications.repository';
import { NotificationNotFound } from '@application/use-cases/errors/notification-not-found.error';
import { UnreadNotification } from '@application/use-cases/unread-notification.use-case';
import { Test, TestingModule } from '@nestjs/testing';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../repositories/in-memory-notifications.repository';

describe('UnreadNotification', () => {
  let useCase: UnreadNotification;
  let repository: InMemoryNotificationsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UnreadNotification,
        {
          provide: NotificationsRepository,
          useClass: InMemoryNotificationsRepository,
        },
      ],
    }).compile();

    useCase = module.get<UnreadNotification>(UnreadNotification);
    repository = module.get<InMemoryNotificationsRepository>(
      NotificationsRepository,
    );
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should unread a notification', async () => {
    const notification = makeNotification({ readAt: new Date() });

    await repository.create(notification);

    await useCase.execute({
      notificationId: notification.id,
    });

    expect(repository.notifications[0].readAt).toEqual(null);
  });

  it('should throw an error if notification does not exist', async () => {
    expect(() =>
      useCase.execute({
        notificationId: 'fake-notification-id',
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
