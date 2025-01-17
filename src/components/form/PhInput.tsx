import { useFormContext } from "react-hook-form";
import "../../styles/loginStyle.css";
export default function PhInput({ type, name, label }) {
  const { register } = useFormContext();
  return (
    <div>
      {label ? label : null}
      <input type={type} id={name} {...register(name)} />
    </div>
  );
}
