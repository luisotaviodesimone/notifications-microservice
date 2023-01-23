import { NotificationsRepository } from '@application/repositories/notifications.repository';
import { NotificationNotFound } from '@application/use-cases/errors/notification-not-found.error';
import { Test, TestingModule } from '@nestjs/testing';
import { makeNotification } from '@test/factories/notification-factory';
import { CancelNotification } from '../../../src/application/use-cases/cancel-notification.use-case';
import { InMemoryNotificationsRepository } from '../repositories/in-memory-notifications.repository';

describe('CancelNotification', () => {
  let useCase: CancelNotification;
  let repository: InMemoryNotificationsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CancelNotification,
        {
          provide: NotificationsRepository,
          useClass: InMemoryNotificationsRepository,
        },
      ],
    }).compile();

    useCase = module.get<CancelNotification>(CancelNotification);
    repository = module.get<InMemoryNotificationsRepository>(
      NotificationsRepository,
    );
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should cancel a notification', async () => {
    const notification = makeNotification();

    await repository.create(notification);

    await useCase.execute({
      notificationId: notification.id,
    });

    expect(repository.notifications[0].canceledAt).toEqual(expect.any(Date));
  });

  it('should throw an error if notification does not exist', async () => {
    expect(() =>
      useCase.execute({
        notificationId: 'fake-notification-id',
      }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
