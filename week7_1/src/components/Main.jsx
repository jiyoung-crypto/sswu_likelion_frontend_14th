import React from 'react'
import Section1 from './MainSection/Section1'
import Section2 from './MainSection/Section2'
import Section3 from './MainSection/Section3'
import Section4 from './MainSection/Section4'
import Section5 from './MainSection/Section5'

const Main = () => {
  return (
    <div className='main_wrap'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
    </div>
  )
}

export default Main
