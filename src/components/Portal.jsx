import React from 'react'
import {dataEnviroment} from '../data/enviroment'
import { SectionEnviroment } from './SectionEnviroment'

export const Portal = () => {
  dataEnviroment.map(e=> console.log(e.enviroment))
  return(
    <div className='enviroments'>
      {dataEnviroment.map(e=>{
        return <SectionEnviroment key={new Date().getMilliseconds()} env={e}/>
      })}
    </div>
  )

}
