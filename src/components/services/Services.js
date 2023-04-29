import "./service.scss"
import img1 from "./servyoga1.svg"
import img2 from "./servyoga2.svg"

const Service = () => {
  return (
    <>
      <div className="service">
        <div className="services">
          <div className="service__img">
            <img src={img1} alt="" />
          </div>
          <div className="service__content">
            <div className="service__title">Whats on YogaKita</div>
            <div className="service__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div className="services">
          <div className="service__content">
            <div className="service__title">Whats on YogaKita</div>
            <div className="service__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="service__img">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
