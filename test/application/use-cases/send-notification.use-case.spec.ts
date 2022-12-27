import { TestingModule, Test } from '@nestjs/testing';
import { SendNotificationUseCase } from '../../../src/application/use-cases/send-notification.use-case';

describe('SendNotificationUseCase', () => {
  let useCase: SendNotificationUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendNotificationUseCase],
    }).compile();

    useCase = module.get<SendNotificationUseCase>(SendNotificationUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should send a notification', async () => {
    const request = {
      recipientId: '123',
      content: 'Hello World',
      category: 'test',
    };

    const { notification } = await useCase.execute(request);

    expect(notification.recipientId).toEqual(request.recipientId);
    expect(notification.content.value).toEqual(request.content);
    expect(notification.category).toEqual(request.category);
  });
});
