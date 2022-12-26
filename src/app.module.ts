import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { PrismaService } from './services/prisma.service';
import { NotificationController } from './controllers/notification.controller';
import { FileUploadController } from './controllers/file-upload.controller';

@Module({
  imports: [],
  controllers: [AppController, NotificationController, FileUploadController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
