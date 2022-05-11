import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type DeskDocument = Desk & Document;

@Schema()
export class Column {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ type: String })
  color: string;

  @Prop({ default: [], type: [{ type: SchemaTypes.ObjectId, ref: 'Task' }] })
  tasks: Types.ObjectId[];

  _id: string;
}

export const ColumnSchema = SchemaFactory.createForClass(Column);

@Schema()
export class Desk {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ default: [], type: [ColumnSchema] })
  columns: Column[];

  @Prop({ type: SchemaTypes.ObjectId })
  creator: Types.ObjectId;

  _id: string;
}

export const DeskSchema = SchemaFactory.createForClass(Desk);
