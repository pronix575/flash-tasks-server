import { ApiProperty } from '@nestjs/swagger';

export interface List<T> {
  items: T[];
}

export class Id {
  @ApiProperty()
  _id?: string;
}
