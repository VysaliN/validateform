var selectedRow = null

        function onFormSubmit() {
            if (validate()) {
                var formData = readFormData();
                if (selectedRow == null)
                    insertNewRecord(formData);
                else
                    updateRecord(formData);
                resetForm();
            }
        }
        function readFormData() {
            var formData = {};
            formData["fullName"] = document.getElementById("fullName").value;
            formData["email"] = document.getElementById("email").value;
            formData["phone"] = document.getElementById("phone").value;
            formData["date"] = document.getElementById("date").value;
            formData["empCode"] = document.getElementById("empCode").value;
            formData["salary"] = document.getElementById("salary").value;
            formData["pwd"] = document.getElementById("pwd").value;
            formData["address"] = document.getElementById("address").value;
            formData["url"] = document.getElementById("url").value;
            return formData;
        }
        function insertNewRecord(data) {
            var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.fullName;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.email;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.phone;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.date;
            cell5 = newRow.insertCell(4);
            cell5.innerHTML = data.empCode;
            cell6 = newRow.insertCell(5);
            cell6.innerHTML = data.salary;
            cell7 = newRow.insertCell(6);
            cell7.innerHTML = data.pwd;
            cell8 = newRow.insertCell(7);
            cell8.innerHTML = data.address;
            cell9 = newRow.insertCell(8);
            cell9.innerHTML = data.url;
            cell10= newRow.insertCell(9);
            cell10.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
        }
        function resetForm() {
            document.getElementById("fullName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("date").value = "";
            document.getElementById("empCode").value = "";
            document.getElementById("salary").value = "";
            document.getElementById("pwd").value = "";
            document.getElementById("address").value = "";
            document.getElementById("url").value = "";
            selectedRow = null;
        }
        function onEdit(td) {
            selectedRow = td.parentElement.parentElement;
            document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
            document.getElementById("email").value = selectedRow.cells[1].innerHTML;
            document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
            document.getElementById("date").value = selectedRow.cells[3].innerHTML;
            document.getElementById("empCode").value = selectedRow.cells[4].innerHTML;
            document.getElementById("salary").value = selectedRow.cells[5].innerHTML;
            document.getElementById("pwd").value = selectedRow.cells[6].innerHTML;
            document.getElementById("address").value = selectedRow.cells[7].innerHTML;
            document.getElementById("url").value = selectedRow.cells[8].innerHTML;
        
        }
        function updateRecord(formData) {
            selectedRow.cells[0].innerHTML = formData.fullName;
            selectedRow.cells[1].innerHTML = formData.email;
            selectedRow.cells[2].innerHTML = formData.phone;
            selectedRow.cells[3].innerHTML = formData.date;
            selectedRow.cells[4].innerHTML = formData.empCode;
            selectedRow.cells[5].innerHTML = formData.salary;
            selectedRow.cells[6].innerHTML = formData.pwd;
            selectedRow.cells[7].innerHTML = formData.address;
            selectedRow.cells[8].innerHTML = formData.url;
        }
        function onDelete(td) {
            if (confirm('Are you sure to delete this record ?')) {
                row = td.parentElement.parentElement;
                document.getElementById("employeeList").deleteRow(row.rowIndex);
                resetForm();
            }
        }
        function validate() {
            isValid = true;
            if (document.getElementById("fullName").value == "") {
                isValid = false;
                document.getElementById("fullNameValidationError").classList.remove("hide");
            } else {
                isValid = true;
                if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
                    document.getElementById("fullNameValidationError").classList.add("hide");
                }
                return isValid;
            }
        


        