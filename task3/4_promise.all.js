const URL_PHOTOS = "https://jsonplaceholder.typicode.com/photos";

const olOutput = document.querySelector("#data-container")

const output = photo =>
    olOutput.innerHTML += `
        <li class="photo-item">
  <img class="photo-item__image" src="${photo.url}" alt="Здесь должно быть ${photo.title}">
  <h3 class="photo-item__title">
    ${photo.title}
  </h3>
</li>
        `

const toggleLoader = () => {
    const loader = document.querySelector("#loader");
    loader.hasAttribute("hidden")
        ? loader.removeAttribute("hidden")
        : loader.setAttribute("hidden", "");
}

const getFastestLoadedPhoto = ids => {
    toggleLoader();
    const promiseAllPhoto = [];
    ids.forEach(id => promiseAllPhoto.push(fetch(URL_PHOTOS + `/${id}`)))
    Promise.race(promiseAllPhoto)
        .then(response => response.json()
        )
        .then(output
        )
        .catch(error => console.error("Что-то пошло не так...", error)
        )
        .finally(() => toggleLoader()
        );
}

getFastestLoadedPhoto([60, 12, 55]);
