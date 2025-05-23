import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import Dashboard from './assets/pages/Dashboard'
import Events from './assets/pages/Events'
import Bookings from './assets/pages/Bookings'
import Login from './assets/pages/Login'
import Signup from './assets/pages/SignUp'

function App() {

  return (
      <Routes>
        <Route path='/' element={<CenterLayout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path='dashboard' element={<Login />} />
          <Route path='settings' element={<Signup />} />
        </Route>
        <Route path='/portal' element={<PortalLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='bookings' element={<Bookings />} />
          <Route path='events' element={<Events />} />
        </Route>
    </Routes>
  )
}

export default App
