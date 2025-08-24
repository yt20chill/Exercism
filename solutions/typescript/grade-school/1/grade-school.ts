export class GradeSchool {
  private student: Record<number, Array<string>> = {};
  private studentRecord: Array<{ name: string, grade: number }> = [];

  private roster() {
    const copyOfStudent = JSON.parse(JSON.stringify(this.student));
    return copyOfStudent;
  }

  private add(name: string, grade: number) {
    //if student name exists
    const duplicateStudent = this.studentRecord.find((studentObj) => studentObj.name === name);
    console.log(duplicateStudent);
    if (duplicateStudent) {
      //remove the duplicate student from his/her original grade
      this.student[duplicateStudent.grade].splice(
        this.student[duplicateStudent.grade].indexOf(name),
        1
      );
      //renew the student's grade
      duplicateStudent.grade = grade;
    }
    if (this.student.hasOwnProperty(grade)) {
      this.student[grade].push(name);
    } else {
      this.student[grade] = [];
      this.student[grade].push(name);
    }
    this.student[grade].sort();
    this.studentRecord.push({ name, grade });
  }

  private grade(grade: number) {
    const copyOfGrade = this.student[grade]? this.student[grade].slice(): [];
    return copyOfGrade;
  }
}
