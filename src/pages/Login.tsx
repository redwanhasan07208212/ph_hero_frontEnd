/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import "../styles/loginStyle.css";
import { toast } from "sonner";

export default function Login() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const disPatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      disPatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged In", { id: toastId, duration: 2000 });
      navigate(`/${user?.role}/dashboard`);
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <div className="formHandle">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <div>
            <label className="label" htmlFor="id">
              ID:
            </label>
            <input className="input" type="text" id="id" {...register("id")} />
          </div>
          <div>
            <label className="label" htmlFor="password">
              Password:{" "}
            </label>
            <input
              className="input"
              type="password"
              id="password"
              {...register("password")}
            />
          </div>
          <Button htmlType="submit" className="button">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
