import React from 'react';
import s from './Main.module.scss'
import {useMediaQuery} from "react-responsive";


const Main = () => {
    const isMobile = useMediaQuery({maxWidth: 765});

    return (
        <main>

            <div className={s.main_icons_block}>
            <h3>
                Why invest with MTrading?
            </h3>

            <div className={s.main_icons}>

                <div className={s.main_icon}>

                    <img src={require('../../assets/vector.png')} width={60} height={60} draggable={false}/>

                    <span className={s.icon_title}>

                            Professional Tools
                        </span>

                    <span className={s.about}>
                           Use ready-to-go trading strategies and indicators for confident trading.
                        </span>
                </div>

                <div className={s.main_icon}>

                    <img src={require('../../assets/vector2.png')} width={60} height={60} draggable={false}/>

                    <span className={s.icon_title}>

                           Unrestricted Trading
                        </span>

                    <span className={s.about}>
                          Log into the platform and trade from any device.
                        </span>
                </div>

                <div className={s.main_icon}>

                    <img src={require('../../assets/vector3.png')} width={60} height={60} draggable={false}/>

                    <span className={s.icon_title}>

                         Secure

                        </span>

                    <span className={s.about}>
                          Segregated client accounts, without merging client and company investments.
                        </span>
                </div>

            </div>

            <div className={s.main_icons}>

                <div className={s.main_icon}>

                    <img src={require('../../assets/vector4.png')} width={60} height={60} draggable={false}/>

                    <span className={s.icon_title}>

                          Global
                        </span>

                    <span className={s.about}>
                           With over 25 locations, we are trusted by over 1,000,000 clients.
                        </span>
                </div>

                <div className={s.main_icon}>

                    <img src={require('../../assets/vector5.png')} width={60} height={60} draggable={false}/>

                    <span className={s.icon_title}>

                          Free Education
                        </span>

                    <span className={s.about}>
                        Learn how to trade profitably in webinars and master classes.
                        </span>
                </div>

                <div className={s.main_icon}>

                    <img src={require('../../assets/vector6.png')} width={60} height={60} draggable={false}/>

                    <span className={s.icon_title}>

                         Support
                        </span>

                    <span className={s.about}>
                          Get 24/7 support in your native language.
                        </span>
                </div>
            </div>
            </div>


            <div className={s.start_block}>

                <h3 className={s.start_block_title}> How to start</h3>

                <div className={s.start_block_items}>

                    <div className={s.start_block_item}>
                        <img src={require('../../assets/frame.png')} width={48} height={48} draggable={false}/>
                        <span className={s.start_block_item_about}>
                            Open an account
                        </span>

                        {!isMobile
                            ?     <img src={require('../../assets/image.png')} draggable={false}/>
                            :     <img src={require('../../assets/mobile_image.png')} draggable={false}/>
                        }

                    </div>

                    <div className={s.start_block_item}>
                        <img src={require('../../assets/frame2.png')} width={48} height={48} draggable={false}/>
                        <span className={s.start_block_item_about}>
                            Make deposit with <div className={s.start_block_item_about2}>40+ methods</div>
                        </span>

                        {!isMobile
                            ?     <img src={require('../../assets/image2.png')} draggable={false}/>
                            :     <img src={require('../../assets/mobile_image2.png')} draggable={false}/>
                        }
                    </div>

                    <div className={s.start_block_item}>
                        <img src={require('../../assets/frame3.png')} width={48} height={48} draggable={false}/>
                        <span className={s.start_block_item_about}>
                            Trade gold and take you profit
                        </span>

                        {!isMobile
                            ?     <img src={require('../../assets/image3.png')} draggable={false}/>
                            :     <img src={require('../../assets/mobile_image3.png')} draggable={false}/>
                        }
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Main;