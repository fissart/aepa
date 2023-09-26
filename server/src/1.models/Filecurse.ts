import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
  title: String,
  codigo: String,
  type: String,
  img: String,
  curse: {
    type: Schema.Types.ObjectId,
  }
});

export interface IFilecurse  extends Document {
  title: string;
  codigo: string,
  type: string;
  img: string,
  curse: {
    type: Schema.Types.ObjectId,
  }
}

export default model<IFilecurse>('Filecurse', schema);
