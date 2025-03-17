import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SignIn from './pages/auth/SignIn';
import Registraion from './pages/auth/Registration';
import AdminDashboard from './pages/admin/dashboard/AdminDashboard';
import ClientDashboard from './pages/client/ClientDashboard';
import ComplaintManagement from './pages/admin/complaintmanagement/ComplaintManagement';
import AdminMap from './pages/admin/map/AdminMap';
import Analytics from './pages/admin/analytis/Analytics';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/registration" element={<Registraion />} />



          <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
          <Route path='/admin-complaint' element={<ComplaintManagement/>}/>
          <Route path='/admin-map' element={<AdminMap/>}/>
          <Route path='/admin-analytics' element={<Analytics/>}/>

          <Route path='/user-dashboard' element={<ClientDashboard/>}/>














        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
