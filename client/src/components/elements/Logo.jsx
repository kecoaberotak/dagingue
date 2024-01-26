const Logo = (props) => {
  const {classname} = props;
  return(
    <div className={classname}>
      <img src='/logo.avif' alt="Logo Dagingue" title="Logo Dagingue" />
    </div>
  );
};

export default Logo;