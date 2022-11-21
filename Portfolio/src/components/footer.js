import React, { Component } from 'react'
import '../App.css';


class Footer extends Component{

  state ={
    Name : 'Jameel-Algharabat',
    home : 'Home'
  }

    render(){
        return (
          <div class="end-page-grid">

          <div>
              <a href="file:///C:/Users/user/Desktop/hello%20world/My%20project/project2.html#"> <p class="nav2">{this.state.home}</p></a>
          </div>
  
          <div>
              <p class="nav2">{this.state.Name}</p>
          </div>
  
          <div>
              <a href="https://web.facebook.com/jameel.sameeh.79"><img src={require("../img/facebook-new.png")} alt=""width="50px"
                      height="50px"  /></a>
              <a href="https://www.linkedin.com/in/jameel-al-gharabat-469367244/"><img src={require("../img/linkedin-circled--v1.png")} alt=""
                      width="50px" height="50px" /></a>
              <a href="https://github.com/Jameel-Algharabat"><img src={require("../img/github.png")} alt="" width="55px" height="55px"/></a>
          </div>
          
  
      </div>
          )

    }
}

export default Footer