import React from 'react'
import banner1 from '../../assets/img/banner1.png'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3.png'
import banner4 from '../../assets/img/banner4.png'


const Section1 = () => {
  return (
    <section className='section1'>
      <div className="row">
        <h1>POSSIBILITY</h1>
        <div className="banner1">
          <img src={banner1} alt="" className='banner1' />
        </div>
      </div>

      <div className="row">
        <div className="banner2">
          <img src={banner2} alt="" className='banner2' />
        </div>
        <h1>TO</h1>
        <div className="banner3">
          <img src={banner3} alt="" className='banner3' />
        </div>
      </div>

      <div className="row">
        <h1>REALITY</h1>
        <div className="banner4">
          <img src={banner4} alt="" className='banner4' />
        </div>
      </div>
    </section>
  )
}
export default Section1
