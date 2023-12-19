import { IsString } from "class-validator";

export class CreateFactDto {
  @IsString()
  text: string;
}
