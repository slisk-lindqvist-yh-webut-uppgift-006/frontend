import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import DashboardPage from './assets/pages/DashboardPage'
import BookingPage from './assets/pages/BookingPage'
import DashboardPage from './assets/pages/DashboardPage'
import LoginPage from './assets/pages/LoginPage'
import SignUpPage from './assets/pages/SignUpPage'
import EventPage from './assets/pages/EventPage'

function App() {

  return (
      <Routes>
        <Route path='/' element={<CenterLayout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path='signin' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
        </Route>
        <Route path='/portal' element={<PortalLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path='bookings' element={<BookingPage />} />
          <Route path='events' element={<EventPage />} />
        </Route>
    </Routes>
  )
}

export default App
