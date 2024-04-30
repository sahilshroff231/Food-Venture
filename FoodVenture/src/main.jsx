import React, {lazy} from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';
import Restrolist from './components/Restrolist';
import Restorent from './components/Restorent';
import Catagory from './components/Catagory';
import Product from './components/Product';
import AddTOCard from './components/AddTOCard';
import Order from './components/Order';
import Admin from './components/Admin/Admin';
import Adminhome from './components/Admin/Adminhome';
import FinalOrder from './components/FinalOrder';
import AddRestaurents from './components/AddRestaurents';
import Admininfoedit from './components/Admin/Admininfoedit';
import Productdetails from './components/Admin/Productdetails';
import Restaurenthome from './components/restaurents/Restaurenthome';
import Layout from './Layout';
import { AppProvider } from './context/ContextApi.jsx';
import Restroinfoedit from './components/restaurents/Restroinfoedit.jsx';
import Resdetails from './components/restaurents/Restaurendetails.jsx';
import Vegcatagory from './components/Vegcatagory.jsx';
import Chinesecatagory from './components/Chinisecatagory.jsx';
const VegProduct  = lazy(() => import ('./components/Vegproduct.jsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="/" element={
        <>
          <Home />
          <Restrolist />
        </>} />
      <Route path="/food/restraurent" element={<Restorent />} />
      <Route path="/food/catagory/:rid" element={<Catagory />} />
      <Route path="/food/product/:rid/:cid" element={<Product />} />
      <Route path="/food/vegproduct/:rid/:cid" element={<VegProduct />} />
      <Route path="/food/addtocart/:rid/:cid/:id" element={<AddTOCard />} />
      <Route path="/food/address/:rid/:cid/:id/:cartid" element={<Order />} />
      <Route path="/food/admin" element={<Admin />} />
      <Route path="/food/restrohome" element={<Restaurenthome />} />
      <Route path="/food/adminhome" element={<Adminhome />} />
      <Route path="/food/order/:rid/:cid/:id/:cartid/:orderid" element={<FinalOrder />} />
      <Route path="/food/addrestaurents" element={<AddRestaurents />} />
      <Route path="/food/edit/:pdid" element={<Admininfoedit />} />
      <Route path="/res/edit/:id" element={<Restroinfoedit />} />
      <Route path="/food/details/:pdid" element={<Productdetails />} />
      <Route path="/res/details/:rid" element={<Resdetails />} />
    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
