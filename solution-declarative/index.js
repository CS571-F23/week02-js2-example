console.log("Hello world!!!!");

console.log("Doing operations DECLARATIVELY...")

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
    data.favColors.forEach((color) => console.log(color));

    console.log("Semesters with more than 15 credits...");
    data.creditHistory
        .filter(sem => sem.cred > 15)
        .forEach(sem => console.log(sem.semester));
    
    console.log("Surviving plants...");
    // Note: THIS IS AN OBJECT.
    const plantNames = Object.keys(data.plants);
    const alivePlants = plantNames.filter(name => data.plants[name].alive)
    console.log(alivePlants);
});

console.log("Even though I am 'after' the fetch, I am printed out first! Why? Fetch happens async!")