import React from 'react';
import s from './Header.module.scss'
import Logo from "./logo/Logo";
import {useMediaQuery} from "react-responsive";
import MobileLogo from "./mobilelogo/MobileLogo";

const Header = () => {
    const isMobile = useMediaQuery({maxWidth: 765});

    return (
        <header>

            <div className={s.header_menu_block}>

                {!isMobile ? <Logo /> : <MobileLogo />}


                <div className={s.button_block}>
                    <button className={s.open_account}>Open account</button>
                </div>

            </div>

            <div className={s.header_block_wrapped}>

                <div className={s.header_wrapped_up_block}>
                    <h1 className={s.header_title}>
                        Trade Gold with 0 commission
                    </h1>

                    <span className={s.header_about}>
                            Maximize profits with a broker offering the most favorable terms
                    </span>

                    <button className={s.trade_gold_button}>
                        Trade gold
                    </button>
                </div>


                <div className={s.header_wrapped_down_block}>
                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/wrapped_vector.png')} draggable={false}/>

                        <span className={s.about_vector}>
                            Fast execution
                        </span>
                    </div>

                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/wrapped_vector2.png')} draggable={false}/>

                        <span className={s.about_vector}>
                           Stable spreads
                        </span>
                    </div>

                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/wrapped_vector3.png')} draggable={false}/>

                        <span className={s.about_vector}>
                          Instant withdrawils
                        </span>
                    </div>

                    <div className={s.wrapped_down_vector_block}>
                        <img src={require('../../assets/wrapped_vector4.png')} draggable={false}/>

                        <span className={s.about_vector}>
                            Zero commisions
                        </span>
                    </div>
                </div>
            </div>


            <div className={s.line_block}>
                <div className={s.line_up_block}>
                    <h3 className={s.line_up_block_title}>
                        Calculate your potential profit
                    </h3>

                    <span className={s.line_up_block_about}>
                        How much can you make with an investment of $250?
                    </span>
                </div>


                <div className={s.line_mid_block}>
                    <div className={s.mid_block_div}>
                        <span className={s.mid_block_div_investment}>You investment</span>

                        {!isMobile

                            ?    <img src={require('../../assets/line.png')} draggable={false}/>

                            :    <img src={require('../../assets/mobile_line.png')} draggable={false}/>
                        }

                    </div>

                    <div className={s.mid_block_div}>
                        <span className={s.mid_block_div_profit}>You Profit</span>
                        <span className={s.mid_block_div_money}>$127.000</span>
                    </div>
                </div>

                <button className={s.start_trading_now_button}>
                    Start trading now
                </button>
            </div>

            {/*    </>*/}
            {/*) : (*/}
            {/*    <>*/}

            {/*        <HeaderMobile/>*/}
            {/*    </>*/}
            {/*)}*/}
        </header>
    );
};

export default Header;