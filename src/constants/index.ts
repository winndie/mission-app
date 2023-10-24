import { IMissionInputProps, IRegex, InputProps } from "../types"

export const regex:IRegex = {
    'email':{regex:new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),error:'Invalid email.'},
}

export const missionInputProps:IMissionInputProps<InputProps> = {
    title:{
        type: 'string',
        label:'Title',
        minLength:5,
        maxLength:20,
        placeholder:'Title of the mission',
        help:'What is the mission?',
        regex:undefined,
    },
    description:{
        type: 'string',
        label:'Description',
        minLength:10,
        maxLength:50,
        placeholder:'Description of the mission',
        help:'Describe the mission here',
        regex:'email',
    },
}