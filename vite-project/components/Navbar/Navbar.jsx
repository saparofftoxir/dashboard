import { useNavigate, } from "react-router-dom"
import { useContext } from "react"
import { StateContext } from "../../src/context/Context"
import "./Navbar.css"

function Navbar() {
  const { basketState } = useContext(StateContext)
  const { userState } = useContext(StateContext)
  const navigate = useNavigate()
  const wallet = () => {
    navigate("/prayTime")

  }
  const logotip = () =>
    navigate("/")
  const basket = () => {
    navigate("/basket")
  }
  const recipe=()=> {
    navigate("/recipe")
  }
  const loginn = () => {
    navigate("/loginn")
  }
  const login = () => {
    navigate('/login')
  }
  const productsBtn = () => {
    navigate('/products')
  }
  const allUsers = () => {
    navigate('/allusers')
  }
  const admin = () => {
    navigate('/admin')
  }
  const profile=() => {
    navigate('/profile')
  }

  const purchases = () => {
    navigate("/")
  }
  const { userDispatch } = useContext(StateContext)
  const logOutBtn = () => {
    userDispatch({ type: "SET_CURRENTUSER", payload: null })
    navigate('/login')
  }
  return (
    <nav >
      <ul className='nav-links'>
        <li>
          <img onClick={logotip} className='logo' src="https://img.icons8.com/?size=80&id=lgQ5DSML4O1X&format=png" alt="" />

        </li>
        <li>
          {userState?.currentUser?.name}
        </li>
        <li>
          <div className="search">
            <input type="text" placeholder='поиск...' />
            <button>Искат</button>

          </div>
        </li>
        
        <li>
          <div className="icons">
            <img className="icon-image" onClick={allUsers} src="https://cdn-icons-png.flaticon.com/128/3114/3114957.png" alt="login" />
            <p onClick={allUsers}>Users</p>
          </div>

        </li>
        <li>
          <div className="icons">
            <img className="icon-image" onClick={admin} src="https://cdn-icons-png.flaticon.com/128/3114/3114957.png" alt="login" />
            <p onClick={admin}>Admin</p>
          </div>

        </li>
        <li>
          <p onClick={profile}>Profile</p> 
        </li>
        <li>
          <div className="icons">
            <img className="icon-image" onClick={productsBtn} src="https://cdn-icons-png.flaticon.com/128/3114/3114957.png" alt="login" />
            <p onClick={productsBtn}>Products</p>
          </div>

        </li>
        <li>
          <div className="icons">
            <img className='icon-image' onClick={wallet} src="https://cdn-icons-png.flaticon.com/128/2527/2527857.png" alt="" />
            <p onClick={wallet}>Task</p>

          </div>

        </li>
        <li>
          <div className="icons">
            <img className='icon-image' onClick={purchases} src="https://cdn-icons-png.flaticon.com/128/743/743131.png" alt="" />
            <p onClick={recipe}>Recipe</p>

          </div>

        </li>
        <li>
          <div className="icons">
            <img className='icon-image' onClick={basket} src="https://cdn-icons-png.flaticon.com/128/9315/9315963.png" alt="" />
            <p onClick={basket}>Корзина</p> <sup>{basketState?.basket?.length}</sup>

          </div>

        </li>
        
        <li>
          <div className="icons">
            <img className="icon-image" onClick={login} src="https://cdn-icons-png.flaticon.com/128/3114/3114957.png" alt="login" />
            <p onClick={login}>Авторизоваться</p>
          </div>
        </li>

        <li>
          <div className="icons">
            <img className='icon-image' onClick={logOutBtn} src="https://cdn-icons-png.flaticon.com/128/9121/9121688.png" alt="" />
            <p onClick={logOutBtn}>войти</p>

          </div>

        </li>

      </ul>
    </nav>
  )
}

export default Navbar;