const Socmed = (props) => {
  const {classname} = props
  return(
    <ul className={classname}>
      <li><a href="https://www.instagram.com/dagingue.bogor/?hl=id" target="_blank" rel="noreferrer"><img src="./icons/instagram.svg" alt="instagram" /></a></li>
      <li><a href="https://wa.me/+6287881741174" target="_blank" rel="noreferrer"><img src="./icons/whatsapp.svg" alt="whatsapp" /></a></li>
      <li><a href="https://shopee.co.id/destyapriyani" target="_blank" rel="noreferrer"><img src="./icons/shopee.svg" alt="shopee" /></a></li>
    </ul>
  );
};

export default Socmed;