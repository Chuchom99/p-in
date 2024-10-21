
import './ksoft.css'
import sogo from '../about/img/tastytrade_fullcolor_RGB-300x55_(8).svg'
import sogo2 from '../about/img/tradier-logo.svg'
import sogo3 from '../about/img/ib-logo-text-black.svg'
import sogo4 from '../about/img/PersonalLogo-cac8adf49ad92613b03ea2ec2251d81d.svg'
import sogo5 from '../about/img/6131d53c9d3264ee1c020fb9_logo.svg'
import sogo6 from '../about/img/eoption-logo.png'


export default function Ksoft(){
    return(
        <>
              <meta name="viewport" content="width=device-width, initial-scale=1" />

         <div class="main">
        <div style={{color:"white"}}>
            <div class="about_us__quotex__container">
                <div class="about_us__quotex" dir="auto">
                    <h1>
                        Software </h1>

                    <h3 class="about_us__quotex-title">Some of the softwares used for trading includes but not limited to the
                        following:</h3>
                </div>
                <img className="about_us__quotex__image" style={{width: "300px",opacity: "0.7"}}
                 src= {require("../about/img/brokerage_PlatformsPicks.png")} alt="about-us" srcset="img/brokerage_PlatformsPicks.png 2x, img/brokerage_PlatformsPicks.png 3x" />
            </div>

            <section className="container p-home-m-seo-become-a-trader p-home__section p-home-m-seo-become-a-trader--ltr" style={{marginTop: "50px"}}>
                <div className="page__container">
                    <div className="p-home-m-seo-become-a-trader__content-wrap">
                        <h2 className="com-c-title p-home-m-seo-become-a-trader__title" data-trans="become_a_trader_title">
                            Software
                        </h2>
                        <div className="p-home-m-seo-become-a-trader__content" style={{display: "flex",marginTop:"20px",height:"250px"}}>
                            <div className="p-home-m-seo-become-a-trader__item-wrap" style={{maxWidth: "50%",width: "50%",height: "100%"}}>
                                <div className="p-home-m-seo-become-a-trader__item-wrap-content">
                                    <h2 className="com-c-title p-home-m-seo-become-a-trader__item-head" data-trans="become_a_trader_item_1_head">Tastytrade</h2>
                                    <p className="p-home-m-seo-become-a-trader__item-text" data-trans="become_a_trader_item_1_text_1">
                                        Tastytrade gives you every edge possible with the technology, rates, and
                                        support that help you succeed more easily on your own. We’re as serious
                                        about your money as you are, and we work for you who are brave enough to
                                        take your finances into your own hands.</p>
                                </div>
                            </div>
                            <div className="comp-img">
                                <img src={sogo} />
                            </div>
                        </div>
                        <div className="p-home-m-seo-become-a-trader__content" style={{display: "flex",marginTop:"20px",height:"250px"}}>
                            <div className="p-home-m-seo-become-a-trader__item-wrap" style={{maxWidth: "50%",width: "50%",height: "100%"}}>
                                <div className="p-home-m-seo-become-a-trader__item-wrap-content">
                                    <h2 className="com-c-title p-home-m-seo-become-a-trader__item-head" data-trans="become_a_trader_item_1_head">Tradier</h2>
                                    <p className="p-home-m-seo-become-a-trader__item-text" data-trans="become_a_trader_item_1_text_1">
                                        Tradier provides all the tools to help make investing easy. Our open
                                        collaboration platform allows investors to truly customize their trading
                                        experience.</p>
                                </div>
                            </div>
                            <div className="comp-img">
                                <img src={sogo2} />
                            </div>
                        </div>
                        <div className="p-home-m-seo-become-a-trader__content" style={{display: "flex",marginTop:"20px",height:"250px"}}>
                            <div className="p-home-m-seo-become-a-trader__item-wrap" style={{maxWidth: "50%",width: "50%",height: "100%"}}>
                                <div className="p-home-m-seo-become-a-trader__item-wrap-content">
                                    <h2 className="com-c-title p-home-m-seo-become-a-trader__item-head" data-trans="become_a_trader_item_1_head">Interactive Brokers</h2>
                                    <p className="p-home-m-seo-become-a-trader__item-text" data-trans="become_a_trader_item_1_text_1">
                                        Interactive Brokers is for sophisticated investors and active traders.
                                        It accesses IB SmartRoutingSM. IB SmartRoutingSM helps support best
                                        execution by searching for the best available prices for stocks, options
                                        and combinations across exchanges and dark pools.</p>
                                </div>
                            </div>
                            <div className="comp-img">
                                <img src={sogo3} />
                            </div>
                        </div>
                        <div className="p-home-m-seo-become-a-trader__content" style={{display: "flex",marginTop:"20px",height:"250px"}}>
                            <div className="p-home-m-seo-become-a-trader__item-wrap" style={{maxWidth: "50%",width: "50%",height: "100%"}}>
                                <div className="p-home-m-seo-become-a-trader__item-wrap-content">
                                    <h2 className="com-c-title p-home-m-seo-become-a-trader__item-head" data-trans="become_a_trader_item_1_head">Magnifi</h2>
                                    <p className="p-home-m-seo-become-a-trader__item-text" data-trans="become_a_trader_item_1_text_1">
                                        Magnifi simplifies investing and democratizes investing intelligence</p>
                                </div>
                            </div>
                            <div className="comp-img">
                                <img src={sogo4} />
                            </div>
                        </div>
                        <div className="p-home-m-seo-become-a-trader__content" style={{display: "flex",marginTop:"20px",height:"250px"}}>
                            <div className="p-home-m-seo-become-a-trader__item-wrap" style={{maxWidth: "50%",width: "50%",height: "100%"}}>
                                <div className="p-home-m-seo-become-a-trader__item-wrap-content">
                                    <h2 className="com-c-title p-home-m-seo-become-a-trader__item-head" data-trans="become_a_trader_item_1_head">Olive Invest</h2>
                                    <p className="p-home-m-seo-become-a-trader__item-text" data-trans="become_a_trader_item_1_text_1">
                                        Olive Invest Improve performance by reducing volatility with option
                                        strategies that the pros have historically kept to themselves.</p>
                                </div>
                            </div>
                            <div className="comp-img">
                                <img src={sogo5} width="100%" />
                            </div>
                        </div>
                        <div className="p-home-m-seo-become-a-trader__content" style={{display: "flex",marginTop:"20px",height:"250px"}}>
                            <div className="p-home-m-seo-become-a-trader__item-wrap" style={{maxWidth: "50%",width: "50%",height: "100%"}}>
                                <div className="p-home-m-seo-become-a-trader__item-wrap-content">
                                    <h2 className="com-c-title p-home-m-seo-become-a-trader__item-head" data-trans="become_a_trader_item_1_head">EOption</h2>
                                    <p className="p-home-m-seo-become-a-trader__item-text" data-trans="become_a_trader_item_1_text_1">
                                        EOption was created with a clear purpose in mind: low-cost trades
                                        combined with fast, efficient execution. Today, our ultra low commission
                                        rates combined with our new, eOption Trader platform have elevated our
                                        original mission to an entirely new level</p>
                                </div>
                            </div>
                            <div className="comp-img">
                                <img src={sogo6} width="100%" />
                            </div>
                        </div>
                    </div>
            </div></section>
        </div>
    </div>
        </>
    )
}