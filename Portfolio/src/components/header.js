import React, { Component } from 'react';
import '../App.css';


class Header extends Component{
    render(){
        return (
            
            <div> <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="project2.html"><p class="nav">jameel</p></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/"><p class="nav">Home</p></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/ProjectsTask.js"><p class="nav">{this.props.name}</p></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Contact.js"><p class="nav">contact</p></a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav></div>
          )

    }
}

export default Header