import { Body, Controller, Get, Post } from '@nestjs/common';
import { Notification } from '../../../application/entities/notification.entity';
import { CreateNotificationDto } from '../DTOs/create-notification.dto';

@Controller('notifications')
export class NotificationController {
  @Get()
  async getNotifications(): Promise<Notification[]> {
    throw new Error('Method not implemented.');
  }

  @Post()
  async createNotification(
    @Body() createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    const { content, category, recipientId } = createNotificationDto;
    throw new Error('Method not implemented.');
  }
}
