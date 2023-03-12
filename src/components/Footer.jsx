const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ textAlign: 'center' }}>
      <p>Copyrights reserved. &copy;{currentYear} Designed & Developed by Rahul Bohara</p>
      <p>Powered by {''}
        <a href="https://www.imdb.com/" target="_blank" rel="noreferrer">IMDB</a>
        {''} movie api
      </p>
    </footer>
  )
};

export default Footer;