 //initializing

 var todoInput = document.querySelector(".todo-input");
 var todoButton = document.querySelector(".todo-button");
 var todoList = document.querySelector(".todo-list");

 //Event Handling
 todoButton.onclick = create;
 todoList.onclick = deletecheck;

 //function

 function create(e) {

     // checking for empty input.

     if (todoInput.value != "") {
         e.preventDefault();

         //creating new div for list items.
         var newDiv = document.createElement("div");
         newDiv.classList.add("todo");

         //creating new list item.
         var newLi = document.createElement("li");
         newLi.classList.add("todo-item");
         newLi.innerHTML = todoInput.value;
         newDiv.appendChild(newLi);

         // creating check button for that item.
         var checkbtn = document.createElement("button");
         checkbtn.classList.add("check-btn");
         checkbtn.innerHTML = '<i class="fa fa-check"></i>';
         newDiv.appendChild(checkbtn);

         // creating delete button for that item.
         var deletebtn = document.createElement("button");
         deletebtn.classList.add("delete-btn");
         deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
         newDiv.appendChild(deletebtn);

         // appending new div to static unordered list as child.
         todoList.appendChild(newDiv);

         // empty the input field.
         todoInput.value = "";
     }

     // if empty displaying alert.
     else {
         e.preventDefault();
         alert("input is empty. please give an input.");
     };
 }


 // function of check and delete list item.
 function deletecheck(e) {
     var item = e.target;
     if (item.classList[0] === "delete-btn") {
         var parent = item.parentNode;
         parent.remove();
     };
     if (item.classList[0] === "check-btn") {
         var parent = item.parentNode;
         parent.classList.toggle("completed");
     };
 };