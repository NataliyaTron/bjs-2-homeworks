function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...marks) {
  if (this.marks === undefined) {
    this.marks = marks;
  } else {
    this.marks = this.marks.concat(marks);
  }
}

Student.prototype.getAverage = function() {
  if (this.marks === undefined) {
    return 'Нет оценок';
  } else {
    return this.marks.reduce((acc,v) => acc + v, 0) / this.marks.length;
  }
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
}


student1.setSubject("Algebra");
console.log(student1.getAverage());

student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage());
console.log(student1);

student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)

