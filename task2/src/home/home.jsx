import React,{useState,useEffect} from "react";
import Nav from '../navbar/navbar';
import Body from '../body/body';
import Footer from '../footer/footer';
import Onboarding from "../mobileonboarding/onboarding";
function Home(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if(isMobile){
        return <div>
            <Onboarding/>
        </div>
    }
    else{
    return <div>
      <Body className="footerhome"/>
    </div>
}

}
export default Home