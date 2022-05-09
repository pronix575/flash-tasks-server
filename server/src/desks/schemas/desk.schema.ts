import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type DeskDocument = Desk & Document;

@Schema()
class Column {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ type: String })
  color: string;
}

const ColumnSchema = SchemaFactory.createForClass(Column);

@Schema()
export class Desk {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ type: [ColumnSchema] })
  columns: Column[];

  @Prop({ type: SchemaTypes.ObjectId, ref: User.name })
  creator: User;

  _id: string;
}

export const DeskSchema = SchemaFactory.createForClass(Desk);
