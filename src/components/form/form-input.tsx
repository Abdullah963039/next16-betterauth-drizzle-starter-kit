import { Input } from '../ui/input'
import { PasswordInput } from '../ui/password-input'
import { FormBase, FormControlFunc } from './base'

type InputTypeProp =
  | 'number'
  | 'text'
  | 'search'
  | 'reset'
  | 'button'
  | 'time'
  | 'image'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'month'
  | 'password'
  | 'radio'
  | 'range'
  | 'submit'
  | 'tel'
  | 'url'
  | 'week'

export const FormInput: FormControlFunc<{ type?: InputTypeProp }> = ({
  type = 'text',
  ...props
}) => {
  return (
    <FormBase {...props}>
      {(field) => <Input type={type} {...field} />}
    </FormBase>
  )
}

export const FormInputPassword: FormControlFunc = (props) => {
  return (
    <FormBase {...props}>{(field) => <PasswordInput {...field} />}</FormBase>
  )
}
