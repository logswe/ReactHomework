import React from 'react';
import PropTypes from "prop-types";

import styles from "./styles.module.scss";
import { ROUTES } from "../../../routes/routeNames";

const Counter = ({ countValue, handleIncrement, handleDecrement, handleReset }) => {
    return (
        <div>
           <h1>Counter</h1>
           <a href={ROUTES.HOME_PAGE} className={styles.button}>Home Page</a>
           <div className={styles.wrapper}>
               <div className={styles.screen}>{countValue}</div>
               {countValue % 2 === 0 ? <div className={styles.evenBlock}>Четное число</div> : <div className={styles.unevenBlock}>Нечетное число</div>}
               <div className={styles.controlsArea}>
                   <button className={styles.controlButton} onClick={handleDecrement}>Decrement</button>
                   <button className={styles.controlButton} onClick={handleReset}>Reset</button>
                   <button className={styles.controlButton} onClick={handleIncrement}>Increment</button>
               </div>

           </div>
        </div>
    )
}

Counter.propTypes = {
    countValue: PropTypes.number.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired

}

export default Counter;