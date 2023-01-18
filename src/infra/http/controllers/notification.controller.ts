import { SendNotification } from '@application/use-cases/send-notification.use-case';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationDto } from '../DTOs/create-notification.dto';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}

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
