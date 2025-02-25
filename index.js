// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: "11 Broadway"
  }

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
  }

  const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => { 
    employee[key] = value; return employee };

    function deleteFromEmployeeByKey(employee, key) {
        const newEmployee = {...employee};
        delete newEmployee[key];
        return newEmployee;
      }

      const destructivelyDeleteFromEmployeeByKey = (employee, key) => { 
        delete employee[key]; return employee };