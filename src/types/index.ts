export interface InputProps {
    type: 'string'|'number',
    label:string,
    minLength:number,
    maxLength:number,
    placeholder:string,
    help:string,
    regex?:string,
    error?:string,
}

export interface IMission {
    id: number,
    title: string,
    description: string,
    createdBy: string,
    modifiedBy: string|undefined,
}

export interface IMissionInputProps extends InputProps {
    key: keyof IMission,
}

export interface IMissionErrors {
    title: string,
    description: string,
}