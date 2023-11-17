import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phone from "../../assets/hero.svg";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import perfect from "../../assets/perfect_money.svg";
import advcash from "../../assets/advcash.svg";
import f1 from "../../assets/dignity-1.png"
import f2 from "../../assets/dignity-2.png"
import f3 from "../../assets/dignity-3.png"
import f4 from "../../assets/dignity-4.png"
import "./home.scss"

const Home = () => {
  return (
    <div className='home' >
        <div className='banner'>     
        <div className='first' >
        <img src={phone} alt=''className='phone' />
        </div>
        <div className='sec' >
         <span className='head' >Smart investments for the future</span>
         <span className='content' >Advanced trading approach leverages sophisticated strategies, 
            state-of-the-art tools, and in-depth market knowledge to enhance 
            decision-making, manage risk, and boost potential returns</span>
            <div className='btn-div flex' > 
             <button className='reg-btn' >Registeration</button>
             <button className='demo-btn' >Open demo account</button>
            </div>
        </div>
        </div>
        <div className='second' >
            <div className='start-trading' >
                <span className='h2s' >Start Trading Today!</span>
             
                <span className='ps' >Ready to dive into the world of stocks? Join
                RD Stock Trade today and embark on an exciting journey toward financial success. Sign
                up now and gain access to a world of opportunities. With our user-friendly platform,
                expert analysis, and educational resources, you'll have the tools you need to take
                control of your financial future. Whether you're looking to grow your investment
                portfolio, plan for retirement, or simply learn more about the stock market,
                RD Stock Trade is here to support you every step of the way.</span>
                <span className='ps'>
                Rdstocktrade is regulated by the
                Seychelles Financial Services Authority (FSA) with Securities Dealer’s license number SD018
                </span>
                <button className='cert-btn' >
                Cerificate Of Incoporation
                </button>
            </div>
            <div className='flex space' >
                 <img className='brand-logos' src={visa} alt='' />
                 <img className='brand-logos' src={mastercard} alt='' />
                 <img className='brand-logos' src={advcash} alt='' />
                 <img className='brand-logos' src={perfect} alt='' />
            </div>
            <div className='features' >
                <div className='features-1' >
                    <div className="col f-fcol" >
                        <img className="f-images" src={f1} alt='' />
                        <div className='col f-col'  >
                            <span className="f-header" >Convenient trading interface</span>
                            <span className="f-content" >We created the most simple and comfortable interface that
                            does not distract from the main thing - from trading</span>
                        </div>
                    </div>
                    <div className="col f-fcol" >
                        <img className="f-images" src={f2} alt='' />
                        <div className='col f-col' >
                            <span className="f-header" >Convenient trading interface</span>
                            <span className="f-content" >We created the most simple and comfortable interface that
                            does not distract from the main thing - from trading</span>
                        </div>
                    </div>
                    <div className="col f-fcol" >
                        <img className="f-images" src={f3} alt='' />
                        <div className='col f-col' >
                            <span className="f-header" >Convenient trading interface</span>
                            <span className="f-content" >We created the most simple and comfortable interface that
                            does not distract from the main thing - from trading</span>
                        </div>
                    </div>
                    <div className="col f-fcol" >
                        <img className="f-images" src={f4} alt='' />
                        <div className='col f-col' >
                            <span className="f-header" >Convenient trading interface</span>
                            <span className="f-content" >We created the most simple and comfortable interface that
                            does not distract from the main thing - from trading</span>
                        </div>
                    </div>

                </div>
                <hr/>
                <button className='f-btn' >
                    Try playing on a demo account
                    
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home