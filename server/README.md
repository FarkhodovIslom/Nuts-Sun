# Dried Fruits Shop Backend (MVP)

Express + MongoDB + Mongoose + JWT. Covers products, categories, auth, cart, orders, pagination, search, filtering, and admin role.

## Quick Start

```bash
cp .env.example .env
npm i
npm run dev
# seed sample data (optional)
npm run seed
```

## API Base
`http://localhost:${PORT}/api`

### Auth
- `POST /api/auth/register` — { name, email, password }
- `POST /api/auth/login` — { email, password }
- `GET /api/auth/me` — (Authorization: Bearer <token>)

### Products (Client)
- `GET /api/products` — query: page, limit, type, search, sort, inStock
- `GET /api/products/:id`
- `GET /api/products/types` — distinct types
- `GET /api/products/featured` — newest 8 in-stock

### Admin Products
- `GET /api/admin/products` — pagination + filters
- `GET /api/admin/products/:id`
- `POST /api/admin/products`
- `PUT /api/admin/products/:id`
- `DELETE /api/admin/products/:id`

### Categories (Admin)
- `GET /api/admin/categories`
- `POST /api/admin/categories`
- `PUT /api/admin/categories/:id`
- `DELETE /api/admin/categories/:id`

### Cart (User)
- `GET /api/cart`
- `POST /api/cart/add` — { productId, quantity }
- `PUT /api/cart/update/:productId` — { quantity }
- `DELETE /api/cart/remove/:productId`

### Orders
- `POST /api/orders` — creates order from current cart
- `GET /api/orders` — user's orders
- `GET /api/admin/orders` — all orders (admin)
- `PUT /api/admin/orders/:id/status` — { status }

Error format & validation match the spec.
