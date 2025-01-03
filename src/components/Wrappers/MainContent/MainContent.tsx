import { FC } from "react";
import { type IMainContent } from "./types";
import styles from './styles/MainContent.module.css'

const MainContent: FC<IMainContent> = ({children}) => {
    return (
        <div className={styles["main-content"]}>
            {children}
        </div>
    );
};

export default MainContent;