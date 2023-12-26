import { Module } from '@nestjs/common';
import { SendNotification } from 'src/common/use-cases/SendNotification.useCase';
import { DatabaseModule } from '../Database/database.module';
import { NotificationsController } from '../Notifications/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
