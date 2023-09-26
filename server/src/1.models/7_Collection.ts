import { Schema, model, Document } from 'mongoose'
const schema = new Schema({
    title: String,
    type: String,
    subtype: String,
    description: String,
    file: String,
    url: String,
    user: {
      type: Schema.Types.ObjectId,
    },
    responce: String,
},{
    timestamps: true
});
export interface ICollection extends Document {
  title: string,
  type: string,
  subtype: string,
  description: string,
  file: string,
  url: string,
  user: {
    type: Schema.Types.ObjectId,
  },
  responce: string,
}
export default model<ICollection>('Collection', schema);
