function fetchdata() {
    return fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
    // .then(datas =>console.log(datas))
}
let d = document.createElement('div')
d.setAttribute('class', 'container')
d.setAttribute('id', 'container')
document.body.appendChild(d)

let row = document.createElement('div')
row.setAttribute('class', 'row')
d.append(row);
function createlist() {
    fetchdata()
        .then(data => {
            data.forEach(element => {
                let card = document.createElement('div')
                card.setAttribute('class', 'card col-lg-4 col-sm-12')
                row.appendChild(card);

                let cardheader = document.createElement('div');
                cardheader.setAttribute('class', 'card-header text-center');
                cardheader.innerHTML = element.name.common;
                card.append(cardheader);

                let cardbody = document.createElement('div');
                cardbody.setAttribute('class', 'card-body text-center p-3 card-design');
                cardbody.innerHTML = `<img class="mx-auto d-block" src= ${element.flags.png} height = '90' width='200' >`
                card.append(cardbody)

                let capital = document.createElement('p');
                capital.setAttribute('class', 'text-center')
                capital.innerText = `Capital=${element.capital}`;
                cardbody.appendChild(capital);



                let region = document.createElement('p');
                region.setAttribute('class', 'text-center')
                region.innerText = `Region=${element.region}`;
                cardbody.appendChild(region);


                let population = document.createElement('p');
                population.setAttribute('class', 'text-center')
                population.innerText = `Country code=${element.cca3}`;
                cardbody.appendChild(population);


                let btn = document.createElement('button')
                btn.setAttribute('type', 'button')
                btn.setAttribute('id', 'button')
                btn.innerText = "click for weather"
                btn.setAttribute('class', 'btn text-center border border-dark ')
                btn.addEventListener('click', function (event) {

                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${element.name.common}&appid=b90b28e8b14e09c1f9110a26d3ffdc8b`, { method: "GET" })
                        .then(response => response.json())
                        .then(data => {
                            alert(`The temperature of ${element.name.common} is ${data.coord.lon} Fahrenheit`)
                        })
                        .catch(error => {
                            alert(`${error}`)
                        })

                })

                cardbody.append(btn)



            });
        })

}

createlist()