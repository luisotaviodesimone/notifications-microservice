import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { PrismaService } from './services/prisma.service';
import { NotificationController } from './controllers/notification.controller';

@Module({
  imports: [],
  controllers: [AppController, NotificationController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
