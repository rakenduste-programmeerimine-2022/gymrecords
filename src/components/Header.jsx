import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
        <div>
            <Link to='/'>Gymrecords</Link>
        </div>
        <ul>
            {user ? (
            <li>
                <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
                </button>
                </li>) : (<>
                    <li>
                        <Link to='/login'>
                            <FaSignInAlt /> Log in
                        </Link>
                    </li>
                <li>
                    <Link to='/register'>
                        <FaUser /> Sign up
                    </Link>
                </li>
            </>)}
        </ul>
    </header>
  )
}

export default Header