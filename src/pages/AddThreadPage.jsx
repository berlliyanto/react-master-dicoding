import { Fragment, useState, useEffect } from "react";
import ContentLayout from "../components/Layouts/ContentLayout";
import BottomNavigationBar from "../components/Fragments/BottomNavigationBar";
import Text from "../components/Elements/Text";
import Input from "../components/Elements/Input";
import Button from "../components/Elements/Button";
import Gap from "../components/Elements/Gap";
import { useDispatch, useSelector } from "react-redux";
import { postThread } from "../actions/threadAction";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddThreadPage = () => {
  const [postData, setPostData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth) {
      toast.error("Anda harus login terlebih dahulu");
      navigate("/login", { replace: true });
    }
  }, [auth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      postData.title == null ||
      postData.category == null ||
      postData.body == null
    ) {
      toast.error("Data tidak boleh kosong");
      return;
    }

    dispatch(postThread(postData));
  };

  return (
    <Fragment>
      <ContentLayout>
        <Text
          text="Buat Diskusi Baru"
          fontSize={"24px"}
          className={"font-bold"}
        />
        <Gap height={20} />
        <form
          className="flex flex-col gap-2 w-full"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            name="title"
            id="title"
            placeholder="Input Judul"
            onChange={(e) => {
              setPostData({ ...postData, title: e.target.value });
            }}
          />
          <Input
            name="category"
            id="category"
            placeholder="Input Kategori"
            onChange={(e) => {
              setPostData({ ...postData, category: e.target.value });
            }}
          />
          <Input
            name="body"
            id="body"
            placeholder="Input Kategori"
            type="textarea"
            onChange={(e) => {
              setPostData({ ...postData, body: e.target.value });
            }}
          />
          <Button text="Submit" />
        </form>
      </ContentLayout>
      <BottomNavigationBar />
    </Fragment>
  );
};

export default AddThreadPage;
