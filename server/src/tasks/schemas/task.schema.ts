import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true, type: SchemaTypes.String })
  title: string;

  @Prop({ type: SchemaTypes.String })
  description: string;

  @Prop({ required: true, type: SchemaTypes.ObjectId, ref: 'User' })
  creator: Types.ObjectId;

  @Prop({ required: true, type: SchemaTypes.ObjectId, ref: 'Desk' })
  desk: Types.ObjectId;

  @Prop({ required: true, type: SchemaTypes.ObjectId, ref: 'Column' })
  column: Types.ObjectId;

  _id: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
