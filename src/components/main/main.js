import "./main.scss"
import img from "./webyoga1.svg"

const Main = () => {
  return (
    <>
      {/* <div className="container"> */}
        <div className="main__content">
          <div className="main__descr">
            <div className="main__title">
              Beautiful Videos. Become Your Beast self. With YogaKita
            </div>
            <div className="main__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco consequat.
            </div>
          </div>

          <div className="main__img">
            <img src={img} alt="/" />
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default Main
