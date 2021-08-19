//searchbar function
const searchbarFunction = () => {
  var input, filter, ul, li, i, txtValue;
  input = document.getElementById('searchbar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("studentContainer");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName("name")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//converts strings to nums and gets average of nums
 const getArrayAverage = (array) => {
  var sum = 0;
  for (j=0; j<array.length; j++) {
      array[j] = parseInt(array[j], 10);
  }
  let numArray = array;
  for (i=0; i<array.length; i++) {
    sum += numArray[i];
  }
  return sum/array.length;
};

//fetch
 const getStudents = async () => {
   try {
     const res = await fetch("http://hp-api.herokuapp.com/api/characters/students");
     let students = await res.json();
     renderStudents(students)
   } catch (error) {
     console.log(error);
   }
 }

 //add users to webpage
 const renderStudents = (students) => {
   const htmlString = students
   .map((student) => {
     return `<div class="user">
                        <li>
                        <img class="pic" src="${student.image}" >
                        <section class="info">
                        <h2 class="name">${student.name}</h2>
                        <p>House: ${student.house}</p>
                        <p>DOB: ${student.dateOfBirth}</p>
                        <p>Ancestry: ${student.ancestry}</p>
                        </section>
                        <input type="checkbox" id="toggle${student.actor}" class="toggle" />
                        <label class="title" for="toggle${student.actor}"></label>
                        <div class="content">
                        <p>Species: ${student.species}<br>
                           Gender: ${student.gender}<br>
                           Eye Colour: ${student.eyeColour}<br>
                           Hair Colour: ${student.hairColour}
                        </p>
                        </div>
                        </div>
                        </li>
                        </div>`;                      
   })
   .join('');
   studentContainer.innerHTML = htmlString;
 };
   

getStudents();


