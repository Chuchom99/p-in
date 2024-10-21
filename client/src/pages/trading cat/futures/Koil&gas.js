import './kfut.css'
import bogo from '../../about/img/lopi.svg'


export default function Koilg(){
    return (
      
        <div >
        <div>
            <div className="about_us__quotex__container">
                <div className="about_us__quotex" dir="auto">
                    <h1 style={{color:"white"}}>
                    Oil and Gas Stock Trading </h1>
    
                    <h3 className="about_us__quotex-title">A new way to trade</h3>
    
                    <p className="about_us__quotex-text">
                    If you're interested in the dynamic and lucrative energy sector, RD Stock Trade provides you with the
                    opportunity to trade oil and gas stocks. Whether you want to invest in established energy companies or
                    explore emerging players in the industry, our platform offers a range of oil and gas stocks to suit your
                    investment goals. </p>
                </div>
    
                <img className="about_us__quotex__image" style={{width: "300px", opacity: 0.7}} src={require("../../about/img/brokerage_PlatformsPicks.png")} alt="about-us" 
                srcset="img/brokerage_PlatformsPicks.png 2x, 
                img/brokerage_PlatformsPicks.png 3x" />
            </div>
    
            <div className="about_us__desires-container">
                <img className="about_us__desires-image" src={require ("../../about/img/about-us-desires.png")} alt="desires" srcset="img/about-us-desires%402x.png 2x,
                 img/about-us-desires%403x.png 3x" />
                <div className="about_us__desires" dir="auto">
                    <h2 className="about_us__desires-title">Expert oil and gas stock trading.
                    </h2>
                    <p className="about_us__desires-text">
                    Enhance your knowledge of the oil and gas industry and stock trading through our educational resources.
                    Access articles, tutorials, and webinars that cover industry dynamics, fundamental analysis, and trading
                    strategies. Stay updated on the latest trends and developments in the energy sector.
                       </p>
                    <p className="about_us__desires-text">
                    Our customer support team is ready to assist you with any questions or concerns related to oil and gas
                    stock trading. Whether you need help with stock research, trading platforms, or account management, our
                    support staff is available to provide prompt and reliable assistance.
                    </p>
                </div>
            </div>
    
            <div className="about_us__modern">
                <h2 className="about_us__modern-title" style={{marginTop: "64px"}}>Green Energy stocks</h2>
                <div className="about_us__modern-items">
                    <p className="about_us__modern-item" dir="auto">
                    Diverse Selection: RD Stock Trade offers a diverse selection of oil and gas stocks, including major
                    industry players, exploration and production companies, refining and marketing firms, and service
                    providers. Access a comprehensive range of stocks to build a portfolio that aligns with your investment
                    strategy.</p>
                    <p class="about_us__modern-item" dir="auto">
                    Industry Insights: Stay informed about the oil and gas industry with RD Stock Trade's market insights and
                    analysis. Our research team provides you with in-depth reports, industry trends, and news updates that
                    impact the energy sector. Make informed investment decisions based on our expert analysis.
                   </p>
                   <p class="about_us__modern-item" dir="auto">
                    Real-Time Market Data: Access real-time market data for oil and gas stocks, including prices, trading
                    volumes, and historical performance. Stay on top of the latest developments in the industry and monitor
                    stock movements to seize trading opportunities.
                   </p>
                   <p class="about_us__modern-item" dir="auto">
                    Risk Management: As with any investment, managing risk is crucial when trading oil and gas stocks.
                    RD Stock Trade offers risk management tools, including stop-loss orders, to help protect your investment
                    capital. Understand the risks associated with the energy sector and implement appropriate risk
                    management strategies.
                </p>
                </div>
            </div>
    
            <div className="main__innovation-container">
                <img style={{width: "100%",height: "350px"}} src={bogo} alt="about-us" />
    
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

