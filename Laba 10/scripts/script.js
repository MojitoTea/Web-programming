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

let dogs;

html = document.querySelector("html");
let list ="";

function showDog(id) {
    $("#modal").show();
    $(".modal-content").slideDown();
    $(".modal-content>img").attr({
        src: `https://usersdogs.dmytrominochkin.cloud/${dogs[id].dogImage}`,
        alt: `dog${id}`
    });
    $(".modal-content>section>.name").html(dogs[id].title);
    $(".modal-content>section>.data.sex").html(dogs[id].sex);
    $(".modal-content>section>.data.age").html(dogs[id].age);
    $(".modal-content>section>.data.description").html(dogs[id].description);
    $("body").css("overflow", "hidden");
    // $("ul").slideUp();
}

function hideDog() {
    $("#modal").hide();
    $(".modal-content").slideUp();
    $("body").css("overflow", "scroll");
}

$( ()=>
    {
    $("#modal").hide(0);
    $(".modal-content").hide(0);
    fetch('https://usersdogs.dmytrominochkin.cloud/dogs')

    .then(response => response.json())
    .then(json => {
        dogs=json;
        dogs.forEach(element =>{
            $("ul").append(
                `<li id="dog${element.id}">
                <div>
                    <img alt="dog" src="https://usersdogs.dmytrominochkin.cloud/${element.dogImage}">
                </div>
                <b class="name">${element.title}</b>
                <p class="sex">${element.sex}</p>
                </li>`
            );
            $(`ul li:nth-child(${element.id})`).click(() => {showDog(element.id-1)});
        })
    $(".close").click(() => {hideDog()})
    });})
