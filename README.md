# CloutFlow Assignment

This is the CloutFlow Assignment setup.

---

## Deployment Link

Hosted on Netlify : https://cloutflow-assignment.netlify.app/

There were `no assumptions` made during creation of this assignment

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/dev-ashishsethi/cloutflow-assignment.git
cd cloutflow-assignment
```

### 2. Install Dependencies

Make sure you have **Node.js ≥ 16** installed. Then run:

```bash
npm install
# or
yarn
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Your app will be running at [http://localhost:5173](http://localhost:5173)

---

## Build for Production

```bash
npm run build
# or
yarn build
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

---

## Environment Variables

Vite exposes environment variables that start with the `VITE_` prefix to your code.

### Steps to Add Environment Variables:

1. Create a `.env` file at the root of your project.
2. Add variables prefixed with `VITE_`:

```
VITE_RAPID_API_KEY='02e70e9bc9msh7b5ee0c64803eafp1659f0jsn8c9f598f0f4f'
```

3. Use them in your code like this:

```js
const apiUrl = import.meta.env.VITE_RAPID_API_KEY
console.log(apiUrl)
```

> ⚠️ Variables without the `VITE_` prefix will **not be available** in the client-side code.

---

## 📁 Project Structure

```
├── public/               # Static assets
├── src/                  # React source code
│   ├── components/       # Reusable components
│   ├── hooks/            # Reusable Hooks
│   ├── icons/            # Reusable icons (SVGs as React components)
│   ├── reducers/         # Reducers for managing many states (in this case for handling error,
                            loading and data)
│   ├── utils/            # Reusable Utils for utility JS functions
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── .env                  # Environment variables (not committed)
├── index.html            # HTML entry
├── vite.config.js        # Vite configuration
├── package.json
└── README.md
```

---

## 🛠️ Useful Scripts

| Script        | Description      |
| ------------- | ---------------- |
| `npm run dev` | Start dev server |

---

## 💡 Tips

- Restart the dev server after editing `.env` files.

---

## Thought process around component/hook structure

I have tried to create reusable components as much as possible and separated points of failures. I have used recursion in creating the `Posts` component because it will reuse the same component again to show a reposted post. I have divided this whole UI into smaller components so it becomes easy for any fellow collaborator to understand and contribute effectively. For example I have created a separate file for `Reactions` component because it is complex to handle all that reactions together if it were in a major file where all other component's code is written.

I have created the `useFetchPosts` hook to handle API call and all its states like error, loading and data. Its is using `useReducer` because it had to handle 3 states at once and it would have become complex if I used 3 `useState` hooks instead of `useReducer` hook. I have also used `useEffect` hook for make a `POST` request to the API.

## 📜 License

[MIT](LICENSE)
