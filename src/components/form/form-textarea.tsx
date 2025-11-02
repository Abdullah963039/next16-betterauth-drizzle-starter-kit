import { Textarea } from '../ui/textarea'
import { FormBase, FormControlFunc } from './base'

export const FormTextarea: FormControlFunc = (props) => {
  return <FormBase {...props}>{(field) => <Textarea {...field} />}</FormBase>
}
