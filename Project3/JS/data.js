let dataList = [
    { name: "Ahmed", age: 25, city: "Cairo" },
    { name: "Mona", age: 22, city: "Alexandria" },
    { name: "Omar", age: 30, city: "Giza" },
    { name: "Sara", age: 20, city: "Aswan" },
    { name: "Khaled", age: 28, city: "Mansoura" }
];

const tableBody = document.getElementById("tableBody");

function renderTable(data) {
    
    tableBody.innerHTML = ""; 

    
    for (let i = 0; i < data.length; i++) {
        let person = data[i];
        
        
        let row = `<tr>
            <td>${person.name}</td>
            <td>${person.age}</td>
            <td>${person.city}</td>
        </tr>`;
        
        
        tableBody.innerHTML += row; 
    }
}
renderTable(dataList);
const searchBox = document.getElementById("searchBox");
const sortNameBtn = document.getElementById("sortNameBtn");
const sortAgeBtn = document.getElementById("sortAgeBtn");

searchBox.addEventListener("input", function() {
    let searchValue = searchBox.value.toLowerCase();

    let filteredData = dataList.filter(function(person) {
        return person.name.toLowerCase().includes(searchValue) || person.city.toLowerCase().includes(searchValue);
    });

    renderTable(filteredData);
});

sortNameBtn.addEventListener("click", function() {
    dataList.sort(function(a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    });

    renderTable(dataList);
});

sortAgeBtn.addEventListener("click", function() {
    dataList.sort(function(a, b) {
        return a.age - b.age;
    });
    renderTable(dataList);
});