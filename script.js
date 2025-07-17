function addTask() {
  const taskInput = document.getElementById("taskInput");
  const imageInput = document.getElementById("imageInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();
  const file = imageInput.files[0];
  if (taskText === "" && !file) return;
  const li = document.createElement("li");
  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;
  li.appendChild(textSpan);
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      li.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.className = "remove";
  removeBtn.onclick = () => li.remove();
  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = "";input
  imageInput.value = ""; 
}
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  const message = document.getElementById("formMessage");
  message.style.display = "block";
  this.reset();
  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
});