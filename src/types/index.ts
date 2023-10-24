export interface InputProps {
    type: 'string'|'number',
    label:string,
    minLength:number,
    maxLength:number,
    placeholder:string,
    help:string,
    regex?:string,
}

export interface IErrors {
    [key:string]: string|undefined,
}

export interface IRegex {
    [key:string]: {regex:RegExp,error:string},
}

export interface IMission {
    id: number,
    title: string,
    description: string,
    createdBy: string,
    modifiedBy: string|undefined,
}

export type IMissionInputProps<InputProps> = {
    [key in keyof IMission]:InputProps|undefined
}
