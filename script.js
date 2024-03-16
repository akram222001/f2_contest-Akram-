/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const developer = arr.filter((employees)=>{
      return employees.profession==="developer"
    })
    developer.map((employees)=>{
      console.log(developer)
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((employee)=>{
      if(employee.profession==="developer"){
        console.log(employee)
      }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    const newArr ={ id: 4, name: "Akram", age: "23", profession: "developer" }
    arr.push(newArr)
    console.log(arr)
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const arrremov = arr.filter((employee)=>{
      return employee.profession !=="admin"
  })
  console.log(arrremov);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = [
      { id: 4, name: "Anoop", age: "22", profession: "designer" },
      { id: 5, name: "arman", age: "25", profession: "manager" },
    ];
    const concatArray = arr.concat(newArray);
    console.log(concatArray);
  }
  