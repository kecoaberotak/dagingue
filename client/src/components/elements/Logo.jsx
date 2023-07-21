const Logo = (props) => {
  const {classname, image} = props;
  return(
    <div className={classname}>
      <img src={image} alt="Logo Dagingue" />
    </div>
  );
};

export default Logo;