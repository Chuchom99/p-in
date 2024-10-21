
import "./kfut.css"

import fogo from '../../about/img/Stock-Exchange_1.png'
import fogo2 from '../../about/img/lopi.svg'

export default function Kstock(){

    return(
        <div >
        
    <div>
        <div className="about_us__quotex__container">
            <div className="about_us__quotex" dir="auto">
                <h1 style={{color:"white"}}>
                Stock Trading </h1>

                <h3 className="about_us__quotex-title">Trading at it's peak</h3>

                <p className="about_us__quotex-text">
                Unlock the power of the stock market with RD Stock Trade, your ultimate destination for stock trading.
                    Whether you're an experienced trader seeking to expand your portfolio or a beginner taking your first
                    steps in the stock market, our platform provides you with the tools, resources, and support to make
                    informed investment decisions.
                     </p>
            </div>
            <img className="about_us__quotex__image" style={{width: "450px",opacity: 0.7}} src={ require('../../about/img/Blog-1-1.png')} alt="about-us" 
            srcset="img/brokerage_PlatformsPicks.png 2x, img/brokerage_PlatformsPicks.png 3x" />
        </div>

        <div className="about_us__desires-container">
            <div style={{width:"50%"}}>
                <img className="about_us__desires-image" src={fogo} alt="desires" 
                srcset="img/Stock-Exchange_1.png 2x, img/Stock-Exchange_1.png 3x" style={{width: "350px",marginLeft:"unset",marginTop:"30px"}} />
            </div>

            <div className="about_us__desires" dir="auto">
                <h2 className="about_us__desires-title">Our world renowned trading strategy.
                </h2>
                <p className="about_us__desires-text">
                    Ready to explore the potential of stock trading? Join RD Stock Trade now and start trading stock
                    contracts with confidence. With our user-friendly platform, comprehensive market analysis, and
                    educational resources, you'll have the tools you need to seize futures trading opportunities and enhance
                    your investment portfolio </p>
            </div>
        </div>

        <div className="about_us__modern">
            <h2 className="about_us__modern-title" style={{marginTop: "64px"}}>Why Trade Futures with RD Stock Trade</h2>
            <div className="about_us__modern-items" style={{display: "grid",gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem"}}>
                <p className="about_us__modern-item" dir="auto" style={{width: "100%"}}>
                Extensive Market Coverage: RD Stock Trade offers an extensive range of stocks across various markets,
                    including major exchanges and emerging markets. Gain access to a diverse selection of companies,
                    sectors, and industries, allowing you to create a well-balanced and diversified portfolio.</p>
                <p className="about_us__modern-item" dir="auto" style={{width: "100%"}}>
                Intuitive Trading Platform: Our user-friendly trading platform is designed to cater to traders of all
                    levels. From placing trades to monitoring your portfolio, our platform offers a seamless experience.
                    Take advantage of real-time market data, interactive charts, and customizable trading screens to stay on
                    top of the market movements.</p>
                <p className="about_us__modern-item" dir="auto" style={{width: "100%"}}>
                Research and Analysis: Making informed investment decisions is crucial in stock trading, and we provide
                    you with the necessary research and analysis tools. Stay updated with the latest news, company reports,
                    and analyst recommendations. Leverage our in-depth market analysis and stock screeners to identify
                    potential investment opportunities.</p>
                <p className="about_us__modern-item" dir="auto" style={{width: "100%"}}>
                Educational Resources: At RD Stock Trade, we believe in empowering our traders with knowledge. Explore our
                    educational resources, including articles, videos, and tutorials, to enhance your understanding of stock
                    trading. Learn about fundamental analysis, technical indicators, and trading strategies to sharpen your
                    skills.
                </p>
            </div>
        </div>

        <div className="main__innovation-container">
            <img style={{width: "100%",height: "350px"}} src={fogo2} alt="about-us" />

            <h2 className="main__innovation-title">RDStockTrade: Innovation Platform<br/> Digital Asset Trading</h2>

            <div className="main__innovation-button">
                <a className="main__innovation-real" href="register.html">
                    <svg width="25" height="25" viewbox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.119244 13.2959L0.638568 13.301C0.942373 13.3039 1.23105 13.1686 1.42312 12.9332L4.52519 9.13133C5.00616 8.54184 5.94312 8.68406 6.22751 9.38972L8.56812 15.1975C8.91985 16.0703 10.1726 16.0184 10.4509 15.1195L13.7379 4.5027C13.9688 3.757 14.9269 3.55157 15.4432 4.13706L18.4078 7.49889C18.792 7.93463 19.4655 7.95233 19.8721 7.53739L23.6192 3.7134M-0.280762 21.3057C0.119238 21.3057 17.9526 21.3057 24.6192 21.3057" stroke="white" stroke-width="2.7"></path>
                    </svg>

                    Open real account </a>

                <a className="main__innovation-demo" href="home.html">
                    <svg width="33" height="33" viewbox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.4271 13.4714L16.7916 8.90616C16.9217 8.8617 17.0623 8.85798 17.1946 8.89548L30.2759 12.6029C30.9069 12.7818 30.9395 13.6641 30.3233 13.8889L17.2009 18.6775C17.0649 18.7271 16.9165 18.7318 16.7776 18.6908L3.45435 14.7601C2.82191 14.5735 2.80312 13.6846 3.4271 13.4714Z" stroke="#3690F2" stroke-width="2.70521"></path>
                        <path d="M8.36377 16.2461V22.665C8.36377 24.355 9.73378 25.725 11.4238 25.725H22.2772C23.9672 25.725 25.3372 24.355 25.3372 22.665V16.2461" stroke="#3690F2" stroke-width="2.70521"></path>
                        <path d="M30.7695 13.2266L30.7695 20.987" stroke="#3690F2" stroke-width="2.70521"></path>
                    </svg>

                    Sign In </a>
            </div>
        </div>
    </div>
    </div>
    )
}

