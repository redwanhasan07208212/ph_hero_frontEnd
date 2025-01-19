import { Controller } from "react-hook-form";
import "../../styles/loginStyle.css";
import { Input } from "antd";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};
export default function PhInput({ type, name, label }: TInputProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
}
