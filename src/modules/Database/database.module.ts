import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { NotificationsRepository } from './Repositories/NotificationsRepository';
import { PrismaNotificationsRepository } from './Repositories/PrismaNotificationsRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
