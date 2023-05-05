const KEY = 'todo';

export function getStorage() {
    const todoStr = window.localStorage.getItem(KEY);
    return JSON.parse(todoStr);
}

export function setStorege(todo) {
    const todoList = getStorage() || [];
    let id = 1;
    if (todoList.length !== 0) {
        id = Number(todoList[todoList.length -1].id) + 1;
    }
    const json = [...todoList, {...todo, id: String(id)}];
    window.localStorage.setItem(KEY, JSON.stringify(json));
    return getStorage();
}

export function updateStorege(todoList) {
    window.localStorage.setItem(KEY, JSON.stringify(todoList));
}

export function removeStorege() {
    window.localStorage.removeItem(KEY);
}

