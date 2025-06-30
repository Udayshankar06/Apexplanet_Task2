
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all required fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Message sent successfully!");
  document.getElementById('contactForm').reset();
});

// ---------- To-Do List Logic ----------
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Task cannot be empty.");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskValue;

  li.addEventListener('click', () => {
    li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.background = "transparent";
  deleteBtn.style.border = "none";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.addEventListener('click', () => li.remove());

  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = "";
}

function clearTasks() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    document.getElementById('taskList').innerHTML = "";
  }
}

// ---------- Image Gallery ----------
function addImage() {
  const url = document.getElementById('imageURL').value.trim();
  if (!url) {
    alert("Please enter an image URL.");
    return;
  }

  const img = document.createElement('img');
  img.src = url;
  img.alt = "User Added Image";

  img.onerror = function () {
    alert("Invalid image URL. Please try another.");
    img.remove();
  };

  document.getElementById('imageContainer').appendChild(img);
  document.getElementById('imageURL').value = "";
}
