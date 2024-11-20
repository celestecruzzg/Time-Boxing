import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivityService {
  constructor(private readonly prisma: PrismaService) {}
  create(createActivityDto: CreateActivityDto) {
    return 'This action adds a new activity';
  }

  findAll() {
    return this.prisma.activity.findMany();
  }

  findOne(id: number) {
    return this.prisma.activity.findUnique({ where: { id } });
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.prisma.activity.update({
      where: { id },
      data: updateActivityDto,
    });
  }

  remove(id: number) {
    return this.prisma.activity.delete({ where: { id } });
  }
}
