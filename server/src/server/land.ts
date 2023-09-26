import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
  title: String,
  codigo: String,
  type: String,
  img: String,
  blogspot: String,
  youtube: String,
  instagram: String,
  whatsapp: String,
  facebook: String,
  description: String,
  curse: {
    type: Schema.Types.ObjectId,
  }
});

export interface IFilecursew  extends Document {
  title: string;
  codigo: string,
  type: string;
  img: string,
  blogspot: string,
  youtube: string,
  instagram: string,
  whatsapp: string,
  facebook: string,
  description: string,
  curse: {
    type: Schema.Types.ObjectId,
  }
}

export default model<IFilecursew>('Filecursew', schema);
