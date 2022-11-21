import { Component } from "react";
 import img from "../img/img 1.png";
 import imgA from "../img/li.png";
 import imgB from "../img/WhatsApp Image 2022-10-28 at 08.49.11.jpg";
 import imgS from "../img/about me.png";
 import imgC from "../img/stars.png";
 import imgD from "../img/education.png";
 import imgE from "../img/experience.png";
 import imgF from "../img/skills.png";
import '../App.css';


export default class Content extends Component{
    render(){
        return (
            <div>
            <div className="grid-container">
      <div className="h1">
          <h1 className="texth1">{this.props.name}<h1 className="texth1">Web Developer</h1>
          </h1>
          <p className="text1">Front End Developer / Technical Support</p>
          <br/><br/>
          <img src={img} width="420px" height="400px" className="img2"  alt=""/>
      </div>
      <div className="h1">
          <div className="container">
              <img src={imgB} width="550" height="630px" className="img1" alt=""/>
              <div className="overlay">
                  <div className="text"><img src={imgA} width="200px" height="200px" alt=""></img><br></br>
                      <p>“All life is an experiment.
                      <p>The more experiments
                      <p> you make the better”</p>
                      </p>
                      </p>
                  </div>
              </div>
          </div>
</div>
      </div>
  

  <div>
  <div className="about-me">
      <div className="h2">
          <h3 className="about-me-h3">About Me</h3>
          <div className="border-me-text">
              <p className="adout-me-text"/>My name is Jameel Sameeh Suleiman Al-Gharabat, I was born on February 14, 2002,
                  in Amman and I am 20 years old. I live in Amman / Giza.
              <p className="adout-me-text"><br/>He holds a high school diploma from Giza School, Scientific Branch, in
                  2019/2020.
                  Trainee at coding academy by orange
                  Student at LTUC university</p>
          </div>
      </div>
      <div className="h2">
          <img src={imgS} width="450" height="400px" className="img2" alt=""/>
      </div>
      <div className="item3">
          <p className="img2"><b><img src={imgC} width="80px" height="80px" alt="" />“Life is like riding a bicycle. To keep your balance,
                  you must keep moving"<img src={imgC} width="80px" height="80px" alt=""/></b></p>
      </div>
  </div>
  <div className="qualification-grid">
      <div className="qualification-size">
          <h2 className="qualification-size-text">education </h2>
          <div className="border-text-qualification">
              <img src={imgD} width="250px" height="250px" alt=""/>
              <p className="adout-me-text">I obtained a high school certificate from Giza School, the Scientific Branch for the year 2019/2020.
                  Intern at Orange Programming Academy
                  Study Information Technology/Technical Support at LTUC</p>
          </div>
      </div>

      <div className="qualification-size">
          <h2 className="qualification-size-text"> experience </h2>
          <div className="border-text-qualification">
              <img src={imgE} width="250px" height="250px" alt=""/>
              <p className="adout-me-text">I have very good experience in the following programming languages: HTML, CSS, bootstrap And i have excellent experience in: Powerpoint, Word, Excel, Zoom meeting </p>
          </div>
      </div>

      <div className="qualification-size">
          <h2 cla
              ssName="qualification-size-text">skills</h2>
          <div className="border-text-qualification">
              <img src={imgF} width="250px" height="250px" alt=""/>
              <p className="adout-me-text">communication skills, time management, solving problems, self-reliance, Teamwork skills, Research skills. </p>





          </div>
      </div>
  </div>
  </div></div>
          )

    }
}

