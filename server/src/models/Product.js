import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2 },
  type: { type: String, required: true, trim: true, enum: ['орехи','сухофрукты','семечки','цукаты','смеси'] },
  price: { type: Number, required: true, min: 0.01 },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  inStock: { type: Boolean, default: true },
  weight: { type: Number, min: 0 }
}, { timestamps: true });

export const Product = mongoose.model('Product', ProductSchema);
