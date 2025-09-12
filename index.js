console.log("It's working")
const emptyField = document.querySelector(".emptyField");
const listOfItems = document.querySelector(".listOfItems");
const submitButton = document.querySelector(".submitButton");

function addingItems() {
    let div = document.createElement("div");
    div.setAttribute("class", 'div')

    let item = document.createElement("p");
    listOfItems.appendChild(div);
    div.appendChild(item);

    item.textContent = emptyField.value;
    emptyField.value = "";
    item.setAttribute("class", "item");
    item.setAttribute("class", "inside-item");

    const clearBtn = document.createElement("button");
    clearBtn.setAttribute("class", "inside-item");
    div.appendChild(clearBtn);
    clearBtn.textContent = "clear"

    clearBtn.addEventListener("click", () => div.parentElement.removeChild(div));
}
submitButton.addEventListener("click", addingItems)