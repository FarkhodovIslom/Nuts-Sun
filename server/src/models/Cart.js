import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0.01 }
  }],
  totalPrice: { type: Number, required: true, min: 0, default: 0 }
}, { timestamps: true });

export const Cart = mongoose.model('Cart', CartSchema);
