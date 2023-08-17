import React from 'react'
import '../index.css'
import { useSelector } from 'react-redux'
import { RootState } from '../state'

const Snackbar:React.FC=()=>{
  
  const info = useSelector((state:RootState) => state.mission.info)

  return (
    <div className={(info?'bg-info text-white':'bg-light') + ' sticky-top text-center mx-auto'}>
          {info?info:'Have fun on Mars!'}
    </div>          
  )
}

export default Snackbar