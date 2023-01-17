import { Test, TestingModule } from '@nestjs/testing';
import { NotificationController } from '../../../../src/infra/http/controllers/notification.controller';
import { PrismaService } from '../../../../src/infra/database/prisma/prisma.service';

describe('NotificationController', () => {
  let controller: NotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
      controllers: [NotificationController],
    }).compile();

    controller = module.get<NotificationController>(NotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
