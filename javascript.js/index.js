
class Student{
    constructor(name,age,marks){
      this.name=name;
      this.age=age;
      this.marks=marks;
    }
    setPlacementAge(minPlacementAge) {
      
    return (minMarks)=>{
        
        if(this.age>=minPlacementAge && this.marks>=minMarks)
        {
             return true;
        }
        else
        {
            return false;
        }
       
    }
  }

  
}
  
  
  function createNewStudents(name, age, marks){
    const Riya=new Student(name, age, marks);
    
    console.log(Riya.setPlacementAge(18)(40))
  
  }
  createNewStudents("yash",20,50);