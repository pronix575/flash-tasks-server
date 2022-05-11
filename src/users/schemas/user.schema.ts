import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

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
  desks: Types.ObjectId[];

  @Prop()
  avatar: string;

  _id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
