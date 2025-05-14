import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'

function App() {

  return (
      <Routes>
        <Route path='/' element={<CenterLayout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path='about' element={<h1>About</h1>} />
          <Route path='contact' element={<h1>Contact</h1>} />
        </Route>
        <Route path='/portal' element={<PortalLayout />}>
          <Route index element={<h1>Portal Home</h1>} />
          <Route path='dashboard' element={<h1>Dashboard</h1>} />
          <Route path='settings' element={<h1>Settings</h1>} />
        </Route>
    </Routes>
  )
}

export default App
