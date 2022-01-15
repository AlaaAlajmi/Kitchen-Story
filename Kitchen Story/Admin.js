function AdminClick() {
    window.location.assign("AdminLogin.html");
}
function LoginClick() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if (username == "Admin" && password == "1234") {
        localStorage.setItem("UserName", "Admin");
        localStorage.setItem("PassWord", "1234");
        window.location.assign("AdminPage.html");
        return false;
    } else {
        alert("Something Worng!");
    }
}
function PassowrdChangeButton() {
    window.location.assign("PasswordChange.html");
}
function AdminItemsButton() {
    window.location.assign("AdminItems.html");
}
function PasswordChange() {
    passWord = localStorage.getItem("PassWord");
    if (document.getElementById("CurrentPassword").value == passWord) {
        localStorage.setItem("UserName", "Admin");
        localStorage.setItem("PassWord", document.getElementById("NewPassword").value);
        alert("Password successfully changed")
        window.location.assign("AdminItems.html");
    }
    else {
        alert("Something Worng!");
    }
}

var rIndex,
    table = document.getElementById("Item");

function check() {
    var isEmpty = false,
        product_id = document.getElementById("product_id").value,
        product = document.getElementById("product").value,
        Discription = document.getElementById("Discription").value,
        contme = document.getElementById("contme").value;
        
    if (product_id === "") {
        alert("product_id Cannot be empty!");
        isEmpty = true;
    } else if (product === "") {
        alert("product Cannot be empty!");
        isEmpty = true;
    } else if (Discription === "") {
        alert("Discription Cannot be empty!");
        isEmpty = true;
    } else if (contme === "") {
        alert("contme Cannot be empty!");
        isEmpty = true;
    }
    return isEmpty;

}
function Addclick() {
    if (!check()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
          
            product_id = document.getElementById("product_id").value,
            product = document.getElementById("product").value,
            Discription = document.getElementById("Discription").value,
            contme = document.getElementById("contme").value;
            
        cell1.innerHTML = product_id;
        cell2.innerHTML = product;
        cell3.innerHTML = Discription;
        cell4.innerHTML = contme;
        

        SelectRow();
        product_id = document.getElementById("product_id").value = "";
        product = document.getElementById("product").value = "";
        Discription = document.getElementById("Discription").value = "";
        contme = document.getElementById("contme").value = "";
       
    }
}
function Delclick() {
    table.deleteRow(rIndex);
    product_id = document.getElementById("product_id").value = "";
    product = document.getElementById("product").value = "";
    Discription = document.getElementById("Discription").value = "";
    contme = document.getElementById("contme").value = "";
    
}
function SelectRow() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById("product_id").value = this.cells[0].innerHTML;
            document.getElementById("product").value = this.cells[1].innerHTML;
            document.getElementById("Discription").value = this.cells[2].innerHTML;
            document.getElementById("contme").value = this.cells[3].innerHTML;
           
        };

    }
}
SelectRow();
function Ediclick() {
    if (!check()) {
        var product_id = document.getElementById("product_id").value,
            product = document.getElementById("product").value,
            Discription = document.getElementById("Discription").value,
            contme = document.getElementById("contme").value;
          
        table.rows[rIndex].cells[0].innerHTML = product_id;
        table.rows[rIndex].cells[1].innerHTML = product;
        table.rows[rIndex].cells[2].innerHTML = Discription;
        table.rows[rIndex].cells[3].innerHTML = contme;
       
    }
}
