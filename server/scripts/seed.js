import 'dotenv/config';
import mongoose from 'mongoose';
import { Product } from '../src/models/Product.js';
import { User } from '../src/models/User.js';

async function run() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/dried-fruits-shop';
  await mongoose.connect(uri);
  console.log('Connected to DB');

  await Product.deleteMany({});
  await User.deleteMany({ email: 'admin@shop.local' });

  const products = [
    { name: 'Курага таджикская', type: 'сухофрукты', price: 25000, description: 'Сладкая курага высшего сорта', weight: 500, image: '' , inStock: true },
    { name: 'Миндаль', type: 'орехи', price: 60000, description: 'Миндаль свежий', weight: 300, image: '', inStock: true },
    { name: 'Изюм чёрный', type: 'сухофрукты', price: 20000, weight: 400, inStock: true },
    { name: 'Фисташки', type: 'орехи', price: 90000, weight: 200, inStock: true },
    { name: 'Семечки подсолнуха', type: 'семечки', price: 12000, weight: 300, inStock: true },
    { name: 'Цукаты ананас', type: 'цукаты', price: 35000, weight: 250, inStock: true },
    { name: 'Смесь trail mix', type: 'смеси', price: 55000, weight: 400, inStock: true },
    { name: 'Курага premium', type: 'сухофрукты', price: 32000, weight: 500, inStock: true }
  ];

  await Product.insertMany(products);
  console.log('Seeded products:', products.length);

  const admin = new User({
    name: 'Admin',
    email: 'admin@shop.local',
    password: 'admin123',
    role: 'admin'
  });
  await admin.save();
  console.log('Created admin: admin@shop.local / admin123');

  await mongoose.disconnect();
  console.log('Done');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
