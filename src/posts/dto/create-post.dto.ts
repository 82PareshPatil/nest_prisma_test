import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'NestJS Journey' })
  title: string;

  @ApiProperty({ required: false, example: 'One to Many Relation Checked!' })
  content?: string;

  @ApiProperty({ default: false, required: false, example: true })
  published?: boolean;

  @ApiProperty({ example: 1 })
  authorId: number;
}
