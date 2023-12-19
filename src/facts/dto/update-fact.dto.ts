import { PartialType } from '@nestjs/mapped-types';
import { CreateFactDto } from './create-fact.dto';
import { IsOptional, IsString } from 'class-validator'

export class UpdateFactDto extends PartialType(CreateFactDto) {
  @IsString()
  @IsOptional()
  text?: string;
}
