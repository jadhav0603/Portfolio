import { useState, useEffect } from "react"
import img1 from "/Achievments/Vijay - Internship Participation Certificate_page-0001.jpg"
import img2 from "/Achievments/Innovation 2015 2_page-0001.jpg"
import img3 from "/Achievments/Tally ERP 9_page-0001.jpg"
import img4 from "/Achievments/State level history exam_page-0001.jpg"
import img5 from "/Achievments/Lion’s Club_page-0001.jpg"
import img6 from "/Achievments/Kho-kho Sport_page-0001.jpg"

const Certificates = ()=>{
    const [first, setFirst] = useState(1);
    const [second, setSecond] = useState(2);
    const [third, setThird] = useState(3);
    const [fourth, setFourth] = useState(4);
    const [fifth, setFifth] = useState(5);
    const [sixth, setSixth] = useState(6);

    const Array = [img1,img2,img3,img4,img5,img6]
    const NameArray = ["Internship Test","Innovation 2015","Tally ERP 9","State level history exam","Lion’s Club","Kho-kho Sport"]


    useEffect(()=>{
        const interval = setInterval(()=>{
            setFirst((prev)=> (prev+1) % Array.length)
            setSecond((prev)=> (prev+1) % Array.length)
            setThird((prev)=> (prev+1) % Array.length)
            setFourth((prev)=> (prev+1) % Array.length)
            setFifth((prev)=> (prev+1) % Array.length)
            setSixth((prev)=> (prev+1) % Array.length)
        },3000)

        return () => clearInterval(interval);

    },[Array.length])

    
    return(
        <div id="acheivements" className="container">
            <h1><u>Achievment Certificate's</u></h1>
        <div className="sliderContainer">
            <div className="slider">
                <img src={Array[first]} alt=""/>
            </div>
            <div className="slider">
                <img src={Array[second]} alt="" />
            </div>
            <div className="mainSlide">
                <img src={Array[third]} alt="" />
                <h3>{NameArray[third]}</h3>
            </div>
            <div className="slider">
                <img src={Array[fourth]} alt=""/>
            </div>
            <div className="slider">
                <img src={Array[fifth]} alt="" />
            </div>
            <div className="slider">
                <img src={Array[sixth]} alt="" />
            </div>

        </div>
        </div>
    )
}

export default Certificates