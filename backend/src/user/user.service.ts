import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { AuthDto } from '../auth/dto/auth.dto'
import { hash } from 'argon2'

@Injectable()
export class UserService {
	constructor(private readonly prismaService: PrismaService) {}

	getById(id: string) {
		return this.prismaService.user.findUnique({
			where: { id }
		})
	}

	async getByEmail(email: string) {
		return this.prismaService.user.findUnique({
			where: { email }
		})
	}

	async create(dto: AuthDto) {
		const user = {
			email: dto.email,
			name: '',
			password: await hash(dto.password),
		}

		return this.prismaService.user.create({
			data: user,
		})
	}
}
