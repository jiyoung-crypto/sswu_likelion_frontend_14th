import React, { useState } from 'react'
import '../assets/sass/nav.scss'
import fila_logo from '../assets/img/fila_logo.png'
import Nav_1 from '../assets/img/Nav_1.png'
import Nav_2 from '../assets/img/Nav_2.png'
import Nav_3 from '../assets/img/Nav_3.png'
import Nav_4 from '../assets/img/Nav_4.png'
import Nav_5 from '../assets/img/Nav_5.png'
import nav1 from '../assets/img/nav1.png'
import nav2 from '../assets/img/nav2.png'
import nav3 from '../assets/img/nav3.png'
import nav4 from '../assets/img/nav4.png'

const Nav = () => {
  const [index, setIndex] = useState(0);
  const slides = [Nav_1, Nav_2, Nav_3, Nav_4, Nav_5];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev + 1));
  }

  const handleNext = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }


  return (
    <div className='nav_wrap'>
      <div className='bg_slider'>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide_item ${i === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>

      <header className='gnb_bar'>
        <div className='logo_box'>
          <img src={fila_logo} alt="FILA 로고" className="nav_logo" />
        </div>

        <div className='menu_list'>
          <div>WOMEN</div>
          <div>MEN</div>
          <div>KIDS</div>
          <div>|</div>
          <div>TENNIS</div>
          <div>BRAND</div>
        </div>

        <div className='icon_list'>
          <img src={nav1} alt="" className="icon_item" />
          <img src={nav2} alt="" className="icon_item" />
          <img src={nav3} alt="" className="icon_item" />
          <img src={nav4} alt="" className="icon_item" />
        </div>
      </header>

      <div className='bottom_content'>
        <h1>24 NEW 인터런</h1>
        <button>자세히 보기</button>
      </div>

      <div className='control_box'>
        <div className='indicator_track'>
          <div className='indicator_bar' style={{ width: `${(index + 1) * 20}%` }} />
        </div>

        <div className='btn_group'>
          <button className='arrow_btn prev' onClick={handlePrev}>&lt;</button>
          <button className='arrow_btn next' onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  )
}


export default Nav
