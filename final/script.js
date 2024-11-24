function addTask(inputId, listId) {
    const input = document.getElementById(inputId);
    const taskList = document.getElementById(listId);
    const taskName = input.value.trim();

    if (taskName !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox">
            <span class="task-name">${taskName}</span>
            <button class="delete-btn">Delete</button>
        `;

        listItem.querySelector(".delete-btn").addEventListener("click", () => {
            listItem.remove();
        });

        taskList.appendChild(listItem);
        input.value = "";
    }
}

document.getElementById("addDay1Btn").addEventListener("click", () => addTask("day1Input", "day1List"));
document.getElementById("addDay2Btn").addEventListener("click", () => addTask("day2Input", "day2List"));
document.getElementById("addDay3Btn").addEventListener("click", () => addTask("day3Input", "day3List"));

let dayCount = 3;

function createDayHTML(dayNumber) {
    return `
        <div class="input-container">
            <label for="day${dayNumber}Input" class="day-label">Day ${dayNumber}</label>
            <input type="text" id="day${dayNumber}Input" placeholder="Enter a place for Day ${dayNumber}" title="Place for Day ${dayNumber}">
            <button id="addDay${dayNumber}Btn">Add</button>
        </div>
        <ul id="day${dayNumber}List" class="task-list"></ul>
    `;
}

document.getElementById("addNewDayBtn").addEventListener("click", () => {
    dayCount++;
    const todoListSection = document.querySelector(".todo-list-section");

    const newDayContainer = document.createElement("div");
    newDayContainer.classList.add("todo-day");
    newDayContainer.id = `day${dayCount}Container`;
    newDayContainer.innerHTML = createDayHTML(dayCount);

    todoListSection.appendChild(newDayContainer);
    todoListSection.insertBefore(newDayContainer, document.getElementById("addNewDayBtn"));

    document.getElementById(`addDay${dayCount}Btn`).addEventListener("click", () => {
        addTask(`day${dayCount}Input`, `day${dayCount}List`);
    });
});
