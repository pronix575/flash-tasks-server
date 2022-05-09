import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Desk } from 'src/desks/schemas/desk.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  password: string;

  @Prop({ default: [], type: [SchemaTypes.ObjectId] })
  desks: Desk[];

  _id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
