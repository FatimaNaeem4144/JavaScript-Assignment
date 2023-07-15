// *******************CH 49...52**********************
         // Question No 1
// const signupForm = document.getElementById("signupForm");
// const displayDataElement = document.getElementById("displayData");

// signupForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   const nameInput = document.getElementById("name");
//   const emailInput = document.getElementById("email");
//   const passwordInput = document.getElementById("password");

//   const name = nameInput.value;
//   const email = emailInput.value;
//   const password = passwordInput.value;

//   const formData = {
//     name: name,
//     email: email,
//     password: password
//   };

//   displayFormData(formData);
//   signupForm.reset();
// });

// function displayFormData(formData) {
//   const displayDataHtml = `
//     <h3>Form Data:</h3>
//     <p><strong>Name:</strong> ${formData.name}</p>
//     <p><strong>Email:</strong> ${formData.email}</p>
//     <p><strong>Password:</strong> ${formData.password}</p>
//   `;

//   displayDataElement.innerHTML = displayDataHtml;
// }

         // Question No 2
// const readMoreButtons = document.querySelectorAll(".read-more");
// readMoreButtons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     const item = button.closest(".item");
//     const partialDetails = item.querySelector(".partial-details");
//     const fullDetails = item.querySelector(".full-details");

//     partialDetails.classList.toggle("hide");
//     fullDetails.classList.toggle("hide");
//   });
// });


         // Question No 3
// const studentForm = document.getElementById("studentForm");
// const studentTableBody = document.querySelector("#studentTable tbody");
// const editForm = document.getElementById("editForm");
// const editNameInput = document.getElementById("editName");
// const editAgeInput = document.getElementById("editAge");
// const editGradeInput = document.getElementById("editGrade");
// const updateBtn = document.getElementById("updateBtn");
// const cancelBtn = document.getElementById("cancelBtn");

// studentForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   const nameInput = document.getElementById("name");
//   const ageInput = document.getElementById("age");
//   const gradeInput = document.getElementById("grade");

//   const name = nameInput.value;
//   const age = ageInput.value;
//   const grade = gradeInput.value;

//   const studentData = {
//     name: name,
//     age: age,
//     grade: grade
//   };

//   createStudentRow(studentData);
//   studentForm.reset();
// });

// studentTableBody.addEventListener("click", function(event) {
//   const target = event.target;
//   if (target.matches(".delete-btn")) {
//     const row = target.closest("tr");
//     row.remove();
//   } else if (target.matches(".edit-btn")) {
//     const row = target.closest("tr");
//     const name = row.querySelector(".name").textContent;
//     const age = row.querySelector(".age").textContent;
//     const grade = row.querySelector(".grade").textContent;

//     showEditForm(name, age, grade);
//   }
// });

// updateBtn.addEventListener("click", function() {
//   const name = editNameInput.value;
//   const age = editAgeInput.value;
//   const grade = editGradeInput.value;

//   updateStudentRow(name, age, grade);
// });

// cancelBtn.addEventListener("click", function() {
//   hideEditForm();
// });

// function createStudentRow(studentData) {
//   const row = document.createElement("tr");
//   row.innerHTML = `
//     <td class="name">${studentData.name}</td>
//     <td class="age">${studentData.age}</td>
//     <td class="grade">${studentData.grade}</td>
//     <td>
//       <button class="edit-btn">Edit</button>
//       <button class="delete-btn">Delete</button>
//     </td>
//   `;
//   studentTableBody.appendChild(row);
// }

// function showEditForm(name, age, grade) {
//   editNameInput.value = name;
//   editAgeInput.value = age;
//   editGradeInput.value = grade;
//   editForm.classList.remove("hidden");
// }

// function hideEditForm() {
//   editForm.classList.add("hidden");
// }

// function updateStudentRow(name, age, grade) {
//   const selectedRow = studentTableBody.querySelector("tr");
//   const nameCell = selectedRow.querySelector(".name");
//   const ageCell = selectedRow.querySelector(".age");
//   const gradeCell = selectedRow.querySelector(".grade");

//   nameCell.textContent = name;
//   ageCell.textContent = age;
//   gradeCell.textContent = grade;

//   hideEditForm();
// }
