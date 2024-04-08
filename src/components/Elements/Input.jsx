import propTypes from "prop-types";
import TextField from '@mui/material/TextField';

const Input = ({
  type = "text",
  id,
  name,
  placeholder = "",
  onChange,
  className,
}) => {
  if (type === "textarea") {
    return (
      <textarea
        onChange={onChange}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full ring-1 p-2 ring-slate-400 focus:ring-sky-500 outline-none rounded-md ${className}`}
      />
    );
  }

  return (
    <TextField 
    id={id}
    type={type} 
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    label={placeholder} 
    variant="outlined" />
  );
};

Input.propTypes = {
  type: propTypes.string,
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  className: propTypes.string,
};

export default Input;
