document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const phn = document.getElementById("phn");

      const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;


      if (!name.value.trim()) {
        alert("Name is required");
        return;
      }

      if (!emailPattern.test(email.value)) {
        alert("Invalid email");
        return;
      }

      if (!phn.value.trim() || phn.value.length < 10) {
        alert("Enter a valid phone number");
        return;
      }

      alert("Form submitted successfully!");
      this.reset();
    });

    // To-Do List Logic
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    function addTask() {
      if (inputBox.value === '') {
        alert("You must write something!");
      } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      }
      inputBox.value = "";
      saveData();
    }

    listContainer.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    }, false);

    function saveData() {
      localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
      listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask();