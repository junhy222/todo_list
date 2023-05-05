import React from "react";
import styles from "../css/SelectProgress.module.css"

export default function SelectProgress( {progress, setProgress} ) {

    const onChange = (e) => {
        setProgress(e.target.value);
    };

    return (
        <div className={styles.tab_wrapper}>
            <div className={styles.tab_item}>
                <input type="radio" id="progress_all" name="progress" value="ALL" checked={progress === 'ALL'} onChange={onChange} />
                <label className={styles.tab_label} htmlFor="progress_all">All Todo List</label>
            </div>
            <div className={styles.tab_item}>
                <input type="radio" id="progress_ing" name="progress" value="ING" checked={progress === 'ING'} onChange={onChange}/>
                <label className={styles.tab_label} htmlFor="progress_ing">In progressing</label>
            </div>
            <div className={styles.tab_item}>
                <input type="radio" id="progress_done" name="progress" value="DONE" checked={progress === 'DONE'} onChange={onChange}/>
                <label className={styles.tab_label} htmlFor="progress_done">Complete</label>
            </div>
        </div>
    );
}