import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationDTO } from '../../common/DTOs/CreateNotification.dto';
import { SendNotification } from '../../common/use-cases/SendNotification.useCase';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    const { category, content, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      category,
      content,
    });

    return { notification };
  }
}
