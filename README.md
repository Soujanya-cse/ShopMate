# 🛒 ShopMate – React Shopping Cart

ShopMate is a responsive shopping cart application built using **React.js** and **Material UI (MUI)**.

The application allows users to browse products, add products to their cart, remove products from the cart, and view the total cart value through a clean and responsive user interface.

---

## 🚀 Features

- 🏠 Home Page – Browse available products
- 🛍️ Product Cards – Display product image, name, price, and actions
- ➕ Add to Cart – Add products to the shopping cart
- ❌ Remove from Cart – Remove products from the shopping cart
- 🛒 Cart Page – View all selected products
- 💰 Cart Total – Automatically calculate the total price
- 🔢 Cart Item Count – Display the number of items in the cart
- 🧭 React Router – Navigate between pages
- 🎨 Material UI – Modern UI components and styling
- 📱 Responsive Design – Works on desktop, tablet, and mobile
- ⚛️ Context API – Manage global cart state
- 🔄 useReducer – Manage cart state changes
- 🧩 Reusable Components – Maintainable and scalable component structure

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
| Google Fonts | Typography |

---

## 📂 Project Structure

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
    ├── package-lock.json
    └── README.md

---

## 🧩 Application Architecture

ShopMate follows a component-based React architecture.

    App
     │
     ├── Header
     │
     └── AllRoutes
          │
          ├── Home
          │    │
          │    └── ProductCard
          │
          └── Cart
               │
               └── CartCard
                    │
                    └── CartContext
                         │
                         └── cartReducer

---

## 🔄 State Management

ShopMate uses the **React Context API** and **useReducer** to manage the shopping cart state globally.

### Cart Context

The `CartContext` provides cart-related data and functions to components throughout the application.

The context manages:

- Cart items
- Total price
- Add product
- Remove product
- Update total

### Reducer

The `cartReducer` handles different cart actions:

- `ADD_TO_CART`
- `REMOVE_FROM_CART`
- `UPDATE_TOTAL`

---

## ➕ Add Product Flow

    User clicks "Add To Cart"
              ↓
         ProductCard
              ↓
          addToCart()
              ↓
         CartContext
              ↓
         cartReducer
              ↓
         ADD_TO_CART
              ↓
      Updated Cart State
              ↓
       Components Re-render

---

## ❌ Remove Product Flow

    User clicks "Remove"
              ↓
      ProductCard / CartCard
              ↓
        removeFromCart()
              ↓
          CartContext
              ↓
          cartReducer
              ↓
       REMOVE_FROM_CART
              ↓
      Updated Cart State
              ↓
       Components Re-render

---

## 💰 Total Price Flow

    Products Added
          ↓
    Cart List Updated
          ↓
      UPDATE_TOTAL
          ↓
    Calculate Product Prices
          ↓
     Total Price Updated
          ↓
     Cart Page Displays Total

---

## 🎨 Material UI

The complete application interface is built using **Material UI**.

Material UI provides ready-made React components and a styling system that helps create responsive and professional user interfaces.

### MUI Components Used

- AppBar
- Toolbar
- Container
- Box
- Card
- CardMedia
- CardContent
- Button
- Typography
- Grid
- Stack
- Paper
- Badge
- ThemeProvider
- CssBaseline
- ShoppingCartIcon
- useMediaQuery

The project uses MUI's `sx` prop for component-level styling instead of maintaining separate CSS files for every component.

---

## 🎨 Theme

The application uses a custom Material UI theme.

The theme controls:

- Primary color
- Error color
- Typography
- Font family
- Component appearance

The application uses `ThemeProvider` to provide the theme throughout the application.

---

## 🏠 Home Page

The Home page displays all available products.

Each product is displayed using the reusable `ProductCard` component.

A product card contains:

- Product image
- Product name
- Product price
- Add To Cart button
- Remove button when the product is already in the cart

The product layout is responsive using Material UI's responsive grid system.

---

## 🛍️ Product Card

The `ProductCard` component is responsible for displaying individual product information.

The component uses Material UI components such as:

- `Card`
- `CardMedia`
- `CardContent`
- `Typography`
- `Button`
- `Box`

The component also uses React hooks and the cart context to determine whether a product has already been added to the cart.

---

## 🛒 Cart Page

The Cart page displays all products that have been added to the shopping cart.

The page contains:

- Cart heading
- Number of products
- Selected products
- Product image
- Product name
- Product price
- Remove button
- Total price

If the cart is empty, the application displays an empty-cart message.

---

## 🧾 Cart Card

The `CartCard` component displays each product inside the shopping cart.

It contains:

- Product image
- Product name
- Product price
- Remove button

The layout automatically adjusts for smaller screen sizes.

---

## 🔗 Application Routes

React Router is used for application navigation.

| Route | Component | Description |
|---|---|---|
| `/` | Home | Displays all products |
| `/cart` | Cart | Displays shopping cart |

---

## 🧭 Navigation

The Header contains navigation links for:

- Home
- Cart

The Cart navigation item also displays the current number of products in the cart using the Material UI `Badge` component.

---

## 📱 Responsive Design

ShopMate is designed to work across different screen sizes.

### Desktop

Multiple product cards are displayed in a row.

### Tablet

The number of cards per row is automatically reduced.

