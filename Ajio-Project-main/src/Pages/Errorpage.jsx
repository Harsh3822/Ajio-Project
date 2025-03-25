import React from 'react'
import '../Styles/Errorpage.css'

const Errorpage = () => {
  return (
    <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="text-center p-5 border rounded shadow-lg bg-white">
            <h1 class="display-1 text-danger">404</h1>
            <p class="lead">Oops! The page you're looking for can't be found.</p>
            <a href="/" class="btn btn-primary">Go back to Home</a>
        </div>
    </div>
  )
}

export default Errorpage
