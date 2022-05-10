import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Desk } from 'src/desks/schemas/desk.schema';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true, type: SchemaTypes.String })
  name: string;

  @Prop({ type: SchemaTypes.String })
  description: string;

  @Prop({ required: true, type: SchemaTypes.ObjectId })
  creator: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(Task);
