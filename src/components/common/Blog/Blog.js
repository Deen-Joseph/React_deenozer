import React from "react"
import './Blog.css'

const Blog =(data)=>{
  return( 

<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>{data.heading}</h2>
      <h5>{data.description} {data.date}</h5>
      <div class="fakeimg" >{data.heading}</div>
      <p>{data.details}</p>
    </div>
    <div class="card">
      <h2>{data.heading}</h2>
      <h5>{data.description} {data.date}</h5>
      <div class="fakeimg" >{data.heading}</div>
      <p>{data.details}</p>
    </div>
  </div>
  <div class="rightcolumn">
    <div class="card">
      <h2>News</h2>
      <div class="fakeimg">{data.image}</div>
      <p>{data.details}</p>
    </div>
    <div class="card">
      <h3>Trending</h3>
      <div class="fakeimg">{data.image}</div>
      <div class="fakeimg">{data.image}</div>
      <div class="fakeimg">{data.image}</div>
    </div>
  </div>
</div>
  )
}

export default Blog
