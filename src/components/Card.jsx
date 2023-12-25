import React from 'react'
import './Card.css'

function Card() {
  return (
    <>
    <div className="card-main">
        <div className="card-image">
          <img src="https://via.placeholder.com/300x200" alt="" />
        </div>
        <div className="card-info">
          <h3>Title</h3>
          <h6>Date</h6>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil doloremque ex pariatur autem reiciendis magnam obcaecati ad quae, accusantium porro laudantium provident sequi rerum impedit officia ea, modi architecto animi laboriosam vel. Sapiente maiores temporibus quod dolorem debitis quaerat inventore? Nam, fugiat non. Autem commodi, nisi reprehenderit voluptatum iusto amet.</p>
        </div>
      </div>
    </>
  )
}

export default Card