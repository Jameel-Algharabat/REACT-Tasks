import React, { Component } from 'react'
import './ProjectsTask.css';


class ProjectsTask extends Component{
    render(){
        return (
            
            <div>
                <div class="My">
        <h2 >* My project *</h2>
        <div class="grid-projects">
            <div class="margin">
                <div class="projects">

                    <div class="img-style">
                        <img class="img" src={require("../img/mockup.png")} alt="" width="300" height="350"/>
                        <br/><br/>
                        <div class="text1">
                            <h4><b>mockup and wireframe</b></h4>
                            This is the first project at Orange Academy
                            One of the most beautiful projects
                        </div>
                        <br/>
                        <button type="button" class="btn btn-info"><a
                                href="https://github.com/Jameel-Algharabat">More</a></button>
                    </div>
                </div>

            </div>
            <div class="margin">
                <div class="projects">
                    <div class="img-style">
                        <img class="img" src={require("../img/Phone shop.png")} alt="" width="300" height="350"/>
                        <br/>
                        <div class="text1">
                            <h4><b>Phone shop</b></h4>
                            The project was created in a team
                            One of the best achievements
                        </div>
                        <br/>
                        <button type="button" class="btn btn-info"><a
                                href="https://github.com/Jameel-Algharabat">More</a></button>


                    </div>
                </div>
            </div>
            <div class="margin">

                <div class="projects">
                    <div class="img-style">
                        <img class="img" src={require("../img/ccna.png")} alt="" width="300" height="350"/>
                        {/* </a> */}
                        <div class="text1">
                            <h4><b>CCNA project</b></h4>
                            One of my most important projects at LTUC
                            The goal of the project is to organize the network in a hospital
                        </div>
                        <br/>
                        <button type="button" class="btn btn-info"><a
                                href="https://github.com/Jameel-Algharabat">More</a></button>
                    </div>

                </div>

            </div>
        </div>
    </div>


    <div class="My2">
    <h2 >* My task *</h2>
    <div class="grid-task">
        <div class="margin">
            <div class="task-border">
                <div class="img-style">
                    <img class="img" src={require("../img/task 1.png")} alt="" width="300" height="350"/>
                    {/* </a> */}
                    <br/><br/>
                    <div class="text1">
                        <h2><b>shopping page</b></h2>
                    </div>
                    <br/>
                    <button type="button" class="btn btn-info"><a href="https://github.com/Jameel-Algharabat">More</a>
                    </button>
                </div>
            </div>

        </div>
        <div class="margin">
            <div class="task-border">
                <div class="img-style">
                    <img class="img" src={require("../img/task 2.png")} alt="" width="300" height="350"/>
                    {/* </a> */}
                    <br/><br/>
                    <div class="text1">
                        <h2><b>orange shopping</b></h2>
                    </div>
                    <br/>
                    <button type="button" class="btn btn-info"><a
                            href="https://github.com/Jameel-Algharabat">More</a></button>


                </div>
            </div>
        </div>
        <div class="margin">
            <div class="task-border">
                <div class="img-style">
                    <img class="img" src={require("../img/task 3.png")} alt="" width="300" height="350"/>
                    {/* </a> */}
                    <br/><br/>
                    <div class="text1">
                        <h2><b>My Awesome Blog</b></h2>
                    </div>
                    <br/>
                    <button type="button" class="btn btn-info"><a
                            href="https://github.com/Jameel-Algharabat">More</a></button>
                </div>

            </div>

        </div>
        <div class="margin">
            <div class="task-border">
                <div class="img-style">
                    <img class="img" src={require("../img/task 4.png")} alt="" width="300" height="350"/>
                    {/* </a> */}
                    <br/><br/>
                    <div class="text1">
                        <h2><b>My Dog</b></h2>
                    </div>
                    <br/>
                    <button type="button" class="btn btn-info"><a
                            href="https://github.com/Jameel-Algharabat">More</a></button>
                </div>

            </div>

        </div>
        <div class="margin">
            <div class="task-border">
                <div class="img-style">
                    <img class="img" src={require("../img/task 5.png")} alt="" width="300" height="350"/>
                    {/* </a> */}
                    <br/><br/>
                    <div class="text1">
                        <h2><b>Externel CSS Sheet</b></h2>
                    </div>
                    <br/>
                    <button type="button" class="btn btn-info"><a
                            href="https://github.com/Jameel-Algharabat">More</a></button>
                </div>

            </div>

        </div>
        <div class="margin">
            <div class="task-border">
                <div class="img-style">
                    <img class="img"src={require("../img/task 6.png")} alt="" width="300" height="350"/>
                    {/* </a> */}
                    <br/><br/>
                    <div class="text1">
                        <h2><b>users</b></h2>
                    </div>
                    <br/>
                    <button type="button" class="btn btn-info"><a
                            href="https://github.com/Jameel-Algharabat">More</a></button>
                </div>

            </div>

        </div>
    </div>
</div>
            </div>
          )

    }
}

export default ProjectsTask