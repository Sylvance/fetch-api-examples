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

function createPost() {
    console.log('Posting..')
    var data = {
        "title": document.getElementById('title').value,
        "userId": document.getElementById('userId').value,
        "body": document.getElementById('body').value
    }
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    })
    .then((res) => {
        res.json().then((data) => {
            console.log(data);
            makeElement(data.id, data.title, 'root', 'div');
        });
    })
    .catch((err) => {
        console.log(err);
    });
}
