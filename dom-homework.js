const myDiv = document.querySelector("#myDiv");

if (myDiv) {

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to DOM homework";
    myDiv.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.textContent = "This is your first DOM homework assignment";
    myDiv.appendChild(paragraph);


    const ulElement = document.createElement("ul");
    const items = ["Nayan", "Karim", "Abid"];
    items.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        ulElement.appendChild(li);
    });
    myDiv.appendChild(ulElement);


    heading.classList.add("highlight");


    const button = document.createElement("button");
    button.textContent = "Add new list item";
    myDiv.insertAdjacentElement("afterend", button);

   
    button.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = `New List Item ${ulElement.children.length + 1}`;
        li.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        ulElement.appendChild(li);
    });
    if (myDiv) {
    myDiv.addEventListener('click', () => {
        myDiv.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
}
}