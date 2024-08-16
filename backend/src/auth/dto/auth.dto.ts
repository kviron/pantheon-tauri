import { IsEmail, IsString, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AuthDto {
	@IsEmail()
	@ApiProperty()
	email: string

	@ApiProperty()
	@MinLength(8, {
		message: 'пароль должен быть не менее 8 символов'
	})
	@IsString()
	password: string
}
