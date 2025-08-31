import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/database.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

// Routes
import authRoutes from './routes/auth.js';
import adminProductsRoutes from './routes/admin/products.js';
import adminCategoriesRoutes from './routes/admin/categories.js';
import clientProductsRoutes from './routes/client/products.js';
import cartRoutes from './routes/cart.js';
import ordersRoutes from './routes/orders.js';

const app = express();

// Core middleware
app.use(express.json({ limit: '1mb' }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.set('trust proxy', 1);
app.use(rateLimit({ windowMs: 60 * 1000, max: 120 }));

// Health
app.get('/health', (req, res) => res.json({ ok: true, ts: new Date().toISOString() }));

// API v1
app.use('/api/auth', authRoutes);
app.use('/api/admin/products', adminProductsRoutes);
app.use('/api/admin/categories', adminCategoriesRoutes);
app.use('/api/products', clientProductsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', ordersRoutes);

// 404 & Errors
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/dried-fruits-shop';

connectDB(MONGODB_URI).then(() => {
  app.listen(PORT, () => console.log('Server running on http://localhost:' + PORT));
});
