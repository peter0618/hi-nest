import { Allow, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  // @Allow()
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true })
  readonly genres: string[];
}
