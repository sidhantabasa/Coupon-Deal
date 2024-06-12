import React from 'react'

const Dropdown = () => {
  return (
    <div>
      <menu className="h-screen grid place-items-center justify-between gap-x-6 text-md p-2 md:">
          <h2>
            <i class="fas fa-home"></i> HOME
          </h2>
          <h2>
          <i class="fas fa-receipt"></i> COUPONS
          </h2>
          <h2>
            <i class="fas fa-store"></i> STORE
          </h2>
          <h2>
          <i class="fas fa-upload"></i> SELL COUPON
          </h2>
          <h2>
            <i class="fas fa-eye"></i> ABOUT  
          </h2>
          <button className="m-2">
            <i class="fas fa-heart"></i>
          </button>
          <button className="m-2">
            <i class="fas fa-user"></i>
          </button>
        </menu>
    </div>
  )
}

export default Dropdown