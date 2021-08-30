
class EmployeeData{
    id;
    name;
    profilePic;
    gender;
    department;
    salary;
    note;
    startDate;

    setId(id){
        this.id=id;

    }

    getId(){
        return this.id;
    }

    setName(name){
        this.name=name;

    }

    getName(){
        return this.name;
    }

    setProfilePic(profilePic){
        this.profilePic=profilePic;

    }

    getProfilePic(){
        return this.profilePic;
    }

    setGender(gender){
        this.gender=gender;
    }

    getGender(){
        return this.gender;
    }

    setDepartment(department){
        this.department=department;
    }

    getDepartment(){
        return this.department;
    }

    setSalary(salary){
        this.salary=salary;
    }

    getSalary(){
        return this.salary;
    }

    setNote(note){
        this.note=note;
    }

    getNote(){
        return this.note;
    }

    setStartDate(date){
        this.startDate=date;
    }

    getStartDate(){
        return this.startDate;
    }

}

// let list=[];



// function show(d1,d2,d3,d4,d5,d6,d7,d8){
//     let employeeData=new EmployeeData();
//     employeeData.setId(d8);
//     employeeData.setName(d1);
//     employeeData.setGender(d3);
//     employeeData.setDepartment(d4);
//     employeeData.setNote(d7);
//     employeeData.setSalary(d5);
//     employeeData.setProfilePic(d2);
//     employeeData.setStartDate(d6);

//     list.push(employeeData);    
//     console.log(list);
//     showme(d1,d2,d3,d4,d5,d6,d7,d8);
// }
// const i=0;
// function showme(d1,d2,d3,d4,d5,d6,d7,d8){
    
//     // document.getElementById("demo").innerHTML="";
    
//     // var data=list[0].getName();
//     // document.getElementById("demo").innerHTML=data;
//     var table=document.getElementById('addRows');
//      var row = table.insertRow(i);
//      var cell1 = row.insertCell(0);
//      var cell2 = row.insertCell(1);
//      var cell3 = row.insertCell(1);
//      var cell4 = row.insertCell(1);
//      var cell5 = row.insertCell(1);
//      var cell6 = row.insertCell(1);
//      var cell7 = row.insertCell(1);
//      var cell8 = row.insertCell(1);

//      cell1.innerHTML = d1;
//      cell2.innerHTML = d2;
//      cell3.innerHTML = d3;
//      cell4.innerHTML = d4;
//      cell5.innerHTML = d5;
//      cell6.innerHTML = d6;
//      cell7.innerHTML = d7;
//      cell8.innerHTML = d8;
 
//      row.insertCell(col1);
//      row.insertCell(col2);
//      row.insertCell(col3);
//      row.insertCell(col4);
//      row.insertCell(col5);
//      row.insertCell(col6);
//      row.insertCell(col7);
//      row.insertCell(col8);
 
//      document.getElementById('addRows').appendChild(row);
//      i++;
// }



function show(d1,d2,d3,d4,d5,d6,d7,d8){
    let list=JSON.parse(localStorage.getItem("objList"));
    var flag=0;
    for(var i=0;i<list.length;i++){
        if(list[i].id===d8){
            var check=confirm("want to update employee details");
            flag=1;
        }
    }
    if(flag==0){
    var id=d8;
    var name=d1;
    var gender=d3;
    var department=d4;
    var note=d7;
    var salary=d5;
    var pic=d2;
    var date=d6;

    let obj={
        "id":id,
        "name":name,
        "gender":gender,
        "department":department,
        "note":note,
        "salary":salary,
        "pic":pic,
        "date":date
    }

    if(list != undefined){
        list.push(obj);
    }else{
        list=[obj];
    }

    console.log(list);
    localStorage.setItem("objList",JSON.stringify(list));
}
}

// function showDetails(){
//     let list =JSON.parse(localStorage.getItem("objList"));
//     var table =document.getElementById("addRows");
//     for(var i=0;i<list.length;i++){
//         var table = document.getElementById("addRows");
//         var row = table.insertRow(i);
//         var cell1 = row.insertCell(0);
//         var cell2 = row.insertCell(1);
//         cell1.innerHTML = list[i].getId();
//         cell2.innerHTML = list[i].getName();

//         // console.log(list[i].getId);
//     }
// }


