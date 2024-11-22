/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    try {
      return await this.prisma.user.create({ data: createUserDto }); //creamos un nuevo usuario
    } catch (error) {
      throw new Error(`No se pudo crear el usuario ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.prisma.user.findMany(); //encontramos todos los usuarios
    } catch (error) {
      throw new Error(`No se pudo encontrar los usuarios ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.user.findUnique({ where: { id } });
    } catch (error) {
      // eslint-disable-next-line prettier/prettier
      throw new Error(`No existe tal usuario con el id: ${id}: ${error.message}`);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      }); //actualizamos un usuario
    } catch (error) {
      throw new Error(`No se pudo actualizar el usuario ${error.message}`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.user.delete({ where: { id } }); //eliminamos un usuario
    } catch (error) {
      throw new Error(`No se pudo eliminar el usuario ${error.message}`);
    }
  }
}
