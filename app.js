
// let customerList = [];


// function addCustomerOnAction(){
//     // console.log("Add Customer");

//     let txtName = document.getElementById("txtName").value;
//     let txtAge = document.getElementById("txtAge").value;
//     let txtAddress = document.getElementById("txtAddress").value;
//     let txtSalary = document.getElementById("txtSalary").value;
//     let txtContact = document.getElementById("txtContact").value;
    

//     console.log(txtName);
//     console.log(txtAge);
//     console.log(txtAddress);
//     console.log(txtSalary);
//     console.log(txtContact);

//     let customer = {
//         name: txtName,
//         age: txtAge,
//         address: txtAddress,
//         salary: txtSalary,
//         contact: txtContact
//     }

//     customerList.push(customer);

//     console.log(customerList);

//     let body = "";

// for (let customer of customerList){
//     body+=`
//     <tr>
//         <td>${customer.name}</td>
//         <td>${customer.age}</td>
//         <td>${customer.address}</td>
//         <td>${customer.salary}</td>
//         <td>${customer.contact}</td>
//     </tr>
//     `
// }

// console.log(body);

// document.getElementById("tblCustomers").innerHTML = body;
// }




// function ItemDetails(){

//     let itemList = [];

//     let itemID = document.getElementById("itemID").value;
//     let itemName = document.getElementById("itemName").value;
//     let price = document.getElementById("price").value;
//     let quantity = document.getElementById("quantity").value;
    

//     console.log(itemID);
//     console.log(itemName);
//     console.log(price);
//     console.log(quantity);
    

//     let item = {
//         name: itemID,
//         age: itemName,
//         address: price,
//         salary: quantity
//     }

//     itemList.push(item);

//     console.log(itemList);
// }


let customer = {
    name: "saman",
    age: "12",
    address: "walana",
    salary: 75000,
    contact: {
        provider: "dialog",
        contactNo: "0778765887",
        data:{
            sample: "0001",
            test01: {
                vm: "KP98",
                sv: "KP80"
            }
        }
    },

    orders:[
        {
            name: "egg bun",
            qtyOnHand: 5,
            unitPrice: 150
        },
        {
            name: "veg bun",
            qtyOnHand: 2,
            unitPrice: 100
        }
    ]
}

// console.log.apply(customer.contact.data.test01.vm);