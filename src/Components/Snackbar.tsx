import React from 'react'
import '../index.css'
import { useSelector } from 'react-redux'
import { RootState } from '../state'

const Snackbar:React.FC=()=>{
  
  const error = useSelector((state:RootState) => state.mission.editing)

  return (
    <div className={(error?'bg-danger':'bg-info') + ' sticky-top text-white text-center mx-auto'}>
          {error?error:'Have fun on Mars!'}
    </div>          
  )
}

export default Snackbar