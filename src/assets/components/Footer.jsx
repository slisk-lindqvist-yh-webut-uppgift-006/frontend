import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; {new Date().getFullYear()} Peterdraw.</p>
      <p className='footer-text-links'>
        <a href="#" target='_blank'>Privacy Policy</a>
        <a href="#" target='_blank'>Terms and Conditions</a>
        <a href="#" target='_blank'>Contact</a>
      </p>
      {/* <p>Follow us on 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>.
      </p> */}
    </footer>
  )
}

export default Footer