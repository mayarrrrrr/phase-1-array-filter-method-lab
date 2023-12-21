// Code your solution here

function findMatching(drivers,name){
    let matchingDrivers = []
    for (let i = 0;i <= drivers.length; i++){
        const driver = drivers[i];
        if (driver === name){
            matchingDrivers.push(drivers[i])
        }
    }
    return matchingDrivers
}

function fuzzyMatch(drivers,name){
    let matchingFirstLetterDrivers = []
    for ( let i =0 ;i<= drivers.length;i++){
        const driver= drivers[i]
        if (driver === name){
            matchingFirstLetterDrivers.push(driver[i])
        }
    }
    return matchingFirstLetterDrivers
}

function matchName(drivers,name){
    let nameStringMatchDrivers = []
    for (let i = 0; i <= drivers.length; i++){
        const driver = drivers[i];
        if (driver === name){
            nameStringMatchDrivers.push(driver[i])
        }
    }
    return nameStringMatchDrivers

}



