import { ApiProperty } from "@nestjs/swagger";

export class CreateProfileDto {
  @ApiProperty({ required: false })
  bio?: string;

  @ApiProperty()
  avatar: string;
}
