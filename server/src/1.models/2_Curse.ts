import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
  title: String,
  description: String,
  img: String,
  especialidad: String,
  mension: String,
  credito: String,
  ciclo: String,
  meet: String,
  show: String,
  codigo: String,
  requisito: String,
  year: String,
  user: {
    type: Schema.Types.ObjectId,
  }
});

export interface ICurse extends Document {
  title: string,
  description: string,
  img: string,
  especialidad: string,
  mension: string,
  credito: string,
  ciclo: string,
  meet: string,
  show: string,
  codigo: string,
  requisito: string,
  year: string,
  user: {
    type: Schema.Types.ObjectId,
  }
}

export default model<ICurse>('Curse', schema);
