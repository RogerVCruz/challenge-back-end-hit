import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../infra/prisma/repositories/IUserRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {

  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({email, password}: IRequest): Promise<IResponse> {


    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('E-mail ou senha inválidos');
    }

    const verifyPass = await compare(password, user.password as string);

    if (!verifyPass) {
      throw new Error('Email or password incorrect!');
    }

    const token = sign({ id: user.id }, process.env.JWT_PASS ?? '', {
      expiresIn: '8h',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name as string,
        email: user.email as string,
      }
    };
    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };