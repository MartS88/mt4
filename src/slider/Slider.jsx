import React, { useState } from 'react';
import s from './Slider.module.scss';

const Slider = () => {
    const [sliderValue, setSliderValue] = useState(250);

    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setSliderValue(value);
    };
    console.log('sliderV', sliderValue)
    const calculateBackgroundColor = () => {
        const percentage = (sliderValue - 250) / (25000 - 250) * 100;
        const color = `linear-gradient(to right, #F0A719 ${percentage}%, #fff ${percentage}%)`;
        return { background: color };
    };

    return (
        <div className={s.input_line}>
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
                <span className={s.sliderValue}>${sliderValue}</span>

        </div>
    );
};

export default Slider;




