import "./pricing.scss" 


const Pricing = () =>{

  return(
    <>
      <div className="pricing">
        <div className="pricing__title">Pricing</div>
        <div className="pricing__product">
          <div className="products">
          
          <div className="products__card">
            <div className="products__name">
              <div className="products__name-a">A</div>
              <div className="products__name-plan">plan</div>
            </div>
            <div className="products__price">Rp. 150.000</div>
            <div className="products__price-sub">per month</div>
            <div className="products__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
            <button className="products__btn">SELECT PLAN</button>
          </div>

          <div className="products__card">
            <div className="products__name">
              <div className="products__name-a">B</div>
              <div className="products__name-plan">plan</div>
            </div>
            <div className="products__price">Rp. 110.000</div>
            <div className="products__price-sub">per month</div>
            <div className="products__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
            <button className="products__btn">SELECT PLAN</button>
          </div>

          <div className="products__card">
            <div className="products__name">
              <div className="products__name-a">C</div>
              <div className="products__name-plan">plan</div>
            </div>
            <div className="products__price">Rp. 80.000</div>
            <div className="products__price-sub">per month</div>
            <div className="products__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
            <button className="products__btn">SELECT PLAN</button>
          </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
