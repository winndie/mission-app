import { regex } from "../errors"
import { IMissionInputProps } from "../types"

export const missionInputProps = new Map<string,IMissionInputProps>([
    ['title',{
        type: 'string',
        key:'title',
        label:'Title',
        minLength:5,
        maxLength:20,
        placeholder:'Title of the mission',
        help:'What is the mission?',
        regex:undefined,
    }],
    ['description',{
        type: 'string',
        key:'description',
        label:'Description',
        minLength:10,
        maxLength:50,
        placeholder:'Description of the mission',
        help:'Describe the mission here',
        regex:'email',
    }],
])

