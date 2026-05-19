import React from 'react'
import img4 from '../../assets/img/img4.png'
import img5 from '../../assets/img/img5.png'
import img6 from '../../assets/img/img6.png'
import img7 from '../../assets/img/img7.png'

const Section5 = () => {
  return (
    <div className="section5">
      <div className="media">
        <p>LIKELION MEDIA</p>
      </div>

      <div className="likelion">
        <h1>언론 속의 LIKELION</h1>
      </div>


      <div className="boxs">
        <div className="box">
          <div className="img4">
            <img src={img4} alt="" className='img4' />
          </div>
          <div className="news">
            <h5 className="title">“비즈니스 문제 해커톤으로 해<br />결…멋쟁이사자처럼, 기업 해커톤<br />출시</h5>
            <p className='content'>정보기술(IT) 교육 기업 멋쟁이사자처<br />럼(멋사)은 31일부터 해커톤 참가자들<br />을 통해 기업이 가진 비즈니스 문제를...</p>
          </div>
          <hr />
          <p className='date'>머니S | 2023.10.31</p>
        </div>

        <div className="box">
          <div className="img5">
            <img src={img5} alt="" className='img5' />
          </div>
          <div className="news">
            <h5 className="title">P2E ‘실타래‘, 편의성 강화해 진입<br />장벽 낮춘다</h5>
            <p className='content'>멋쟁이사자처럼은 메타콩즈뿐 아니라<br />여러 갈래의 대체불가토큰(NFT) 사업<br />을 펼쳤다. 멋쟁이사자처럼 산하 블록...</p>
          </div>
          <hr />
          <p className='date'>더별 | 2023.01.27</p>
        </div>

        <div className="box">
          <div className="img6">
            <img src={img6} alt="" className='img6' />
          </div>
          <div className="news">
            <h5 className="title">콘크릿, 글로벌 아티스트 톰 삭스와<br />이태원 전역에서 보물찾기 진행</h5>
            <p className='content'>현대카드와 멋쟁이사자처럼의 합작법<br />인 모던라이언이 운영하는 NFT 마켓플<br />레이스 ‘KONKRIT(이하 콘크릿)’이...</p>
          </div>
          <hr />
          <p className='date'>경향게임스 | 2023.09.13</p>
        </div>

        <div className="box">
          <div className="img7">
            <img src={img7} alt="" className='img7' />
          </div>
          <div className="news">
            <h5 className="title">멋쟁이사자처럼, 아트 NFT·실물<br />연계 ‘쿼드해시‘ 프로젝트 띄운다</h5>
            <p className='content'>멋쟁이사자처럼이 아트NFT와 실물을<br />연계한 대체불가토큰(NFT) 프로젝트<br />쿼드해시를 추진한다.</p>
          </div>
          <hr />
          <p className='date'>디지털투데이 | 2023.09.27</p>
        </div>
      </div>
    </div>
  )
}

export default Section5
