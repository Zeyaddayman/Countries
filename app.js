let themeInput = document.querySelector("input[type='checkbox']");
let themeBtn = document.querySelector("header .theme label");
let header = document.querySelector("header");
let searchInput = document.querySelector("section.content .search .search-input input");
let selectBox = document.querySelector("section.content .search .select-box select");
let content = document.querySelector("section.content");
let sections = document.querySelectorAll("section");
let countryPreview = document.querySelector("section.country-preview");
let countryPreviewCard = document.querySelector("section.country-preview .card");
let backBtn = document.querySelector("section.country-preview .back");
let flags = document.querySelector("section.content .flags");

themeBtn.onclick = function () {
    if (themeInput.checked) {
        whiteTheme();
    } else {
        darkTheme();
    }
}

function darkTheme() {
    document.body.style.color = "white";
    header.classList.add("darkTheme");
    sections.forEach((section) => {
        section.classList.add("darkTheme");
    })
}

function whiteTheme() {
    document.body.style.color = "black";
    header.classList.remove("darkTheme");
    sections.forEach((section) => {
        section.classList.remove("darkTheme");
    })
}

let countriesArr = [];
let filterdArr = [];

fetch("data.json").then((all) => all.json()).then((promise) => {
    countriesArr = promise;
    filterdArr = promise;
    showData(countriesArr);
    selectCountriesBoxs();
})

function selectCountriesBoxs() {
    let countryBoxs = document.querySelectorAll("section.content .flags > div");
    countryBoxs.forEach((box) => {
        box.addEventListener("click", function () {
            openCountryPreview(box.className)
        })
    })
}

searchInput.oninput = function () {
    let newArr = filterdArr.filter((x) => x.name.toLowerCase().includes(this.value.toLowerCase()));
    showData(newArr);
    selectCountriesBoxs();
}

selectBox.onchange = function () {
    searchInput.value = "";
    if (this.value === "All") {
        filterdArr = countriesArr;
        showData(filterdArr);
    } else {
        filterdArr = countriesArr.filter((x) => x.region === this.value);
        showData(filterdArr);
    }
    selectCountriesBoxs();
}

function showData(countries) {
    flags.innerHTML = "";
    for (let i = 0; i < countries.length; i++) {
        flags.innerHTML += `
            <div class="${countries[i].name}">
                <img src="${countries[i].flags.svg}" alt="">
                <div class="info">
                    <h4 class="title">${countries[i].name}</h4>
                    <p class="population">Population: <span>${countries[i].population}</span></p>
                    <p class="region">Region: <span>${countries[i].region}</span></p>
                    <p class="capital">Capital: <span>${countries[i].capital}</span></p>
                </div>
            </div>
        `;
    }
}

function openCountryPreview (name) {
    let countryObject = countriesArr.filter((x) => x.name === name)[0];
    content.style.display = "none";
    countryPreview.style.display = "block";
    showCardInfo(countryObject);
}

function showCardInfo (countryObject) {
    countryPreviewCard.innerHTML = "";
    let currencies = ``;
    if (countryObject.currencies !== undefined) {
        for (let i = 0; i < countryObject.currencies.length; i++) {
            currencies += `<span>${countryObject.currencies[i].name}</span>`;
        }
    }
    let languages = ``;
    if (countryObject.languages !== undefined) {
        for (let i = 0; i < countryObject.languages.length; i++) {
            languages += `<span>${countryObject.languages[i].name}</span>`;
        }
    }
    let borders = ``;
    if (countryObject.borders !== undefined) {
        for (let i = 0; i < countryObject.borders.length; i++) {
            borders += `<span>${countryObject.borders[i]}</span>`;
        }
    }
    countryPreviewCard.innerHTML = `
        <img src="${countryObject.flags.svg}">
        <div>
            <div class="info">
                <div>
                    <h2 class="name">${countryObject.name}</h2>
                    <p>Native Name: <span>${countryObject.nativeName}</span></p>
                    <p>Population: <span>${countryObject.population}</span></p>
                    <p>Region: <span>${countryObject.region}</span></p>
                    <p>Sub Region: <span>${countryObject.subregion}</span></p>
                    <p>Capital: <span>${countryObject.capital}</span></p>
                </div>
                <div>
                    <p>Top Level Domain: <span>${countryObject.topLevelDomain}</span></p>
                    <p>Currencies: ${currencies}</p>
                    <p>Languages: ${languages}</p>
                </div>
            </div>   
            <div class="border-countries">
                <p>Border Countries:</p> ${borders}
            </div>
    `;
}

backBtn.onclick = function () {
    countryPreview.style.display = "none";
    content.style.display = "block";   
}