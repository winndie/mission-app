import { regex } from "../constants"
import { IErrors, InputProps } from "../types"

export const inputTextError:IErrors = {
    'underflow' : 'Input must be longer than',
    'overflow' : 'Input must be shorter than'
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