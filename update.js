var empname;
function update(val){
    location.href = './update.html';
    var obj;
    let list =JSON.parse(localStorage.getItem("objList"));
            
    for(var i=0;i<list.length;i++){
        if(list[i].id==val){
            obj={
                "id":list[i].id,
                "name":list[i].name,
                "gender":list[i].gender,
                "department":list[i].department,
                "note":list[i].note,
                "salary":list[i].salary,
                "pic":list[i].pic,
                "date":list[i].date
            }
        }
    }    
    localStorage.setItem("updateObj",JSON.stringify(obj));
}

function updateData(){
    
            var data=JSON.parse(localStorage.getItem("updateObj"));
            
            document.getElementById('name').value=data.name;
            document.getElementById('profile').value=data.pic;
            document.getElementById('gender').value=data.gender;
            document.getElementById('department').value=data.department;
            document.getElementById('salary').value=data.salary;
            document.getElementById('startdate').value=data.date;
            document.getElementById('note').value=data.note;
            document.getElementById('id').value=data.id;
}

function updateNewData(){
    var obj={
                "id":document.getElementById("id").value,
                "name":document.getElementById("name").value,
                "gender":document.getElementById("gender").value,
                "department":document.getElementById("department").value,
                "note":document.getElementById("note").value,
                "salary":document.getElementById("salary").value,
                "pic":document.getElementById("profile").value,
                "date":document.getElementById("startdate").value,
    }

            let list =JSON.parse(localStorage.getItem("objList"));
            
            for(var i=0;i<list.length;i++){
                if(list[i].id==document.getElementById("id").value){
                    list.splice(i, 1);
                    list.splice(i, 0, obj);

                }
            }      
            localStorage.setItem("objList",JSON.stringify(list));
            // console.log();
            location.href = './localdata.html';

}

