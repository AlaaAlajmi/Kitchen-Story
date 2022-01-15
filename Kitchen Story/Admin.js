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
        ProductId = document.getElementById("ProductId").value,
        ProductName = document.getElementById("ProductName").value,
        Price = document.getElementById("Price").value,
        Availability = document.getElementById("Availability").value;
        
    if (ProductId === "") {
        alert("ProductId Cannot be empty!");
        isEmpty = true;
    } else if (ProductName === "") {
        alert("ProductName Cannot be empty!");
        isEmpty = true;
    } else if (Price === "") {
        alert("Price Cannot be empty!");
        isEmpty = true;
    } else if (Availability === "") {
        alert("Availability Cannot be empty!");
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
          
            ProductId = document.getElementById("ProductId").value,
            ProductName = document.getElementById("ProductName").value,
            Price = document.getElementById("Price").value,
            Availability = document.getElementById("Availability").value;
            
        cell1.innerHTML = ProductId;
        cell2.innerHTML = ProductName;
        cell3.innerHTML = Price;
        cell4.innerHTML = Availability;
        

        SelectRow();
        ProductId = document.getElementById("ProductId").value = "";
        ProductName = document.getElementById("ProductName").value = "";
        Price = document.getElementById("Price").value = "";
        Availability = document.getElementById("Availability").value = "";
       
    }
}
function Delclick() {
    table.deleteRow(rIndex);
    ProductId = document.getElementById("ProductId").value = "";
    ProductName = document.getElementById("ProductName").value = "";
    Price = document.getElementById("Price").value = "";
    Availability = document.getElementById("Availability").value = "";
    
}
function SelectRow() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById("ProductId").value = this.cells[0].innerHTML;
            document.getElementById("ProductName").value = this.cells[1].innerHTML;
            document.getElementById("Price").value = this.cells[2].innerHTML;
            document.getElementById("Availability").value = this.cells[3].innerHTML;
           
        };

    }
}
SelectRow();
function Ediclick() {
    if (!check()) {
        var ProductId = document.getElementById("ProductId").value,
            ProductName = document.getElementById("ProductName").value,
            Price = document.getElementById("Price").value,
            Availability = document.getElementById("Availability").value;
          
        table.rows[rIndex].cells[0].innerHTML = ProductId;
        table.rows[rIndex].cells[1].innerHTML = ProductName;
        table.rows[rIndex].cells[2].innerHTML = Price;
        table.rows[rIndex].cells[3].innerHTML = Availability;
       
    }
}
