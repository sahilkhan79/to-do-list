var i = 0;
btn.onclick = () => {
  let li = document.createElement("li");
  li.innerHTML = item.value;
  li.style.cursor = "pointer";
  menu.appendChild(li);
  item.value = "";
  item.focus();

  let ic = document.createElement("span");
  ic.innerHTML = "<i class='fa-solid fa-trash' onclick='del(" + i + ")'></i>";
  ic.setAttribute("style", "cursor: pointer;");
  li.appendChild(ic);
  i++;

  li.onclick = () => {
    li.style.textDecoration = "line-through";
    li.style.color = "black";
  };

  li.ondblclick = () => {
    menu.removeChild(li);
  };
  del = function () {
    let targetToDo = event.currentTarget.parentNode;
    199;
    targetToDo.parentNode.remove(targetToDo);
  };
};
