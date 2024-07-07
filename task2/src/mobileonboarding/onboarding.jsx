import React, {useEffect} from "react";
import "../mobileonboarding/onboarding.css";
import logo from "../img/logo.png"
import model1 from "../img/model1.png"
import model2 from "../img/model2.jpg"
import model3 from "../img/model3.jpg"
import { Link } from "react-router-dom";

function Onboarding(){

      var slider=0;
    function carousel(){
        var img1=document.getElementById("modelimg1")
        var img2=document.getElementById("modelimg2")
        var img3=document.getElementById("modelimg3")
        var images=[img1,img2,img3]
        for(var i=0;i<images.length;i++){
            images[i].style.display="none"
        }

        slider++
        if(slider>images.length){
            slider=1
        }
        images[slider-1].style.display="block"
        setTimeout(carousel,2000)
    }

    function icon(){
        var c1=document.getElementById("c1")
        var c2=document.getElementById("c2")
        var c3=document.getElementById("c3")
        var icons=[c1,c2,c3]
        for(var i=0;i<icons.length;i++){
            icons[i].style.backgroundColor="#27489E"
        }
        slider++
        if(slider>icons.length){
            slider=1
        }
        icons[slider-1].style.backgroundColor="white"
        setTimeout(icon,2000)
    }

    useEffect(() => {
        carousel();
        icon();
      }, []);

    return <div className="onboardingmain">
        <section className="sec1">
            <img src={logo} alt="" />
            <h3>Timbu Cloud</h3>
        </section>
        
        <section className="sec2">
            <h3>Where Style <span>Meets Comfort</span></h3>
            <p>Join us to celebrate stylish, comfy wears. Your path to extraordinary style begins here.</p>
        </section>

        <section className="sec3">
            <img src={model2} alt="model" id="modelimg1"/>
            <img src={model1} alt="model" id="modelimg2"/>
            <img src={model3} alt="model" id="modelimg3"/>
        </section>
        <section className="carouselIcon">
            <div className="circle" id="c1"></div>
            <div className="circle" id="c2"></div>
            <div className="circle" id="c3"></div>
        </section>

        <Link to="/body" className="boardingbtn">Get Started</Link>
    </div>
}
export default Onboarding