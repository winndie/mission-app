import React, { useEffect } from 'react'
import '../index.css'
import { RootState,useAppDispatch } from "../state"
import { useSelector } from "react-redux"
import { fetchAllMissions } from '../services'

const Header:React.FC=()=>{
  const dispatch = useAppDispatch()
  const picture = useSelector((state:RootState) => state.picture.item)

  useEffect(()=>{
    dispatch(fetchAllMissions())
  },[dispatch])

  return (
    <div data-testid='header' className='mx-auto p-3'>
          <img src={picture} alt={''} height={128} />
    </div>          
  )
}

export default Header