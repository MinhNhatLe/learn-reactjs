import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {

};

function CounterFeature(props) {

    // sử dụng useDispatch để lấy dispatch trong redux
    const dispatch = useDispatch();

    //useSelector là 1 HOOK
    // Giúp lấy state trong redux
    const count = useSelector(state => state.count);

    const handleIncreaseClick = () => {

        // lấy ra cái action trong counterSlice
        // ấy vào trong dispatch
        const action = increase(count);
        console.log(action);
        dispatch(action);
    }
    const handleDecreaseClick = () => {
        const action = decrease(count);
        console.log(action);
        dispatch(action);
    }
    return (
        <div>
            <h3>
                Này  là học redux
                Ví dụ đơn giản
            </h3>
            <br />
            Counter: {count}
            <div>
                <button onClick={handleIncreaseClick}>
                    Increase
                </button>
                <button onClick={handleDecreaseClick}>
                    Decrease
                </button>
            </div>
        </div>
    );
}

export default CounterFeature;