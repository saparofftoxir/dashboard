import { Route, Routes } from "react-router-dom"
import Register from "../components/pages/Register/Register"
import Home from "../components/pages/Home/Home"
import About from "../components/About/About"
import Login from "../components/Login/Login"
import { useEffect, useReducer } from "react"
import { initialStateUser, userReduser } from "./redusers/UserRedusers"
import { StateContext } from "./context/Context"
import { basketReducer, initialStateCard } from "./redusers/basketReducer"
import Basket from "../components/basket/basket"
import Products from "../components/Products/Products"
import Detail from "../components/pages/detail/Detail"
import Users from "../components/Users/Users"
import Recipe from "../components/Recipe/Recipe"
import AllUsers from "../components/Users/AllUsers"
import EditPages from "../components/EditPages/EditPages"
import Admin from "../components/Admin/Admin"
import Cars from "../components/Cars/Cars"
import EditCar from "../components/Cars/EditCar"
import Navbar from "../components/Navbar/Navbar"
import Profile from "../components/Profie/Profile"
import ProtectedRoute from "./route/ProtectedRoute"

function App() {
  const [userState, userDispatch] = useReducer(userReduser, initialStateUser)
  const [basketState, basketDispatch] = useReducer(basketReducer, initialStateCard)
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(userState.users))
    localStorage.setItem('currentUser', JSON.stringify(userState.currentUser))
  }, [userState.users, userState.currentUser]);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basketState.basket))
  }, [basketState])
  return (
    <StateContext.Provider value={{ userState, userDispatch, basketState, basketDispatch }} >
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute  currentUser={currentUser}/>}>

        <Route path="/" element={<Home />} /> 
        </Route>
        <Route path="/basket" element={<Basket />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/users" element={<Users />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="edit/:id" element={<EditPages />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="editcar/:id" element={<EditCar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </StateContext.Provider> 
  )
}

export default App;
