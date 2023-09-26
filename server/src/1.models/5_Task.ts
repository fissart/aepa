import { timeStamp } from 'console';
import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
  note: String,
  img: String,
  task: String,
  asistence: String,
  theme: {
    type: Schema.Types.ObjectId,
  },
  unidad: {
    type: Schema.Types.ObjectId,
  },
  curse: {
    type: Schema.Types.ObjectId,
  },
  user: {
    type: Schema.Types.ObjectId,
  }
},{
    timestamps: true
});

export interface ITask extends Document {
  note: string,
  img: string,
  task: string,
  asistence: string,
  theme: {
    type: Schema.Types.ObjectId,
  },
  unidad: {
    type: Schema.Types.ObjectId,
  },
  curse: {
    type: Schema.Types.ObjectId,
  },
  user: {
    type: Schema.Types.ObjectId,
  }
}

export default model<ITask>('Task', schema);
