import { Test, TestingModule } from '@nestjs/testing';
import { CancelNotification } from '../../../src/application/use-cases/cancel-notification.use-case';

describe('CancelNotificationUseCase', () => {
  let useCase: CancelNotification;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CancelNotification],
    }).compile();

    useCase = module.get<CancelNotification>(CancelNotification);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });
});
