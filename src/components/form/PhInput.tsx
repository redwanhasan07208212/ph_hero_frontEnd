import { Controller } from "react-hook-form";
import "../../styles/loginStyle.css";
import { Form, Input } from "antd";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};
export default function PhInput({ type, name, label }: TInputProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} size="large" />
          </Form.Item>
        )}
      />
    </div>
  );
}
