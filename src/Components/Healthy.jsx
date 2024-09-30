import React from 'react'
import HProduct from './HProduct'
import food1 from '../assets/Images/plate-1.png'
import food2 from '../assets/Images/plate-3.png'
import food3  from '../assets/Images/plate-2.png'
import food11  from '../assets/Images/plate-1.png'
import food33  from '../assets/Images/plate-2.png'
import food22  from '../assets/Images/plate-3.png'

const Healthy = () => {
  return (
    <div className="container-fluid px-4 py-5 healthy">
        <h2 className='text-center display-4 mt-4 fw-bold'>
            Eating your favorite food made easy
        </h2>
        <div classNam='container mt-5'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <HProduct 
                Image = {food11}
                Image2 = {food1}
                Title = "Thai Salad"
                Description = "A vibrant Thai-style salad made with shredded green papaya, topped with roasted peanuts, and dressed with a tangy, spicy sauce."
            />
            <HProduct 
                Image = {food3}
                Image2 = {food33}
                Title = "Avocado toast"
                Description = "avocado toast with poached or soft-boiled eggs, garnished with fresh spinach leaves, a sprinkle of red chili flakes, and black pepper"
            />
            <HProduct 
                Image = {food2}
                Image2 = {food22}
                Title = "Greek salad"
                Description = "A Greek salad made with fresh leafy greens, cherry tomatoes, olives, cubes of feta cheese, and possibly pieces of pineapple or another fruit for a sweet touch"
            />
        </div>
        </div>
    </div>
  )
}

export default Healthy