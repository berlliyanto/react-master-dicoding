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
import { authLogin } from "../actions/authAction";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginData.email == null || loginData.password == null) {
      toast.error("Data tidak boleh kosong");
      return;
    }

    console.log(loginData);

    dispatch(authLogin({ loginData, navigate }));
  };

  return (
    <Fragment>
      <ContentLayout>
        <Text text={"Login"} className={"font-bold"} fontSize={"18px"} />
        <Gap height={10} />
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3">
          <Input
            id={"email"}
            name={"email"}
            placeholder={"Input Email"}
            type="Email"
            onChange={(e) => {
              setLoginData({ ...loginData, email: e.target.value });
            }}
          />
          <Input
            id={"password"}
            name={"password"}
            placeholder={"Input Password"}
            type="password"
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value });
            }}
          />
          <Button text={"Login"} />
        </form>
        <Gap height={10} />
        <p className="text-slate-800 font-sans text-[14px]">
          Belum punya akun ?{" "}
          <Link to={"/register"} className="font-bold">
            Register
          </Link>
        </p>
      </ContentLayout>
      <BottomNavigationBar />
    </Fragment>
  );
};

export default LoginPage;
