import React, {useState} from 'react';
import s from './Header.module.scss'
import Logo from "./logo/Logo";
import {useMediaQuery} from "react-responsive";
import MobileLogo from "./mobilelogo/MobileLogo";


const Header = () => {

    const isMobile = useMediaQuery({maxWidth: 765});

    const scrollToElement = () => {
        const element = document.getElementById('scrollTarget');
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }

    const [sliderValue, setSliderValue] = useState(250);
    const [profit, setProfit] = useState(312)
    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setSliderValue(value);
        setProfit(Math.floor(value * 1.25))
    };

    const calculateBackgroundColor = () => {
        const percentage = (sliderValue - 250) / (25000 - 250) * 100;
        const color = `linear-gradient(to right, #F0A719 ${percentage}%, #fff ${percentage}%)`;
        return { background: color };

    };


    return (
        <header>

            <div className={s.header_menu_block}>

                {!isMobile ? <Logo/> : <MobileLogo/>}


                <div className={s.button_block}>
                    <button
                        onClick={scrollToElement}
                        className={s.open_account}>Open account
                    </button>
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

                    <button
                        onClick={scrollToElement}
                        className={s.trade_gold_button}>
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


                        <div className={s.investment_line}>
                            <input
                                className={s.slider}
                                type="range"
                                min="250"
                                max="25000"
                                step="250"
                                value={sliderValue}
                                onChange={handleChange}
                                style={calculateBackgroundColor()}
                            />
                            <div className={s.slider_prices}>
                                <span className={s.slider_price}>$250</span>
                                <span className={s.slider_price2}>${sliderValue}</span>
                                <span className={s.slider_price}>$25000</span>
                            </div>

                        </div>


                    </div>

                    <div className={s.mid_block_div}>
                        <span className={s.mid_block_div_profit}>You Profit</span>
                        <span className={s.mid_block_div_money}>${profit}</span>
                    </div>
                </div>

                <button
                    onClick={scrollToElement}
                    className={s.start_trading_now_button}>
                    Start trading now
                </button>
            </div>

        </header>
    );
};

export default Header;