### Mobile

Products are displayed in a single-column layout.

Material UI responsive properties are used to adapt the layout according to the screen size.

---

## ⚛️ React Concepts Used

This project demonstrates several important React concepts:

### Functional Components

The application is built using reusable functional components.

### JSX

JSX is used to define the UI structure inside React components.

### Props

Props are used to pass data and functions between components.

### useState

Used for managing component-level state.

### useEffect

Used for handling side effects and updating values when dependencies change.

### useContext

Used to access global cart state without manually passing props through multiple components.

### useReducer

Used to manage complex cart state updates through actions.

### Context API

Used to make cart information available throughout the application.

### Custom Hooks

Custom hooks can be used to reuse application logic.

### React Router

Used for client-side navigation.

### Conditional Rendering

Used to display different UI elements depending on the cart state.

### Event Handling

Used to handle user interactions such as clicking buttons.

### Array Methods

Methods such as `map`, `filter`, and `reduce` are used for handling product and cart data.

---

## 📦 Installation

Follow the steps below to run the project locally.

### 1. Clone the Repository

    git clone <your-repository-url>

### 2. Navigate to the Project

    cd shopmate

### 3. Install Dependencies

    npm install

### 4. Install Material UI

    npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

### 5. Start the Development Server

    npm start

The application will run at:

    http://localhost:3000

---

## 🧪 Available Scripts

### Start Development Server

    npm start

Starts the application in development mode.

### Build Application

    npm run build

Creates an optimized production build.

### Run Tests

    npm test

Runs the project's test suite.

---

## 🛒 Products

The current application contains products such as:

| Product | Price |
|---|---:|
| Sony WH-CH510 | $149 |
| boAt Rockerz 450 | $49 |
| JBL Tune 760NC | $179 |
| Logitech H111 Wired | $39 |
| Apple AirPods Max | $199 |
| ZEBRONICS Zeb-Thunder Wired | $29 |

---

## 🎯 Project Goals

The main goals of ShopMate are:

1. Build a functional shopping cart using React.
2. Understand React component architecture.
3. Create reusable components.
4. Learn global state management.
5. Implement Context API.
6. Understand and implement `useReducer`.
7. Implement navigation using React Router.
8. Build a responsive UI using Material UI.
9. Use a centralized Material UI theme.
10. Maintain a clean and scalable project structure.

---

## 📚 Learning Outcomes

By building this project, the following concepts were practiced:

- React Components
- JSX
- Props
- State
- Hooks
- useState
- useEffect
- useContext
- useReducer
- Context API
- React Router
- Conditional Rendering
- Event Handling
- Component Reusability
- Material UI
- Responsive Design
- ThemeProvider
- MUI `sx` Styling

---

## 🏗️ Project Architecture

The application follows a separation-of-concerns approach.

### Components

The `components` folder contains reusable UI components.

- `Header.js`
- `ProductCard.js`
- `CartCard.js`

### Context

The `context` folder contains global application state.

- `CartContext.js`

### Reducer

The `reducer` folder contains reducer logic.

- `cartReducer.js`

### Pages

The `pages` folder contains application pages.

- `Home.js`
- `Cart.js`

### Routes

The `routes` folder manages application navigation.

- `AllRoutes.js`

### Hooks

The `hooks` folder contains reusable custom hooks.

---

## 🔐 State Flow

The overall application state flow is:

    User Interaction
          ↓
    React Component
          ↓
      Cart Context
          ↓
        Dispatch
          ↓
      cartReducer
          ↓
     Updated State
          ↓
     React Re-render
          ↓
       Updated UI

---

## 📌 Key Benefits of This Architecture

### Reusable Components

Product and cart UI are separated into reusable components.

### Centralized State

Cart state is managed centrally using Context API.

### Predictable State Updates

`useReducer` provides clear actions for updating cart state.

### Responsive UI

Material UI makes it easier to create responsive layouts.

### Maintainability

The project is divided into components, pages, context, reducers, hooks, and routes.

### Scalability

The structure can be extended later with authentication, APIs, checkout, product details, and other features.

---

## 🔮 Future Improvements

The following features can be added in future versions:

- 🔐 User Authentication
- 🔍 Product Search
- 🗂️ Product Categories
- 🏷️ Product Filtering
- ↕️ Product Sorting
- ❤️ Wishlist
- 💳 Checkout and Payment
- 📦 Order History
- 🌐 Backend API Integration
- 💾 LocalStorage Cart Persistence
- ⭐ Product Ratings and Reviews
- 🌓 Dark Mode
- 📄 Product Details Page
- 🧮 Product Quantity Management
- 💵 Discount and Coupon System
- 📊 Admin Dashboard

---

## 🚀 Future Project Scope

ShopMate can be extended from a simple shopping cart into a complete e-commerce application.

A future version can include:

    Frontend
       ↓
    React + Material UI
       ↓
    REST API
       ↓
    Backend
       ↓
    Database
       ↓
    Authentication
       ↓
    Payment Gateway
       ↓
    Order Management

This would make the project suitable for a larger industry-level application.

---

## 👩‍💻 Author

**Soujanya**

A developer and learner focused on building modern, responsive, and maintainable web applications using React and modern frontend technologies.

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for learning and development purposes.
