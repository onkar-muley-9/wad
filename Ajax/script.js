const studentForm = document.getElementById("studentForm");
const studentContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

const students = JSON.parse(localStorage.getItem("students")) || [];
const addStudent = (name, age, roll) => {
  students.push({ name, age, roll });
  localStorage.setItem("students", JSON.stringify(students));
  return { name, age, roll };
};

const createStudent = ({ name, age, roll }) => {
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");

  studentName.innerHTML = "Student Name is  " + name;
  studentAge.innerHTML = "Age is " + age;
  studentRoll.innerHTML = "Roll is " + roll;

  studentDiv.append(studentName, studentAge, studentRoll);
  studentContainer.appendChild(studentDiv);

  studentContainer.style.display = students.length === 0 ? "none" : "flex";
};
students.forEach(createStudent);
studentForm.onsubmit = (e) => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );

  createStudent(newStudent);

  nameInput.value, ageInput.value, rollInput.value;
};
