import React from "react";

const Players = () => {
  return (
    <div>
      <div className="container">      
      <div className="title">
        <h3>Players</h3>
      </div>
      <div className="body">
      <h3>Details</h3>
      </div>
      
    </div>
{/*================= Dummy Dummy=========== */}
    <div class="card">
<img src="img.jpg" alt="John" style="width:100%">
<h1>John Doe</h1>
<p class="title">CEO & Founder, Example</p>
<p>Harvard University</p>
<a href="#"><i class="fa fa-dribbble"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
<a href="#"><i class="fa fa-linkedin"></i></a>
<a href="#"><i class="fa fa-facebook"></i></a>
<p><button>Contact</button></p>
</div>
    </div>


  );
};

export default Players;
