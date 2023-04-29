import { Link } from "react-router-dom"
import "./footer.scss"



const Footer = () => {

  
  return (
    <>
      <div className="footer">
        <div className="footer__nav">
          <Link href="/" className="footer__link">YogaKita</Link>
          <Link  href="/" className="footer__link">YogaKitLink  , 2022 © All Rights Reserved</Link>
          <Link  href="/" className="footer__link">Design By Isroo.dev</Link>
        </div>
      </div>
    </>
  )
}

export default Footer
