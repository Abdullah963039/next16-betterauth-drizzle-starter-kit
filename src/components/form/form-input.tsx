import { Input } from "../ui/input";
import { PasswordInput } from "../ui/password-input";
import { FormBase, FormControlFunc } from "./base";

type InputTypeProp =
  | "number"
  | "text"
  | "search"
  | "reset"
  | "button"
  | "time"
  | "image"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "month"
  | "password"
  | "radio"
  | "range"
  | "submit"
  | "tel"
  | "url"
  | "week";

export const FormInput: FormControlFunc<{ type?: InputTypeProp }> = ({
  type = "text",
  disabled,
  ...props
}) => {
  return (
    <FormBase {...props}>
      {(field) => <Input type={type} disabled={disabled} {...field} />}
    </FormBase>
  );
};

export const FormInputPassword: FormControlFunc = ({ disabled, ...props }) => {
  return (
    <FormBase {...props}>
      {(field) => <PasswordInput disabled={disabled} {...field} />}
    </FormBase>
  );
};
