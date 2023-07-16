import { RouterProvider } from 'react-router-dom'
import mainRoutes from './routes/MainRoutes'

function App() {
  return (
    <RouterProvider router={mainRoutes} />
  )
}

export default App
