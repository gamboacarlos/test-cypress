import React from 'react'
import logo from "../../assets/RickAndMorty.svg"
import { navBarWrapper } from "./styles.module.scss"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className={navBarWrapper}>
        <img src={logo} alt="logo" onClick={() => navigate("/") } />
    </div>
  )
}

export default Header