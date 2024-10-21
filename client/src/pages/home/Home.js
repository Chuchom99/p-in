import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import phone from "../../assets/newP (3).png";
import hero from "../../assets/hero.svg";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import perfect from "../../assets/perfect_money.svg";
import advcash from "../../assets/advcash.svg";
import smile from "../../assets/anim.png"
// import f2 from "../../assets/dignity-2.png"
// import f3 from "../../assets/dignity-3.png"
// import f4 from "../../assets/dignity-4.png"

import fImg1 from "../../assets/1.png"
import fImg2 from "../../assets/2.png"
import fImg3 from "../../assets/3.png"
import fImg4 from "../../assets/4.png"
// import authImg from "../../assets/image_authenticate_03@3x.png"
import stepImg from "../../assets/step.png"
import step from "../../assets/step-box.png"
import "./home.scss"
import HotlistsTradingViewWidget from '../../components/hotlist/HotlistsTradingViewWidget ';

const Home = () => {
    const url = "https://finnhub.io/api/v1/news?category=general&token=cchg08qad3i4bkk56120";
    const [news, setNews] = useState([]);
    const [noOfNews, setNoOfNews]= useState(4);
    const slice = news.slice(0, noOfNews);


    useEffect(() => {
          axios.get(url).then((res) => {
            setNews(res.data)})
          .then((err) => {console.log(err);})
      
      },[])
  

  return (
    <div className='home' >
        <div className='banner'>     
        <div className='sec' >
         <span className='head' >Smart investments for the future</span>
         <span className='content' >Advanced trading approach leverages sophisticated strategies, 
            state-of-the-art tools, and in-depth market knowledge to enhance 
            decision making, manage risk, and boost potential returns</span>
            <div className='btn-div flex' > 
            <Link to="/register">
             <button className='reg-btn' >Registeration</button>
            </Link>
            <Link>
             <button className='demo-btn' >Open demo account</button>
            </Link>
            </div>
        </div>
        <div className='first' >
        <img src={phone} alt=''className='phone' />
        <div className='circle' ></div>
        </div>
        </div>

        <div className='banner-2'>     
        <div className='sec' >
         <span className='head' >Smile at Your future</span>
         <span className='content' >Sign up now and gain access to a world of opportunities. With our user-friendly 
         platform, expert analysis, and educational resources, you'll have the tools you need 
         to take control of your financial future. Whether you're looking to grow your investment 
         portfolio, plan for retirement, or simply learn more about the stock market, RD Stock Trade is 
         here to support you every step of the way.</span>
        </div>
        <div className='first' >
        <img src={smile} alt=''className='phone' />
        </div>
        </div>

        <div className='second' >
            <div className='flex space logos' >
                 <img className='brand-logos' src={visa} alt='' />
                 <img className='brand-logos' src={mastercard} alt='' />
                 <img className='brand-logos' src={advcash} alt='' />
                 <img className='brand-logos' src={perfect} alt='' />
            </div>

            <div className='features' >
                <div className='features-1 col' >
                    <div className="col f-fcol" >
                        <img className="f-images" src={fImg1} alt='' />
                        <div className='col f-col'  >
                            <span className="f-header" >Well regulated</span>
                            <span className='f-content' >Licensed and regulated by relevant regulatory bodies</span>
                        </div>
                    </div>
                    <div className="col f-fcol" >
                        <img className="f-images" src={fImg2} alt='' />
                        <div className='col f-col' >
                            <span className="f-header" >24/7 customer service</span>
                            <span className='f-content' >Our professional customer service team is online 24 hours a day. We are sincere in helping you solve your trading queries and needs</span>
                        </div>
                    </div>
                    
                </div>

                <div className='features-1 col'  >
                <div className="col f-fcol" >
                        <img className="f-images" src={fImg3} alt='' />
                        <div className='col f-col' >
                            <span className="f-header" >Risk management</span>
                            <span className='f-content' >Get to know more about the free risk management tools Mitrade offers to help you keep your loss.</span>
                        </div>
                    </div>
                    <div className="col f-fcol" >
                        <img className="f-images" src={fImg4} alt='' />
                        <div className='col f-col' >
                            <span className="f-header" > Trading strategies</span>
                            <span className='f-content' >Trading strategies that help you grab the market trends and spot trading opportunities effortlessly.</span>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='step-trading' >
                <div className='col first' >
                <span className='h2s' >Start Trading in 3 Easy Steps!</span>
                <div className='flex first-div1' >
                <img className='step-img' src={step} alt='' />
                <div className='col first-div2' >
                    <div className='col  ' >
                        <span className='h3s' >1. Registeration</span>
                        <span className='px' >Complete your account application</span>
                    </div>
                    <div className='col' >
                        <span className='h3s'>2. Deposit funds</span>
                        <span className='px' >Select from a wide range of payment methods</span>
                    </div>
                    <div className='col' >
                        <span className='h3s'>3. Start Trading</span>
                        <span className='px' >A world of opportunities awaits</span>
                    </div>

                    <button className='reg-btnn' >Open live account</button>
                    
                </div>
                </div>
                </div>
                <div className='sec' >
                    <img className='stepImg' src={stepImg} alt='' />
                </div>
            </div>

            <div className='n-c-div' >
                <div className='news-items col' >
                    <span className='n-c-head' >Top news</span>

                    <div className='news-item-div col' >
                        {
                            slice.map((item, i) => (
                                <Link className='news-item' >
                                <img className='news-img' src={item.image} alt='' />
                                 <div className='n-flex col' >
                                <span className='news-headline' >{item.headline}</span>
                                {/* <span className='news-source' >source: {item.source}</span> */}
                                </div>   
                                </Link>
                            ) 
                            )
                        }
                    </div>
                </div>
                <div className='chart'>
                    <HotlistsTradingViewWidget />
                </div>
            </div>

            <div className='trade-faster col' >
                <div className='col' style={{gap: '15px', alignItems: 'center'}} >
                <img className='hero-img' src={hero} alt='' />
                <span className='t-f-s' >Bulltrade: Trade faster, trade Smarter</span>
                </div>
                <Link to="/register" >
                <button className='t-f-btn' >Start trading today</button>
                </Link>
            </div>


            
        </div>
    </div>
  )
}

export default Home