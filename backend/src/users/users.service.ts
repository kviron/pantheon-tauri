import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { AuthDto } from '../auth/dto/auth.dto'
import { hash } from 'argon2'

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	getById(id: number) {
		return this.prisma.user.findUnique({
			where: { id }
		})
	}

	getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: { email }
		})
	}

	async create(dto: AuthDto) {
		const newUser = {
			email: dto.email,
			name: '',
			password: await hash(dto.password)
		}

		return this.prisma.user.create({
			data: { ...newUser, role: 'USER' }
		})
	}
}
