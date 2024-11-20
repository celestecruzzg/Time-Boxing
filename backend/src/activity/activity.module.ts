import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ActivityController],
  imports: [PrismaModule],
  providers: [ActivityService],
  exports: [ActivityService],
})
export class ActivityModule {}
