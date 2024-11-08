
import Home from './components/Home'
import Login from './components/Login'
import MainLayout from './components/MainLayout'
import Signup from './components/Signup'
import Profile from './components/Profile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EditProfile from './components/EditProfile'




const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile/:id',
        element: <Profile />
      },
      {
        path: '/account/edit',
        element: <EditProfile />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
])

function App() {


  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
