import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
        <h2>Welcome To</h2>
        <h1>className='text-center fw-semibold'React University London</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          reiciendis repellat magnam tenetur vel nam quia pariatur dolore ipsa
          beatae, libero aliquid explicabo qui illum saepe veritatis blanditiis
          a possimus.
        </p>
        <div className='d-flex flex-column flex-sm-row align-items-center'>
          <Link to='/courses'>
            <button
              type='button'
              className='btn btn-danger btn-lg mx-0 mx-sm-2 my-sm-0'
            >
              Our Courses
            </button>
          </Link>
          <Link to='/contact'>
            <button
              type='button'
              className='btn btn-outline btn-danger btn-lg mx-0 mx-sm-2 my-sm-0'
            >
              Our Courses
            </button>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Home
