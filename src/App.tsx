import './App.css'
import AppRoutes from './routes/routes'
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
            <AppRoutes />
      </Router>
    </>
  )
}


