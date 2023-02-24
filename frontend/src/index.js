import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {  JournalProvider } from './Hook/JournalContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewJournal from './Pages/NewJournal';
import UpdateJournal from './Pages/UpdateJournal';
import Journal from './Pages/Journal';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },{
    path:'/newjournal',
    element: <NewJournal />
  },{
    path:'/journal/:id',
    element: <UpdateJournal />
  },{
    path:"/get/:id",
    element:<Journal />
    
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<JournalProvider>
<React.StrictMode>
    <RouterProvider router={router}>
    <App/>
    </RouterProvider>
  </React.StrictMode>
  </JournalProvider>
);

