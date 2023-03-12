import { CancelNotification } from '@application/use-cases/cancel-notification.use-case';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications.use-case';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications.use-case';
import { ReadNotification } from '@application/use-cases/read-notification.use-case';
import { SendNotification } from '@application/use-cases/send-notification.use-case';
import { UnreadNotification } from '@application/use-cases/unread-notification.use-case';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationDto } from '../DTOs/create-notification.dto';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') notificationId: string) {
    await this.cancelNotification.execute({
      notificationId,
    });
  }

  @Patch(':id/read')
  async read(@Param('id') notificationId: string) {
    await this.readNotification.execute({
      notificationId,
    });
  }

  @Patch(':id/unread')
  async unread(@Param('id') notificationId: string) {
    await this.unreadNotification.execute({
      notificationId,
    });
  }

  @Get(':recipientId/count')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId,
    });
    return { count };
  }

  @Get(':recipientId/notifications')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });

    const result = notifications.map(NotificationViewModel.toHTTP);

    return { notifications: result };
  }

  @Post()
  async createNotification(
    @Body() createNotificationDto: CreateNotificationDto,
  ) {
    const { content, category, recipientId } = createNotificationDto;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
