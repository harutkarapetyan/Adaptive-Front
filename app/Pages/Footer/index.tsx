import { AiFillGithub,AiOutlineLinkedin,AiOutlineYoutube,AiOutlineInstagram } from "react-icons/ai"; 
import { FaTiktok } from "react-icons/fa"; 
import { CgFacebook } from "react-icons/cg"; 
import React from 'react'
import './style.scss'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_icons">
            <a href="https://www.facebook.com/harut.karapetyan.1612?rdid=oiTw6uysNmZSSjGF#"target="blank"><CgFacebook/></a>
            <a href="https://www.instagram.com/harut._.k/"target="blank"><AiOutlineInstagram/></a>
            <a href="https://www.tiktok.com/@tuyn_ej001?_t=ZS-8uEjovPZhXJ&_r=1"target="blank"><FaTiktok/></a>
            <a href=" https://www.linkedin.com/in/harut-karapetyan/" target="blank"><AiOutlineLinkedin/></a>
            <a href=" https://www.youtube.com/@HarutKarapetyan-f4o"target="blank"><AiOutlineYoutube/></a>
            <a href="https://github.com/harutkarapetyan" target="blank"><AiFillGithub/></a>
        </div>
    </div>
  )
}
export default Footer
