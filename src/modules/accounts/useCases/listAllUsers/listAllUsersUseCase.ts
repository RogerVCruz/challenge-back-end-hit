import { inject, injectable } from 'tsyringe';
import { User } from '../../infra/prisma/entities/User';
import { IUserRepository } from '../../infra/prisma/repositories/IUserRepository';

@injectable()
class ListAllUsersUseCase {

  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = this.userRepository.listAllUsers();
    return users;
  }
}

export { ListAllUsersUseCase };