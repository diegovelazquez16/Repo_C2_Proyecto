<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Templates/Home.jsx';
import Vista from './components/Templates/Vista.jsx';

const router = createBrowserRouter([
  {//APP
    path:'/',
    element: <App/>,
  },
  { //HOME
    path:'/home',
    element: <Home/>
  },
  {
    path:'/view',
    element: <Vista/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> origin/main
