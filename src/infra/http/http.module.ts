import { CancelNotification } from '@application/use-cases/cancel-notification.use-case';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications.use-case';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications.use-case';
import { ReadNotification } from '@application/use-cases/read-notification.use-case';
import { SendNotification } from '@application/use-cases/send-notification.use-case';
import { UnreadNotification } from '@application/use-cases/unread-notification.use-case';
import { DatabaseModule } from '@infra/database/database.module';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { FileUploadController } from './controllers/file-upload.controller';
import { NotificationController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController, FileUploadController, AppController],
  providers: [
    PrismaService,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    SendNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
