import sampleJsondata from './sampleJsondata.json' with { type: 'json' };

var sampleArray = sampleJsondata;
console.log(sampleArray);

//Get all the countries from Asia continent /region using Filter method
const asiaARegion = sampleArray.filter(element => {
   return  element.region == 'Asia'
})
console.log('Asia: ', asiaARegion);

//Get all the countries with a population of less than 2 lakhs using Filter method
const populationbasedCountries = sampleArray.filter(element => {
    return element.population < 200000
})

console.log('country based less than 2L population: ',populationbasedCountries);

//Print the following details name, capital, flag, using forEach method
const Name = populationbasedCountries.forEach(ele => {
console.log('Name: ', ele.name.common)
});

const capital = populationbasedCountries.forEach(ele => {
    if(ele.capital != undefined){
        console.log('Capital: ', ele?.capital[0])
    }
});

const flag = populationbasedCountries.forEach(ele => {
    console.log('Flag: ',ele.flag)
})

//Print the country that uses US dollars as currency

