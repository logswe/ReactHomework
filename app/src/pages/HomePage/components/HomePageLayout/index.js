import React from 'react'

import { ROUTES } from "../../../../routes/routeNames"
import styles from "./styles.module.scss"

const HomePageLayout = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <a href={ROUTES.COUNTER_PAGE} className={styles.button}>counter</a>
            
        </div>
    )
}

export default HomePageLayout;
