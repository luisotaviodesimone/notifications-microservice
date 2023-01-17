import { Module } from '@nestjs/common';
import { SendNotification } from '../../application/use-cases/send-notification.use-case';
import { DatabaseModule } from '../database/database.module';
import { PrismaService } from '../database/prisma/prisma.service';
import { AppController } from './controllers/app.controller';
import { FileUploadController } from './controllers/file-upload.controller';
import { NotificationController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController, FileUploadController, AppController],
  providers: [PrismaService, SendNotification],
})
export class HttpModule {}
