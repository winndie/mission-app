import { IErrors, IRegex, InputProps } from "../types"

export const inputTextError:IErrors = {
    'underflow' : 'Input must be longer than',
    'overflow' : 'Input must be shorter than'    
}

export const regex:IRegex = {
    'email':{regex:new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),error:'Invalid email.'},
}

export function validateString(value:any, rule:InputProps):string|undefined{

    if(typeof value !== 'string' || value.length < rule.minLength)
    {
        return `${inputTextError.underflow} ${rule.minLength}.`
    }
    else if(value.length > rule.maxLength)
    {
        return `${inputTextError.overflow} ${rule.maxLength}.`
    }
    else if(!!rule.regex && !regex[rule.regex]?.regex.test(value))
    {
        return regex[rule.regex]?.error
    }

    return
}