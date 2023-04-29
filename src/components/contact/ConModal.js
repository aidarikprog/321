import { useEffect, useRef } from "react"
import "./style.css"

const ConModal = ({ open, setOpen }) => {
  // const ref = useRef(null)
  useEffect(() => {
    const body = document.querySelector("body")
    body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  const ref = useRef(null)

  const handleKey = (e) => {
    if (e.key === "Enter") {
      ref.current.focus()
    }
  }
  return (
    <>
      {open && (
        <div
          className={open ? "modal open" : "modal"}
          onClick={() => setOpen(false)}
        >
          <form className="modal__content" onClick={(e) => e.stopPropagation()}>
            <p className="form-title">Contact Us</p>
            <div className="input-container">
              <input
                placeholder="Enter email"
                type="email"
                onKeyUp={handleKey}
              />
            </div>
            <div className="input-container">
              <input placeholder="Enter number" type="password" ref={ref} />
            </div>
            <div className="form__btns">
              <button
                className="submit"
                type="button"
                // onClick={() => ref.current.focus()}
              >
                Send
              </button>
              <button className="submit" type="button" onClick={()=>setOpen(false)}>Close</button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default ConModal
