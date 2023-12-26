import { randomUUID } from 'crypto';
import { InMemoryNotificationsRepository } from '../../../test/Repositories/InMemoryNotificationRepository';
import { SendNotification } from './SendNotification.useCase';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'Social',
      recipientId: randomUUID(),
    });

    // console.log(notifications);

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
