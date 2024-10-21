import './kins.css'
import loki from '../about/img/5191079.jpg'


export default function Kinks(){

    return (
        <div >
            
         <div style={{color:"white"}}>
            <div className="about_us__quotex__container">
                <div className="about_us__quotex" dir="auto">
                    <h1 data-trans="about_page_intro_title" class="page-c-title page-m-intro__title">Insight</h1>
                    <h3 className="page-m-intro__description text" data-trans="about_page_intro_description">Account
                        Security.</h3>
                </div>
                <img className="about_us__quotex__image" style={{width: "300px",opacity: "0.7;"}} src={ require('../about/img/brokerage_PlatformsPicks.png')}
                 alt="about-us" srcset="img/brokerage_PlatformsPicks.png 2x, img/brokerage_PlatformsPicks.png 3x" />
            </div>
            <div className="about_us__modern">
                <div className="about_us__desires" dir="auto" style={{maxWidth: "100%"}}>
                    <h2 className="about_us__desires-title">Two
                        factor authentication
                    </h2>
                    <p className="about_us__desires-text">Two-factor authentication (2FA) is an
                        essential
                        security measure for financial services to protect user accounts and transactions.
                        It
                        adds an extra layer of security by requiring users to provide two forms of
                        identification before accessing their accounts</p>
                    <p className="about_us__desires-text">
                        Enhanced Security: 2FA adds an extra layer of security beyond just usernames and
                        passwords. It requires users to provide a second form of identification, making it
                        significantly harder for unauthorized individuals to gain access to user accounts
                        and
                        financial transactions. Even if a password is compromised, an additional
                        authentication
                        factor is required.</p>
                    <p className="about_us__desires-text">
                        Protection Against Credential Theft: With the prevalence of data breaches and
                        phishing
                        attacks, username and password combinations can be easily compromised. 2FA helps
                        mitigate the risk of credential theft by introducing a separate authentication
                        factor
                        that is difficult for attackers to obtain or replicate.</p>
                </div>
            </div>


             <div className="about_us__modern"  style={{display: "flex", justifyContent:"space-around", marginTop:"70px"}}>
                <div style={{backgroundImage: `url(${loki})`,height: "550px" ,width:"50%",
                backgroundSize: "cover",marginRight:"15px"}}>
                </div>
                <div className="p-home-m-seo-become-a-trader__item-wrap-content" style={{width:"50%"}}>
                    <h3 className="p-home-m-seo-become-a-trader__item-text" style={{marginBottom: "10px"}}>
                        Increased Security: Mobile authenticator apps generate time-based one-time
                        passwords
                        (TOTPs) that are unique for each login attempt. These passwords are typically
                        valid
                        for
                        only a short period, making them difficult for attackers to intercept or guess.
                        This
                        added security layer reduces the risk of unauthorized access to user accounts
                        and
                        financial information.</h3>
                    <h3 className="p-home-m-seo-become-a-trader__item-text" data-trans="become_a_trader_item_1_text_2">
                        Convenience and User-Friendly Experience: Mobile authenticator apps are
                        typically
                        easy
                        to use and offer a convenient way to generate verification codes. Users can
                        quickly
                        access the app on their smartphones and retrieve the code required for
                        authentication,
                        eliminating the need for reliance on external devices or waiting for codes to be
                        sent
                        via SMS or email.</h3>
                </div>
            </div> 
        </div> 
    </div>
    )
}