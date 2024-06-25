
const list = document.querySelector(".list_sortable");
const list_item = document.querySelectorAll("div.list_item");

let indexItem = 0;
let indexModule = 0;

var title;
function Render(list_item) {
    list_item.forEach(function (item) {
        item.draggable = "true";
        if (item.classList.contains("active")) {
            // item.innerText = `${titleModule} ${indexModule++}: ${item.innerText}`;
            title = "Moudule";
            indexModule++;
        } else {
            title = "Bài";
            indexItem++;
            //item.innerText = `${titleItem} ${indexItem++}: ${item.innerText}`;
        }
        if (item.children.length) {
            item.innerHTML = `${title} ${title === "Moudule" ? indexModule : indexItem
                }: <span>${item.children[0].innerText}</span>`;
        } else {
            item.innerHTML = `${title} ${title === "Moudule" ? indexModule : indexItem
                }: <span>${item.innerText}</span>`;
        }
    });
}


function sortable(list, onUpdate) {
    let dragElement;
    let list_item = list.querySelectorAll(".list_item");
    Render(list_item);

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";

        var targetElement = e.target;
        if (
            targetElement &&
            targetElement !== dragElement &&
            targetElement.nodeName === "DIV"
        ) {
            const offset = getOffset(e);
            const halfHeight = getHeight(e.target);

            if (offset.y > halfHeight) {
                if (targetElement.nextSibling.parentElement === list) {
                    list.insertBefore(dragElement, targetElement.nextSibling);
                }
            } else {
                if (targetElement.parentElement === list) {
                    list.insertBefore(dragElement, targetElement);
                }
            }
        }
    }

    function handleDragEnd(e) {
        e.preventDefault();

        dragElement.classList.remove("hide");
        list.removeEventListener("dragover", handleDragOver);
        list.removeEventListener("dragend", handleDragEnd);

        onUpdate(dragElement);
    }

    list.addEventListener("dragstart", function (e) {
        dragElement = e.target;

        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("Text", dragElement.textContent);

        list.addEventListener("dragover", handleDragOver);
        list.addEventListener("dragend", handleDragEnd);

        setTimeout(function () {
            dragElement.classList.add("hide");
        }, 0);
    });
}

sortable(list, () => {
    indexItem = 0;
    indexModule = 0;
    let list_item = list.querySelectorAll(".list_item");
    Render(list_item);
});
