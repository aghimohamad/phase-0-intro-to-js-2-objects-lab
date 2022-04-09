const employee = {
    name : 'aghi',
    streetAddress: '2310',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newo = {...employee};
      newo[key] = value;
      return newo;
}
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
      employee[key] = value;
      return employee;
}
function   deleteFromEmployeeByKey(employee, key){
    const newo = {...employee};
     delete newo[key];
      return newo;
}
function   destructivelyDeleteFromEmployeeByKey(employee, key) {
    
      delete employee[key];
      return employee;
} 
