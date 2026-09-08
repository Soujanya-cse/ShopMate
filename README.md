# 🛒 ShopMate – React Shopping Cart

ShopMate is a responsive shopping cart application built with **React.js** and **Material UI (MUI)**.

The application allows users to browse products, add products to their cart, remove products from the cart, and view the total cart value through a clean and responsive user interface.

---

## 🚀 Features

- 🏠 Home Page – Browse available products
- 🛍️ Product Cards – Display product image, name, price, and actions
- ➕ Add to Cart – Add products to the shopping cart
- ❌ Remove from Cart – Remove products from the cart
- 🛒 Cart Page – View all selected products
- 💰 Cart Total – Automatically calculate the total price
- 🔢 Cart Item Count – Display the number of items in the cart
- 🧭 React Router – Navigate between pages
- 🎨 Material UI – Modern UI components and styling
- 📱 Responsive Design – Works on desktop, tablet, and mobile
- ⚛️ Context API – Manage global cart state
- 🔄 useReducer – Manage cart state changes

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Material UI | UI components and styling |
| React Router | Application navigation |
| Context API | Global state management |
| useReducer | Cart state management |
| JavaScript | Application logic |
| CSS | Global styling |

---

## 📂 Project Structure

```text
shopmate/
│
├── public/
│   └── assets/
│
├── src/
│   │
│   ├── assets/
│   │   └── logo.png
│   │
│   ├── components/
│   │   ├── Header.js
│   │   ├── ProductCard.js
│   │   ├── CartCard.js
│   │   └── index.js
│   │
│   ├── context/
│   │   └── CartContext.js
│   │
│   ├── hooks/
│   │   └── useTitle.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Cart.js
│   │   └── index.js
│   │
│   ├── reducer/
│   │   └── cartReducer.js
│   │
│   ├── routes/
│   │   └── AllRoutes.js
│   │
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md