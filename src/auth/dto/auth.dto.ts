import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  @MinLength(6)
  @MaxLength(32)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(64)
  @Matches(/((?=.*\d)|(?=.*\W+))(?=.*[A-Za-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;
}
