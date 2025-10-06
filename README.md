# 🛒 Shopping Cart

A React + Vite shopping cart web app using Redux Toolkit, with features such as product listing, cart management, dark/light theme toggle, and state persistence (via localStorage).

**Live Demo:** [shopping-cart-bice-six-91.vercel.app](https://shopping-cart-bice-six-91.vercel.app)

---

## 🧱 Features & Highlights

| Feature              | Description                                       |
| -------------------- | ------------------------------------------------- |
| Product Listing      | Fetch and display product data (e.g. from an API) |
| Cart Management      | Add to cart, remove, increase/decrease quantity   |
| Theme (Dark / Light) | Toggle between dark and light modes               |
| State Persistence    | Cart state and theme saved to localStorage        |
| Responsive UI        | Works across desktop / mobile                     |
| Redux Toolkit        | State management using slices, actions, reducers  |
| Deployed             | Hosted on Vercel                                  |

---

## 🗂️ Repo Structure (Overview)

```
/
├── public/
├── src/
│   ├── app/
│   │   └── store.js              # Redux store configuration
│   ├── features/
│   │   ├── cartSlice.js          # Cart slice (actions, reducers)
│   │   ├── productSlice.js       # Product slice / fetching logic
│   │   └── darkModeSlice.js      # Dark/light theme slice
│   ├── components/               # React UI components
│   ├── pages/                    # Page-level components (Home, Cart, etc.)
│   ├── App.jsx                   # Main app + routes
│   └── main.jsx                  # Entry point, wrapping Provider, etc.
├── vite.config.js
├── package.json
├── README.md                     # (this file)
└── .gitignore
```


---

## 🛠️ Setup Instructions (Locally)

1. **Clone the repo:**

   ```bash
   git clone https://github.com/AbhayGhorela/Shopping-cart.git
   cd Shopping-cart
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**

   ```bash
   npm run build
   ```

5. (Optional) **Serve locally to mimic production:**

   ```bash
   npx serve -s dist
   ```

---

## 🧠 How It Works (High-Level Flow)

1. **Redux store is configured** (in `store.js`) combining slices: `cart, products, darkMode`.
2. **darkModeSlice** initializes state from `localStorage` (if available), falling back to default.
3. **cartSlice** (and other slices) respond to UI actions (add, remove, increment, decrement) via dispatched actions.
4. **store.subscribe** is used to watch state changes: whenever `cart` or `darkMode` changes, the new state is serialized and saved to `localStorage`.
5. On page load, theme and cart state are rehydrated (loaded) from `localStorage`, so user’s data persists across reloads.
6. UI components use `useSelector` to read slice state and `useDispatch` to trigger actions.
7. Routes (via React Router) allow navigation between different pages (Home / Cart / etc.).

---

## 🧩 Dependencies & Tools

* React
* Vite (build tool)
* Redux Toolkit & React Redux
* LocalStorage API
* React Router DOM
* CSS / Tailwind CSS
* Vercel (for deployment)

---

## 🔒 Project Status

This project is **private** and built for **personal learning and portfolio demonstration only**.
It is **not open source** or available for public reuse or distribution.

---

**👨‍💻 Developed by [Abhay Kumar Ghorela](https://github.com/AbhayGhorela)**
