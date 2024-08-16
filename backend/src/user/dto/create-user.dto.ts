import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
	@ApiProperty()
	@IsEmail()
	@IsNotEmpty()
	email: string

	@ApiProperty()
	@IsNotEmpty()
	@MinLength(8)
	password: string
}
