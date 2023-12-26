import { randomUUID } from 'crypto';
import { Notification } from './notification.entity';
import { Content } from './notification/content';

describe('Test all methods to create a notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade'),
      category: 'Social',
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
