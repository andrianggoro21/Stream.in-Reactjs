# Stream.in (React Movie Database App)

Stream.in project create by using [ReactJS](https://reactjs.org/), [Vite](https://vitejs.dev/), [Bootstrap](https://getbootstrap.com/), and [TMDBAPI](https://www.themoviedb.org/).

## Features of this App

- Login Page
- Home Page
- Watch List Page
- Watch Movie Page
- Movie Card View
- Detail of Movie

## Libraries and Tools
This project uses several libraries consisting of:

### Axios
- Type `npm install axios` on your terminal to installing axios.
- Once the package installed, you can import the library using: 
```js
import axios from 'axios';
```

### Formik and Yup
- Type `npm install formik yup` on your terminal.
- Once the package installed, you can import the library using: 
```js
import { useFormik } from 'formik';
import * as Yup from 'yup';
```

### Get Bootstrap
- Import library using CDN in the `index.html` file in the repository:
```html
<head>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
        crossorigin="anonymous"
    />
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous">
    </script>
</head>
```

### React Router
- Type `npm install react-router-dom` on your terminal.
- Once the package installed, you can import library in the `main.jsx` file:
```js
import ReactDOM from "react-dom/client";
```

## Getting Started

- In the directiory, type `npm install` on your terminal to adding node module.
- You can type `npm run dev` to run the app.
- The app will be running on [http://localhost:5173](http://localhost:5173).
