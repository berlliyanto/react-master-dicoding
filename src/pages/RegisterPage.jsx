import { Fragment, useState } from "react";
import ContentLayout from "../components/Layouts/ContentLayout";
import BottomNavigationBar from "../components/Fragments/BottomNavigationBar";
import Text from "../components/Elements/Text";
import Gap from "../components/Elements/Gap";
import Input from "../components/Elements/Input";
import Button from "../components/Elements/Button";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authRegister } from "../actions/authAction";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      registerData.name == null ||
      registerData.email == null ||
      registerData.password == null
    ) {
      toast.error("Data tidak boleh kosong");
      return;
    }

    if (registerData.password.length < 6) {
      toast.error("Password minimal 6 karakter");
      return;
    }

    dispatch(authRegister({ registerData, navigate }));
  };

  return (
    <Fragment>
      <ContentLayout>
        <Text text={"Register"} className={"font-bold"} fontSize={"18px"} />
        <Gap height={10} />
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3">
          <Input
            id={"name"}
            name={"name"}
            placeholder={"Input Nama"}
            onChange={(e) => {
              setRegisterData({ ...registerData, name: e.target.value });
            }}
          />
          <Input
            id={"email"}
            name={"email"}
            placeholder={"Input Email"}
            type="Email"
            onChange={(e) => {
              setRegisterData({ ...registerData, email: e.target.value });
            }}
          />
          <Input
            id={"password"}
            name={"password"}
            placeholder={"Input Password"}
            type="password"
            onChange={(e) => {
              setRegisterData({ ...registerData, password: e.target.value });
            }}
          />
          <Button text={"Register"} />
        </form>
        <Gap height={10} />
        <p className="text-slate-800 font-sans text-[14px]">
          Sudah punya akun ?{" "}
          <Link to={"/login"} className="font-bold">
            Login
          </Link>
        </p>
      </ContentLayout>
      <BottomNavigationBar />
    </Fragment>
  );
};

export default RegisterPage;
