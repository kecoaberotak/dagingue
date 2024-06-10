import "../../index.css";

const Button = (props) => {
  const { children, onClick, classname, type = "submit" } = props;
  return (
    <button type={type} className={`button ${classname}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
