import React from 'react'
import Process1 from '../assets/Images/food-service4537.jpg'
import Process2 from '../assets/Images/delivery.png'
import Process3 from '../assets/Images/eat.png'

const Delivery = () => {
  return (
    <div className="container px-4 py-5 delivery-process">
        <h2 className='text-center display-4 mt-4 fw-bold'>How Delivery Works</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div className="col px-5 text-center">
        <div className="mb-3">
          <img src={Process1} className='w-50 h-50' alt="" />
        </div>
        <h5>Pick Your food</h5>
        <p>
        Pick your favorite food from our variety of foods. <br />Enjoy free delivery on all orders over GHC20.0
        </p>
      </div>
      <div className=" col px-5 text-center">
        <div className="mb-3">
          <img src={Process2} className='w-50 h-50' alt="" />
        </div>
        <h5>We Deliver the food</h5>
        <p>
          We deliver your food to your doorstep
          </p>
      </div>
      <div className=" col px-5 text-center">
        <div className="mb-3">
        <img src={Process3} className='w-50 h-50' alt="" />
        </div>
        <h5>You Enjoy Your food </h5>
          <p>
          take your time and enjoy your meal
          </p>
      </div>
    </div>
  </div>
  )
}

export default Delivery