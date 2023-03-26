function attachEvents() {
  const button  = document.getElementById('submit');
  button.addEventListener('click', submitStudentHandler);

  function submitStudentHandler(){
    const BASE_URL ='http://localhost:3030/jsonstore/collections/students'
    const firstName = document.getElementsByName('firstName')[0];
    let firstNameValue = firstName.value;
    const lastName = document.getElementsByName('lastName')[0];
    let lastNameValue = lastName.value;
    const facultyNumber = document.getElementsByName('facultyNumber')[0];
    let facultyNumberValue = facultyNumber.value;
    const grade = document.getElementsByName('grade')[0];
    let gradeValue = grade.value;

    const tbody = document.getElementsByTagName('tbody')[0];

    if (!firstNameValue){
      alert("Please enter your first name");
      return;
    }
    if (!lastNameValue){
      alert("Please enter your last name");
      return;
    }
    if (!facultyNumberValue){
      alert("Please enter your faculty number");
      return;
    }
    if (!gradeValue || isNaN(gradeValue) ){
      alert("Please enter a valid grade");
      return;
    }

    let obj = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      facultyNumber: facultyNumberValue,
      grade: gradeValue
    }

    const HTTPheaders = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj)
    }
    
    fetch(BASE_URL,HTTPheaders)
      .then(res=>res.json())
      .then(data=>{
        firstName.value='';
        lastName.value='';
        facultyNumber.value = '';
        grade.value='';

        let tr = document.createElement('tr');

        let firstNameTH = document.createElement('th');
        firstNameTH.textContent = data.firstName;
        tr.appendChild(firstNameTH);

        let lastNameTH = document.createElement('th');
        lastNameTH.textContent = data.lastName;
        tr.appendChild(lastNameTH);

        let facultyNumberTH = document.createElement('th');
        facultyNumberTH.textContent = data.facultyNumber;
        tr.appendChild(facultyNumberTH);

        let gradeTH = document.createElement('th');
        gradeTH.textContent = data.grade;
        tr.appendChild(gradeTH);
        tbody.appendChild(tr);
      })
      .catch(err=>console.log(err));
  }

}

attachEvents();