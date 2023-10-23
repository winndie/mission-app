import { InputProps } from "../types"

export const InputTextUnderflow = 'Input must be longer than'
export const InputTextOverflow = 'Input must be shorter than'

export const regex = new Map<string,{regex:RegExp,error:string}>([
    ['EMAIL',{regex:new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),error:'Invalid email.'}],
])

export function validateString(value:any, rule:InputProps):string|undefined{

    if(typeof value !== 'string' || value.length < rule.minLength)
    {
        return `${InputTextUnderflow} ${rule.minLength}.`
    }
    else if(value.length > rule.maxLength)
    {
        return `${InputTextOverflow} ${rule.maxLength}.`
    }
    else if(!!rule.regex && !regex.get(rule.regex)?.regex.test(value))
    {
        return regex.get(rule.regex)?.error
    }

    return
}