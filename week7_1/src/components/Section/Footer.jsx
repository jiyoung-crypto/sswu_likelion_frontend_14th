import React from 'react'
import { FaInstagram, FaYoutube, FaTwitter, FaDownload, FaRegPaperPlane,FaRegEnvelope } from 'react-icons/fa'
import logo_bot from '../../assets/img/logo_bot.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="company">
          <div className="logo_bot">
            <img src={logo_bot} alt="" className='logo_bot' />
          </div>
          <p>㈜멋쟁이사자처럼 | 대표이사 나성영</p>
          <p>서울특별시 종로구 종로3길 17 마제, 16-17층</p>
          <p>사업자 번호 : 264-88-01106</p>
          <p>통신판매업 신고번호 : 2022-서울종로-1534</p>
          <p><FaRegEnvelope/>문의처 contact@likelion.net</p>
        </div>
        <div className="brands">
          <h5>FAMILY BRAND</h5>
          <ul>
            <li>TECHIT</li>
            <li>SYLTARE</li>
            <li>MODERN LION</li>
            <li>QUADHASH</li>
          </ul>
        </div>
        <div className="policies">
          <h5>POLICY</h5>
          <ul>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>Nonprofit Report <FaDownload /> </li>
            <li>국민권익위원회 <FaRegPaperPlane /></li>
          </ul>
        </div>
        <div className="resource">
          <h5>RESOURCE</h5>
          <ul>
            <li>로그 가인드라인 <FaDownload /></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="socials">
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
          
        </div>
      </div>
    </footer>
  )
}

export default Footer