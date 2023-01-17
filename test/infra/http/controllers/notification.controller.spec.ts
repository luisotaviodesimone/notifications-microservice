import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsRepository } from '../../../../src/application/repositories/notifications.repository';
import { SendNotification } from '../../../../src/application/use-cases/send-notification.use-case';
import { NotificationController } from '../../../../src/infra/http/controllers/notification.controller';
import { InMemoryNotificationsRepository } from '../../../application/repositories/in-memory-notifications.repository';

describe('NotificationController', () => {
  let controller: NotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SendNotification,
        {
          provide: NotificationsRepository,
          useClass: InMemoryNotificationsRepository,
        },
      ],
      controllers: [NotificationController],
    }).compile();

    controller = module.get<NotificationController>(NotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
