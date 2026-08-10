
import Slider from '@mui/material/Slider';
import React, { useRef } from 'react';
import { useSearchParams } from 'react-router';
import styles from './BasicSlider.module.css'


export function BasicSlider() {

    const [_searchParams, setSearchParams] = useSearchParams();

    const [value, setValue] = React.useState<number[]>([1, 10]);
    const timerRef = useRef(0);


    const handleChange = (_event: Event, newValue: number | number[]) => {
        setValue(newValue as number[])
        const range = newValue as number[];
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setSearchParams(prev => {
                prev.set('vote_average.gte', range[0].toString());
                prev.set('vote_average.lte', range[1].toString());
                return prev;
            });
        }, 500)
    };



    return (
        <div>
            <div className={styles.sliderTop}>
                <div>Rating</div>
                <div>{value[0] + ' - ' + value[1]}</div>
            </div>
            <Slider
                value={value}
                onChange={handleChange}
                min={1}
                max={10}
                step={0.1}
                disableSwap
                color='error'    // Показывает значение при наведении/перетаскивании
            />
        </div>

    );
}