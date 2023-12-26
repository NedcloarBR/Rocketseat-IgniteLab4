import { Notification } from '../Entities/notification.entity';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
