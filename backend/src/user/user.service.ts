/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto }); //creamos un nuevo usuario
  }

  findAll() {
    return this.prisma.user.findMany(); //encontramos todos los usuarios
  }

  async findOne(id: number) {
    try {
      return await this.prisma.user.findUnique({ where: { id } });
    } catch (error) {
      // eslint-disable-next-line prettier/prettier
      throw new Error(`No existe tal usuario con el id: ${id}: ${error.message}`);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto }); //actualizamos un usuario
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } }); //eliminamos un usuario
  }
}
