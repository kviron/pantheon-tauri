import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'
import { AuthDto } from './dto/auth.dto'
import { verify } from 'argon2'
import { Response } from 'express'

@Injectable()
export class AuthService {
	EXPIRE_DAY_REFRESH_TOKEN = 1
	REFRESH_TOKEN_NAME = 'refreshToken'

	constructor(
		private jwt: JwtService,
		private usersService: UsersService
	) {}

	async login(dto: AuthDto) {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, id, ...other } = await this.validate(dto)
		const tokens = await this.issueToken(id)
		return {
			user: {
				id,
				...other
			},
			...tokens
		}
	}

	async register(dto: AuthDto) {
		const oldUser = await this.usersService.getByEmail(dto.email)

		if (oldUser) throw new BadRequestException('Пользователь уже существует')

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, id, ...other } = await this.usersService.create(dto)

		const tokens = await this.issueToken(id)

		return {
			user: {
				id,
				...other
			},
			...tokens
		}
	}

	private issueToken(userId: number) {
		const data = { id: userId }
		const accessToken = this.jwt.sign(data, { expiresIn: '1h' })
		const refreshToken = this.jwt.sign(data, { expiresIn: '7d' })

		return { accessToken, refreshToken }
	}

	private async validate(dto: AuthDto) {
		const { user } = await this.usersService.getByEmail(dto.email)

		if (!user) throw new NotFoundException('Пользователь не найден')

		const isValid = await verify(user.password, dto.password)

		if (!isValid) throw new UnauthorizedException('Не правильный пароль')

		return user
	}

	addRefreshTokenToResponse(res: Response, refreshToken: string) {
		const expiresIn = new Date()

		expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN)

		res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
			httpOnly: true,
			domain: 'localhost',
			expires: expiresIn,
			secure: true,
			sameSite: 'none'
		})
	}

	removeRefreshTokenToResponse(res: Response) {
		res.cookie(this.REFRESH_TOKEN_NAME, '', {
			httpOnly: true,
			domain: 'localhost',
			expires: new Date(0),
			secure: true,
			sameSite: 'none'
		})
	}
}
