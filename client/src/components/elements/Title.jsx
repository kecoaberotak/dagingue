const Title = (props) => {
  const {classname, title, subTitle} = props;
  return(
    <section className={classname}>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </section>
  );
};

export default Title;