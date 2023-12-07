import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../infra/prisma/repositories/IUserRepository';
import { IUserCreateDTO } from '../../dtos/IUserCreateDTO';
import { hash } from 'bcryptjs';

@injectable()
class CreateUserUseCase{

  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    password,
    email
  }: IUserCreateDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if(userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const passwordHash = await hash(password, 8);
    
    await this.userRepository.createUser({
      name,
      password: passwordHash,
      email
    });
  }
}

export { CreateUserUseCase };