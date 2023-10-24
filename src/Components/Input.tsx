import React from "react"
import '../index.css'
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../state"
import { updateError, updateMission } from "../state/missions"
import { IMission, InputProps } from "../types"

const Input:React.FC<{uiKey:keyof IMission,props:InputProps}> = ({uiKey,props}) => {
  
  const dispatch = useAppDispatch()
  const value = useSelector((state:RootState) => state.mission.item[uiKey])
  const error = useSelector((state:RootState) => state.mission.errors[uiKey])

  return (<>
    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
    <label>{props.label}</label>
    </div>
    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
    <input
        value={value}
        onFocus={()=>dispatch(updateError({key:uiKey, error:undefined}))}
        onChange={(e)=>dispatch(updateMission({key:uiKey, value:e.currentTarget.value}))}
        placeholder={props.placeholder}
        minLength={props.minLength}
        maxLength={props.maxLength}
        type="string" className="form-control"/>
    <small className={!!error?'form-text-error ':''+'form-text text-muted'}>{error??props.help}</small>
    </div>
    </>)
}

export default Input