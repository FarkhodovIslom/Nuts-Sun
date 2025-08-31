import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1 },
    priceAtPurchase: { type: Number, required: true, min: 0.01 }
  }],
  totalPrice: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ['pending','paid','shipped','delivered','cancelled'], default: 'pending' }
}, { timestamps: true });

export const Order = mongoose.model('Order', OrderSchema);
