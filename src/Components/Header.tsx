import React, { useEffect } from 'react'
import '../index.css'
import { RootState,useAppDispatch } from "../state"
import { useSelector } from "react-redux"
import { fetchAllMissions } from '../api'

const Header:React.FC=()=>{
  const dispatch = useAppDispatch()
  const picture = useSelector((state:RootState) => state.picture.item)

  useEffect(()=>{
    dispatch(fetchAllMissions())
  },[dispatch])

  return (
    <div className='mx-auto'>
          <img src={picture} alt={''}/>
    </div>          
  )
}

export default Header