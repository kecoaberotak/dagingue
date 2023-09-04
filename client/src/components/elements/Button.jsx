// import '../../assets/components/button.css'
import '../../index.css'

const Button = (props) => {
  const {children, onClick, classname} = props;
  return(
    <button className={`button ${classname}`} onClick={onClick}>{children}</button>
  );
};

export default Button;