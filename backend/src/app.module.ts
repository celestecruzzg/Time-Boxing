import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ActivityModule } from './activity/activity.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [PrismaModule, UserModule, TaskModule, ActivityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
