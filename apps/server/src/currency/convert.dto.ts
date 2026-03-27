import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class ConvertDto {
	@IsNumber()
	@IsPositive()
	amount!: number;

	@IsString()
	@IsNotEmpty()
	from!: string;

	@IsString()
	@IsNotEmpty()
	to!: string;
}
