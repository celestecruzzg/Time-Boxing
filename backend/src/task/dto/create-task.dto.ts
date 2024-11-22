import { priority } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(priority)
  priority: priority;

  @IsString()
  due_date: string;

  @IsString()
  status: string;
}
