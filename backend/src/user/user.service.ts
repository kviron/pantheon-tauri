import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { AuthDto } from '../auth/dto/auth.dto'
import { hash } from 'argon2'
import { UpdateUserDto } from './dto/update-user.dto'

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
		return this.prismaService.user.create({
			data: {
				...dto,
				password: await hash(dto.password)
			}
		})
	}

	async update(id: string, dto: UpdateUserDto) {
		let data = dto

		if (dto.password) {
			data = { ...dto, password: await hash(dto.password) }
		}

		return this.prismaService.user.update({
			where: { id: id },
			data
		})
	}
}
