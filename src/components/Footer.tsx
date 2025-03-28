import '../styles.css';

export const Footer = () => {
    const currentYear: number = new Date().getFullYear();
  return (
    <footer className='footer'>
        <p className='footer-text'>
            {currentYear} Moviedux, All rights reserved.
        </p>
    </footer>
  )
}
