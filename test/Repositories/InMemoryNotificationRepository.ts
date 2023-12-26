import { Notification } from '../../src/modules/Database/Entities/notification.entity';
import { NotificationsRepository } from '../../src/modules/Database/Repositories/NotificationsRepository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Array<Notification> = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
