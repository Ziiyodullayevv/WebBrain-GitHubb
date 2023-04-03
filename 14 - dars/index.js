let company = {
    sales: [
        {name: "John", salary: 1000},
        {name: "Alice", salary: 1600}
    ],
    development: {
        sites: [
            {name: 'Peter', salary: 2000},
            {name: 'Alex', salary: 1800}
        ],
        internals: [
            {name: 'Jack', salary: 1300},
            {name: 'Anna', salary: 1200}
        ]
    }
};

const getCalc = (data) => {
    if(Array.isArray(data)) {
        return data.reduce((total, value) => value.salary + total, 0);
    } else {
        let sum = 0;
        for (let value of Object.values(data)) {
            sum += getCalc(value);
        }       
        return sum;
    }
}
console.log(getCalc(company));
