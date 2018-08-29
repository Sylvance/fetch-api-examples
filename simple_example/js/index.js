// let token = localStorage.getItem('token')
// let app = document.getElementById('root')
let form = document.getElementById('create-post')

if (form) {
    form.addEventListener("submit", createPost);
}


function makeElement(id, name, parentId, elementType, template){
    elem = document.createElement(elementType);
    elem.innerHTML = `id: ${id} <br /> repo-name: ${name} <br /> <br />`
    elem.setAttribute('data-id' , id);
    parentElem = document.getElementById(parentId)
    console.log(parent) 
    parentElem.append(elem);
}

function getRepos() {
    console.log("Fetching repos ...")
    fetch("https://api.github.com/users/sylvance/repos", {
        method: "GET",
        mode: "cors"
    })
    .then((res) => {
        res.json().then((data) => {
            console.log(data)
            data.forEach(function (repo) {
				makeElement(repo.id, repo.name, 'root', 'div');
			});
        });
    })
    .catch((err) => {
        console.log(err);
    });
}

function createPost(event) {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
            // "Authorization": token
        },
        body: new FormData(form)
    })
    .then((res) => {
        res.json().then((data) => {
            console.log(data);
            makeElement(data.id, app, 'div');
        });
    })
    .catch((err) => {
        console.log(err);
    });
}
