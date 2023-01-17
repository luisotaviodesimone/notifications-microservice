import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { AppController } from './controllers/app.controller';
import { FileUploadController } from './controllers/file-upload.controller';
import { NotificationController } from './controllers/notification.controller';

@Module({
  imports: [],
  controllers: [NotificationController, FileUploadController, AppController],
  providers: [PrismaService],
})
export class HttpModule {}
