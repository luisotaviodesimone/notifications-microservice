import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Notification } from '@prisma/client';

@Controller('notifications')
export class NotificationController {
  constructor(private prismaService: PrismaService) {}

  @Get()
  async getNotifications(): Promise<Notification[]> {
    return this.prismaService.notification.findMany();
  }

  @Post('/create')
  async createNotification(
    @Body() createNotificationDto: any,
  ): Promise<Notification> {
    return this.prismaService.notification.create({
      data: {
        content: createNotificationDto.content,
        category: createNotificationDto.category,
        recipientId: createNotificationDto.recipientId,
      },
    });
  }
}
