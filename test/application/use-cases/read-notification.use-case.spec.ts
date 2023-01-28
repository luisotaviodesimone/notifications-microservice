import { NotificationsRepository } from '@application/repositories/notifications.repository';
import { NotificationNotFound } from '@application/use-cases/errors/notification-not-found.error';
import { ReadNotification } from '@application/use-cases/read-notification.use-case';
import { Test, TestingModule } from '@nestjs/testing';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../repositories/in-memory-notifications.repository';

describe('ReadNotification', () => {
  let useCase: ReadNotification;
  let repository: InMemoryNotificationsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReadNotification,
        {
          provide: NotificationsRepository,
          useClass: InMemoryNotificationsRepository,
        },
      ],
    }).compile();

    useCase = module.get<ReadNotification>(ReadNotification);
    repository = module.get<InMemoryNotificationsRepository>(
      NotificationsRepository,
    );
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should read a notification', async () => {
    const notification = makeNotification();

    await repository.create(notification);

    await useCase.execute({
      notificationId: notification.id,
    });

    expect(repository.notifications[0].readAt).toEqual(expect.any(Date));
  });

  it('should throw an error if notification does not exist', async () => {
    expect(() =>
      useCase.execute({
        notificationId: 'fake-notification-id',
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
