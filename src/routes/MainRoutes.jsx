import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Character from '../pages/Character'

const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
      },
    {
        path: "character/:id",
        element: <Character />
      },
])

export default mainRoutes