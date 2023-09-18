console.log("Hello world!!!!");

console.log("Doing operations IMPERATIVELY...")

fetch('https://cs571.org/api/f23/weekly/week02', {
    headers: {
        "X-CS571-ID": CS571.getBadgerId()
    }
})
.then(res => {
    console.log(res.status);
    return res.json()
})
.then(data => {
    console.log("I recieved data!");
    console.log(data)
    
    document.getElementById('person-name').innerText = data.name
    
    console.log("Favorite colors...");
    for (const color of data.favColors) {
        console.log(color)
    }

    console.log("Semesters with more than 15 credits...");
    for (const sem of data.creditHistory) {
        if(sem.cred > 15) {
            console.log(sem.semester)
        }
    }

    // Note: THIS IS AN OBJECT.
    const plants = data.plants;
    let alivePlants = [];
    for (const plant in plants) {
        if(plants[plant].alive) {
            alivePlants.push(plant);
        }
    }
    console.log("Surviving plants...")
    console.log(alivePlants);
});

console.log("Even though I am 'after' the fetch, I am printed out first! Why? Fetch happens async!")