let array = [
    {
    name: "Isis",
    tel: "3315264832",
    gender: "F",
    location: "Guadalajara",
    },
    {
    name: "Laura",
    tel: "3313490759",
    gender: "F",
    location: "Zapopan",
    },
    {
    name: "Lalo",
    tel: "3315345621",
    gender: "M",
    location: "Guadalajara",
    },
    {
    name: "Donald",
    tel: "3315985621",
    gender: "M",
    location: "Zapopan",
    },
    {
    name: "Alexa",
    tel: "3315985621",
    gender: "F",
    location: "Guadalajara",
    }
];


const sorting = (data) => {
    data.sort((lastvalue, newvalue) => {
            return lastvalue.name > newvalue.name ? 1 : lastvalue.name < newvalue.name ? -1 : 0;
    });
};
sorting(array);     

const filtering = (data, prop, value) => {
    return data.filter(x => x[prop] === value);
};

const filteringArray = filtering(array, "name", "Isis")

console.log(array);
console.log(filteringArray);        


//Agrupar por ejemplo todos los hombres y todas las mujeres
const grouping = (data, prop) => {
    return data.reduce((current, x) => {
        if (!current[x[prop]]) {
            current[x[prop]] = [];
        }
        current[x[prop]].push(x);
        return current;
}, {});
}             
const groupedarray = grouping(array, 'gender');
console.log(groupedarray);


//maping
const mapingColors = data => {
    return data.map(x => {
        return {...x, color: x.gender === "F" ? "green" : "yellow"}
        });
}
sorting(array);
const finalArray = grouping(mapingColors(filtering(array, "location", "mxn")), 'gender');
console.log(finalArray);