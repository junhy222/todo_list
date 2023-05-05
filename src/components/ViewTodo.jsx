import React from "react";
import { updateStorege } from "../util/Storage";
import styles from "../css/ViewTodo.module.css"

export default function ViewTodo( {progress, todoList, setTodoList} ) {

    const onChange = (e) => {
        let id = e.target.id.split('_')[0];
        const newTodoList = todoList.map((item) => (
            item.id === id ? {...item, check: !item.check, progress: !item.check ? 'DONE' : 'ING'} : item
        ));
        setTodoList(newTodoList);
        updateStorege(newTodoList);
    };

    if (todoList === null) return  <div className={styles.tab_content}>할 일이 없습니다.!</div>;
    return (    
        <div className={styles.tab_content}>
            <table>
                <tbody>
                    {todoList
                        .filter(todo => (
                            ('ALL' === progress) ||
                            ('ING' === progress && todo.check === false) ||
                            ('DONE'=== progress && todo.check === true)))
                        .map(todo => (
                            <tr key={todo.id + '_tr'}>
                                <td key={todo.id + '_td'}>
                                    <input type="checkbox"
                                        id={todo.id + '_chk'}
                                        onChange={onChange}
                                        checked={todo.check}></input>
                                </td>
                                <td className={todo.check === true ? styles.done_context : ""}>{todo.content}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}