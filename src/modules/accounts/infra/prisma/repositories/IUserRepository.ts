import { IUserCreateDTO } from '../../../dtos/IUserCreateDTO';
import { User } from '../entities/User';

interface IUserRepository {
  createUser(data: IUserCreateDTO): Promise<void>;

  findById(id: string): Promise<User | null>;

  findByEmail(email: string): Promise<User | null>;

  listAllUsers(): Promise<User[]>;
}

export { IUserRepository };