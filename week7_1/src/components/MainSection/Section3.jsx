import React from 'react'
import img1 from '../../assets/img/img1.png'
import img2 from '../../assets/img/img2.png'
import img3 from '../../assets/img/img3.png'

const Section3 = () => {
  return (
    <div className="section3">
      <div className="row">
        <div className="img1">
          <img src={img1} alt="" className='img1' />
        </div>
        <div className="vision1">
          <p>VISION</p>
          <h1>IT 교육 기회를 제공하여<br />꿈꾸던 가능성을 열어준다.</h1>
          <h5>Open up the possibility of dreaming by providing<br />IT education opportunities.</h5>
        </div>
      </div>

      <div className="row">
        <div className="vision2">
          <p>VISION</p>
          <h1>IT 기술로 IT 교육의 문제를<br />해결한다.</h1>
          <h5>Solve IT education problems using IT<br />technology.</h5>
        </div>
        <div className="img2">
          <img src={img2} alt="" className='img2' />
        </div>
      </div>

      <div className="row">
        <div className="img3">
          <img src={img3} alt="" className='img3' />
        </div>
        <div className="vision3">
          <p>VISION</p>
          <h1>지속 성장이 가능한 IT<br />커뮤니티를 구축한다.</h1>
          <h5>Establish an IT community that can sustain<br />growth.</h5>
        </div>
      </div>
    </div>
  )
}

export default Section3
