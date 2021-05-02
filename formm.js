$(function(){

    $("#add").click(AddData);
    $("table #body").on("click","#update",updatedata)
    $("#UPD").prop('disabled',true)
    var i=0;
    $("table #body").on("click","#remove",function(){

        $(this).closest('tr').remove();

    });
    
  
});
var i=0;
currentRow = null;
function AddData(){
    let name=$("#inputname").val();
    let NamePattern = new RegExp("(^[A-Za-z]{1,10})+$"); 
    if (!NamePattern.test(name)) {
        alert('Enter only alphabets and Size must be less then 10');
        return false;
        
    }
    
    let check = $('.chkbx:checked').val();
   
    let age=$("#age").val();
    if (age < 10 || age > 50) {
        alert("Incorrect Age: Must be between 10 to 50");
        return false;
    }
    
   let city= $('#cities option:selected').text();
   
   
   i++;
    markup = '<tr id="row'+i+'"><td class="name">' + name + '</td> <td class="gender">'+check+'</td> <td class="age">'+age+'</td> <td class="city">'+city+'</td> <td><button id="update">Update</button>/<button id="remove">Remove</button></td></tr>';
   tableBody = $("table #body").append(markup);
   console.log(i)

    

   
}


function updatedata(){
    let Name = $(this).closest("tr").find("td.name").text();
   
    let Age = $(this).closest("tr").find("td.age").text();
    let City = $(this).closest("tr").find("td.city").text();

    $("#inputname").val(Name);
    
    $("#age").val(Age);
    $('#cities option:selected').text(City);
  
    $("#UPD").prop('disabled',false)
    $("#Form").on("click","#UPD",function(){
        let a=$("#inputname").val();
    
    let b= $('#cities option:selected').text();
 
    let c=$("#age").val();
    let d = $('.chkbx:checked').val();

    
    markup1 = '<tr id="row'+i+'"><td class="name">' + a + '</td> <td class="gender">'+d+'</td> <td class="age">'+c+'</td> <td class="city">'+b+'</td> <td><button id="update">Update</button>/<button>Remove</button></td></tr>';
    
    $('#row'+ i).replaceWith(markup1);
    
    
  

  
    

          

        
        
    
    
        
    
      
        
    
    
    
   

    

    console.log(a);
    console.log(b);
    console.log(c);
    
    

    
   

    });

        
    

   

   
     
   

   
}



