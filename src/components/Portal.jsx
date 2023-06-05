import React from 'react'
import {dataEnviroment} from '../data/enviroment'
import { SectionEnviroment } from './SectionEnviroment'

export const Portal = () => {
  // dataEnviroment.map(e=> console.log(e.enviroment))
  return(
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {dataEnviroment.map((e,idx)=>{
        return <SectionEnviroment key={idx} env={e}/>
      })}
    </div>
  )

}
