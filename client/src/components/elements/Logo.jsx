const Logo = (props) => {
  const {classname} = props;
  return(
    <div className={classname}>
      <picture>
        <source srcSet="Logo.avif" type="image/avif"/>
        <source srcSet="Logo.png" type="image/png"/>
        <img src='/Logo.avif' alt="Logo Dagingue" title="Logo Dagingue" />
      </picture>
    </div>
  );
};

export default Logo;