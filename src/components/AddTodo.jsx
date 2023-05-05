import React, { useState } from "react";
import { removeStorege, setStorege } from "../util/Storage";
import styles from "../css/AddTodo.module.css"

export default function AddTodo( {progress, setTodoList} ) {

    const [content, setContent] = useState("");

    const onChange = (e) => {
        const content = e.target.value;
        setContent(content)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (e.target.content) {
            const todo = {
                check: false,
                progress: 'ING',
                content: e.target.content.value
            };
            setTodoList(setStorege(todo));
            setContent("");
        } else {
            alert("no content");
        }
    };

    const onDeleteSubmit = (e) => {
        e.preventDefault();
        removeStorege();
        setTodoList(null);
    };
    
    return (
        <div className={styles.content}>
            { progress === 'DONE' || 
            <form onSubmit={onSubmit}>
                <input type="text" className={styles.input} id="content" name="content" value={content} onChange={onChange}/>
                <button type="submit" className={styles.add_button}>Add</button>
                <button className={styles.delete_button} onClick={onDeleteSubmit}>Delete</button>
            </form>
            }
        </div>
    ) 
}
