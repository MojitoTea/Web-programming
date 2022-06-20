class Dog {
    constructor(id, title, sex, age, description, dogImage)
    {
        this.id = id;
        this.title = title;
        this.sex = sex;
        this.age = age;
        this.description = description;
        this.dogImage = dogImage;
    }
}


let arr;
function showDog(id) {
    
    modal.innerHTML =
    `
    <div class="modal-content">
        <img src="https://usersdogs.dmytrominochkin.cloud/images/dog/p${arr[id-1].id}.jpeg">
        <section class="mod">
            <b class="name">${arr[id-1].title}</b>
            <hr>
            <p class="about">Sex</p>
            <p class="data">${arr[id-1].sex}</p>
            <hr>
            <p class="about">Age</p>
            <p class="data">${arr[id-1].age}</p>
            <hr>
            <p class="about">Personality</p>
            <p class="data">${arr[id-1].description}</p>
        </section>
        <button class="button-close-modal">X</button>
    </div>
    `;
    close_button = document.querySelector(".button-close-modal");
    list.hidden="true";
    // let body = document.querySelector("body");
    window.addEventListener("click", e => {
        if (e.target === html || e.target == close_button) {   
            list.hidden="";
            modal.innerHTML ="";
        }
        console.log(e.target);
    },
    true);

}
html = document.querySelector("html");

fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
.then(response => response.json())
.then(json => {
    arr=json;
    json.forEach(element => {
        list.innerHTML += 
        `<li onclick="showDog(${element.id})">
            <div>
                <img alt="dog" src="https://usersdogs.dmytrominochkin.cloud/${element.dogImage}">
            </div>
            <b class="name">${element.title}</b>
            <p class="sex">${element.sex}</p>
        </li>`;
    });
});

