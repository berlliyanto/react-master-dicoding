import Input from "../Elements/Input";
import Button from "../Elements/Button";
import propTypes from "prop-types";

const CommentForm = ({ onSubmit }) => {
  return (
    <form className="w-full flex flex-col gap-3" onSubmit={(e) => onSubmit(e)}>
      <Input
        id="comment"
        name="comment"
        onChange={(e) => {}}
        type="textarea"
        placeholder="Comment"
        className={"w-full h-32"}
      />
      <Button text="Kirim" />
    </form>
  );
};

CommentForm.propTypes = {
  onSubmit: propTypes.func,
};

export default CommentForm;
