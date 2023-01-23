import { NotificationsRepository } from '@application/repositories/notifications.repository';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications.use-case';
import { Test, TestingModule } from '@nestjs/testing';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../repositories/in-memory-notifications.repository';

describe('CountRecipientNotifications', () => {
  let useCase: CountRecipientNotifications;
  let repository: InMemoryNotificationsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountRecipientNotifications,
        {
          provide: NotificationsRepository,
          useClass: InMemoryNotificationsRepository,
        },
      ],
    }).compile();

    useCase = module.get<CountRecipientNotifications>(
      CountRecipientNotifications,
    );
    repository = module.get<InMemoryNotificationsRepository>(
      NotificationsRepository,
    );
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should return the number of notifications for a recipient', async () => {
    const primaryRecipientNotification = makeNotification({
      recipientId: 'recipient-1',
    });
    const secondaryRecipientNotification = makeNotification({
      recipientId: 'recipient-2',
    });

    await repository.create(primaryRecipientNotification);
    await repository.create(primaryRecipientNotification);
    await repository.create(secondaryRecipientNotification);

    const response = await useCase.execute({ recipientId: 'recipient-1' });

    expect(response.count).toBe(2);
    expect(repository.notifications.length).toBe(3);
  });
});
