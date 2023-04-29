import "./about.scss"
import time from './time.svg'
import infin from './infin.svg'
import world from './world.svg'

const About = () => {
  return (
    <>
      {/* <div className="container"> */}
        <div className="about">
          <div className="about__text">
            <h1 className="about__title">Why Chose YogaKita?</h1>
            <h2 className="about__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </h2>
          </div>
          <div className="about__items">
            <div className="about__item">
              <img src={time} alt="/" />
              <div className="about__item-title">Lifetime</div>
              <div className="about__item-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="about__item">
              <img src={world} alt="/" />
              <div className="about__item-title">Anywhere</div>
              <div className="about__item-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="about__item">
              <img src={infin} alt="/" />
              <div className="about__item-title">Unlimited</div>
              <div className="about__item-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default About
