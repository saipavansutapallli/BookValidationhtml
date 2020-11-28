function validateForm(){
    var isbn=document.getElementById("isbnId").value.trim();
    var title=document.getElementById("titleId").value.trim();
    var price=document.getElementById("priceId").value.trim();
    var type=document.getElementById("typeId").value.trim();
    var publisher=document.getElementById("publisherId").value.trim();
    var Author=document.getElementById("AuthorId").value.trim();

    if(isbn==""){
        document.getElementById("isbnmsg").innerHTML="ISBN field cannot be empty";
        return false;
    }
    if(title==""){
        document.getElementById("titlemsg").innerHTML="Title field cannot be empty";
        return false;
    }
    if(price=="" || isNaN(price)){
        document.getElementById("pricemsg").innerHTML="Enter valid price";
        return false;
    }
    if(type==""){
        document.getElementById("booktypemsg").innerHTML="Type field cannot be empty";
        return false;
    }
    var Copies=document.getElementById("CopiesId").value.trim();
    if(isNaN(Copies)){
        document.getElementById("copiesmsg").innerHTML="Please Enter valid number of copies";
        return false;
    }
    if(Copies>=10){
        document.getElementById("copiesmsg").innerHTML="Number of copies sholud be below 10";
        return false;
    }
    if(Copies=="" || Copies<1){
        document.getElementById("copiesmsg").innerHTML="Enter atleast 1 copy";
        return false;
    }
    if(publisher==""){
        document.getElementById("publishermsg").innerHTML="Publisher field cannot be empty";
        return false;
    }
    if(Author==""){
        document.getElementById("authormsg").innerHTML="Author field cannot be empty";
        return false;
    }
    alert("Your data has been succesfully submitted!!!");
return true;

}
