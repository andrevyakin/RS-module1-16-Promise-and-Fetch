const URL_LIST_USERS = "https://jsonplaceholder.typicode.com/users";
const olOutput = document.querySelector("#data-container")

const output = (listUsers, arrayUsersId) => {
    //Проверка, чтобы можно было запускать getData() и/или getUsersByIds(arrayUsersId)
    if (arrayUsersId)
        listUsers = listUsers.filter(user => arrayUsersId.includes(user.id));
    listUsers.forEach(user => {
        olOutput.innerHTML += `<li><a href="#">${user.name}</a></li>`
    });
}

const toggleLoader = () => {
    const loader = document.querySelector("#loader");
    loader.hasAttribute("hidden")
        ? loader.removeAttribute("hidden")
        : loader.setAttribute("hidden", "");
}

const getData = (arrayUsersId) => {
    toggleLoader();
    fetch(URL_LIST_USERS)
        .then(response => response.json()
        )
        .then(listUsers => output(listUsers, arrayUsersId)
        )
        .catch(error => console.error("Что-то пошло не так...", error)
        )
        .finally(() => toggleLoader()
        );
}
const getUsersByIds = arrayUsersId => {
    getData(arrayUsersId);
}
//getData();
getUsersByIds([5, 6, 2, 1]);
