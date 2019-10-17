import React, { Fragment } from "react";
import '../App.css';

const Home = () => (
  <Fragment>
<flexbox className="home-flex">
<div className="main-div-avatar">
        <div className="paragraph">
        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a laoreet erat. Nullam ex risus, interdum quis feugiat non, volutpat ut enim. Nunc aliquam, odio venenatis tempor congue, lacus massa molestie metus, in auctor diam dolor nec mauris. Aenean in eleifend nibh, non hendrerit ipsum. Proin finibus volutpat sodales. Aliquam a justo ut justo tincidunt ultrices. Sed finibus venenatis sagittis. In vitae commodo risus, lobortis sagittis lorem. Proin consequat sit amet nunc vitae commodo. Proin ullamcorper bibendum nisi et volutpat. In cursus leo eu odio pharetra, porta vehicula velit vehicula. Suspendisse molestie laoreet felis sed tempor. Proin mauris quam, pretium sed efficitur suscipit, egestas vitae est.</p>
        </div>
        <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV"
            alt="avatar"
            className="home-avatar"
        />
    </div>
    <div className="InternalPar">
      
      <p id="InternalPar"></p>
    </div>
    
     <div className="faPics">
         <i className="fa fa-linkedin fa-2x" aria-hidden="true"><p>linkedIn</p></i>
         <i className="fa fa-youtube fa-2x" aria-hidden="true"><p>youtube</p></i>
         <i className="fa fa-github fa-2x" aria-hidden="true"><p>github</p></i>
         <i class="fa fa-facebook fa-2x" ><p>facebook</p></i>
    </div>
    </flexbox>    
  </Fragment>
);

export default Home;
