import { Injectable } from '@nestjs/common';
import { CreateDeskDto } from './dto/create-desk-dto';

@Injectable()
export class DesksService {
  createDesk(createDeskDto: CreateDeskDto & { userId: string }) {
    return createDeskDto;
  }
}
