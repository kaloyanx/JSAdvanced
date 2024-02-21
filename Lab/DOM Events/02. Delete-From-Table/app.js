function deleteByEmail() {
   let email = document.getElementsByName("email")[0].value;
    let table = document.querySelectorAll("#customers tr td:nth-child(2)");
    document.getElementById("result").textContent = "Not found."
    for (td of table){
        if (td.textContent == email){
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById("result").textContent = "Deleted."
            document.getElementsByName("email")[0].value = "";
        }
    }
}

