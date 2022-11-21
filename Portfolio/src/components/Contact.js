import React, { Component } from 'react'
import './Contact.css';


class Contact extends Component {
    render() {
        return (

            <div><div class="margin">
                <div class="contact">

                    <div>
                        <h1 class="text1">Thank you so much</h1>
                    </div>
                    <div>
                        <h3 class="text2">Connect with me on:</h3>
                        <p class="text3"><b>my phone number: 0797890038</b></p>
                        <p class="text3"><b>My gmail: jameelalgharabat@gmail.com</b></p>

                    </div>
                    <div>
                        <h3 class="text2">for any comment:</h3>
                        <label class="text3">Your Name:</label>
                        <input type="text" required />
                        <br /><br />
                        <label class="text3">Your Email:</label>
                        <input type="email" required />
                        <p class="text3">comment:</p>
                        <textarea name="22" cols="40" rows="5"></textarea>
                        <br />
                        <input type="submit" />
                    </div>
                    <div>
                        <br />
                        <h1 class="text2">find me on:</h1>
                        <div>
                            <a href="https://web.facebook.com/jameel.sameeh.79"><img src={require("../img/facebook-new.png")} alt="" width="60px"
                                height="60px" /></a>
                            <a href="https://www.linkedin.com/in/jameel-al-gharabat-469367244/"><img src={require("../img/linkedin-circled--v1.png")} alt=""
                                width="60px" height="60px" /></a>
                            <a href="https://github.com/Jameel-Algharabat"><img src={require("../img/github.png")} alt="" width="65px" height="65px" /></a>

                            <a href="https://www.instagram.com/jameel_algharabat/"><img src={require("../img/insta.png")} alt="" width="50px" height="50px" /></a>
                        </div>
                    </div>
                </div>
            </div></div>
        )

    }
}

export default Contact