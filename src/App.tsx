import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { HomePage } from './pages/HomePage'
import { OverviewPage } from './pages/OverviewPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <HomePage />
            }
          />
          <Route
            path='/overview'
            element={
              <OverviewPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
