const URL_LIST_USERS = "https://jsonplaceholder.typicode.com/users";

const olOutput = document.querySelector("#data-container")

const output = listUsers =>
    listUsers.forEach(user =>
        olOutput.innerHTML += `<li><a href="#">${user.name}</a></li>`
    );


const toggleLoader = () => {
    const loader = document.querySelector("#loader");
    loader.hasAttribute("hidden")
        ? loader.removeAttribute("hidden")
        : loader.setAttribute("hidden", "");
}

const getData = () => {
    toggleLoader();
    fetch(URL_LIST_USERS)
        .then(response => response.json()
        )
        .then(output
        )
        .catch(error => console.error("Что-то пошло не так...", error)
        )
        .finally(() => toggleLoader()
        );
}
getData();