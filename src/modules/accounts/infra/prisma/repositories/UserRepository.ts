import { Prisma } from '@prisma/client';
import { prisma } from '../../../../../shared/infra/Prisma/client';
import { IUserCreateDTO } from '../../../dtos/IUserCreateDTO';
import { User } from '../entities/User';
import { IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {
  private repository: Prisma.UserDelegate;

  constructor() {
    this.repository = prisma.user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.repository.findUnique({
      where: {
        id
      }
    });
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findFirst({
      where: {
        email
      }
    });
    return user;
  }

  async createUser({name, password, email}: IUserCreateDTO): Promise<void> {
    await this.repository.create({
      data: {
        name,
        password,
        email,
      }
    });
  }

  async listAllUsers(): Promise<User[]> {
    const users = await this.repository.findMany();
    return users;
  }
}

export { UserRepository };