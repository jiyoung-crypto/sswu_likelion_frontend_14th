import React from 'react'
import logo from '../../assets/img/logo.png'

const Nav = () => {
  return (
    <div className='nav_wrap'>
      <img src={logo} alt="" className="nav_logo"/>
      <div className='list'>
        <div className='brand'>브랜드 스토리</div>
        <div className='intro'>서비스 소개</div>
        <div className='media'>미디어</div>
        <div className='job'>채용</div>
      </div>
    </div>
  )
}

export default Nav
