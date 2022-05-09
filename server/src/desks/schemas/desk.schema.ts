import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeskDocument = Desk & Document;

@Schema()
export class Desk {
  @Prop({ required: true })
  name: string;

  _id: string;
}

export const UserSchema = SchemaFactory.createForClass(Desk);
