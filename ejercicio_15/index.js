"use strict";

let university = {
  name: "South American Institute",
  location: "Cuenca",
  numberOfStudents: 5000,
  offersOnlineClasses: true,
  degrees: ["Technical", "Nursing", "Gastronomy"]
};
alert(university.name + ", Location: " + university.location + ", Students: " + university.numberOfStudents + ", Online classes: " + university.offersOnlineClasses + ", Degrees: " + university.degrees.join(", "));
