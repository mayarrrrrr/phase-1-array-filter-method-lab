const drivers = [
    {
        name: "Derrick Osano",
        occupation: "truck driver"
    },

    {
        name: "Melvine Chebor",
        occupation: "van driver"
    },

    {
        name: "Wesley Mwangi",
        occupation: "bike driver"
    },
    {
        name: "Paula Liz",
        occupation: "truck driver"
    }
];


function findMatching(job) {
    return job.occupation === "truck driver";
}

console.log(drivers.filter(findMatching))