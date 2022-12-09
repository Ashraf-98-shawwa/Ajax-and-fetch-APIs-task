
const addBtn = document.getElementById("add")
const closeBtn = document.getElementById("close")
const createBtn = document.getElementById("create")

const formBtns = document.querySelector(".formBtns")
const inputForm = document.querySelector(".input")

addBtn.onclick = _ => {
    addBtn.style.display = "none"
    formBtns.style.display = "flex"
    inputForm.style.display = "block"
    scrollTo(0, document.body.scrollHeight);
}

closeBtn.onclick = _ => {
    addBtn.style.display = "block"
    formBtns.style.display = "none"
    inputForm.style.display = "none"
}

createBtn.onclick = _ => {
    addBtn.style.display = "block"
    formBtns.style.display = "none"
    inputForm.style.display = "none"
    createToDo()
}


function createToDo() {

    const myPost = {
        userId: parseInt(Math.random() * 10),
        title: document.getElementById("Title-Input").value,
        body: document.getElementById("Description-Input").value,
    };


    // Post using Fetch 
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(myPost),
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => {
            console.log('error', error);
        });

    
    let newToDo = `
                        <div class="card">
                            <div class="title">${myPost.title}</div>
                            <div class="description">${myPost.body}</div>
                        </div>
                        
                        `
    document.getElementById("output").innerHTML += newToDo;

}



function getToDos() {
    // using AJAX 
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.response);
            let output = "";
            data.forEach(element => {
                output +=
                    `
                        <div class="card">
                            <div class="title">${element.title}</div>
                            <div class="description">${element.body}</div>
                        </div>
                        
                        `
            });
            document.getElementById("output").innerHTML = output;

        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            throw Error('sth went wrong');
        }
    };

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send();
};
getToDos()
