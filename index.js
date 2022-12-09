
function getToDos() {
    // using fetch
    
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         let output ="";
    //        data.forEach(element => {
    //            output +=
    //                `
    //                 <div class="card">
    //                     <div class="title">${element.title}</div>
    //                     <div class="description">${element.body}</div>
    //                 </div>

    //                 `
    //        });
    //         document.getElementById("output").innerHTML = output;
    //     })
    //     .catch((error) => {
    //         console.log('error', error);
    //     });


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




