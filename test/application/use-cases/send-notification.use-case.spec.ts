import { NotificationsRepository } from '@application/repositories/notifications.repository';
import { SendNotification } from '@application/use-cases/send-notification.use-case';
import { TestingModule, Test } from '@nestjs/testing';
import { InMemoryNotificationsRepository } from '../repositories/in-memory-notifications.repository';

describe('SendNotificationUseCase', () => {
  let useCase: SendNotification;
  let notificationsRepository: InMemoryNotificationsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: SendNotification,
          useFactory: (notificationsRepository: NotificationsRepository) =>
            new SendNotification(notificationsRepository),
          inject: [NotificationsRepository],
        },
        {
          provide: NotificationsRepository,
          useClass: InMemoryNotificationsRepository,
        },
      ],
    }).compile();

    useCase = module.get<SendNotification>(SendNotification);
    notificationsRepository = module.get<InMemoryNotificationsRepository>(
      NotificationsRepository,
    );
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should send a notification', async () => {
    const request = {
      content: 'Hello World',
      category: 'test',
      recipientId: '123',
    };

    const { notification } = await useCase.execute(request);

    expect(notification.recipientId).toEqual(request.recipientId);
    expect(notification.content.value).toEqual(request.content);
    expect(notification.category).toEqual(request.category);

    expect(notificationsRepository.notifications).toEqual([notification]);
  });
});
