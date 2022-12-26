import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Notification } from '@prisma/client';
import { CreateNotificationDto } from '../DTOs/create-notification.dto';

@Controller('notifications')
export class NotificationController {
  constructor(private prismaService: PrismaService) {}

  @Get()
  async getNotifications(): Promise<Notification[]> {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async createNotification(
    @Body() createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    const { content, category, recipientId } = createNotificationDto;

    return this.prismaService.notification.create({
      data: {
        content,
        category,
        recipientId,
      },
    });
  }
}
