import { NotificationsRepository } from '@application/repositories/notifications.repository';
import { CancelNotification } from '@application/use-cases/cancel-notification.use-case';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications.use-case';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications.use-case';
import { ReadNotification } from '@application/use-cases/read-notification.use-case';
import { SendNotification } from '@application/use-cases/send-notification.use-case';
import { UnreadNotification } from '@application/use-cases/unread-notification.use-case';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { NotificationController } from '@infra/http/controllers/notification.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { InMemoryNotificationsRepository } from '@test/application/repositories/in-memory-notifications.repository';

describe('NotificationController', () => {
  let controller: NotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotifications,
        ReadNotification,
        SendNotification,
        UnreadNotification,
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
