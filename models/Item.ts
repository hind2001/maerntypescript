import mongoose from 'mongoose'
import { Schema,model } from "mongoose";

interface Item {
    name: string;
    date: Date;
  }
interface itemModelInterface extends mongoose.Model<ItemDoc> {
    build(attr: Item): ItemDoc
  }
interface ItemDoc extends mongoose.Document {
    name: string;
    date: Date;
  }
const ItemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
        required:true
    }});
ItemSchema.statics.build = (attr: Item) => {
    return new Itemm(attr)
  }
const Itemm = mongoose.model<ItemDoc, itemModelInterface>('Item', ItemSchema)
Itemm.build({
    name: ' ',
    date:new Date()
  })
export {Itemm}