interface Address {
    street: string;
    city: string;
    pincode: number;
  }
  
interface PersonInfo {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    contactNumbers: string[];
  }

var person:PersonInfo = {    
    firstName: "Alice",
    lastName:"Stake",
    age:20,
    address:{
        street: "123, Main St",
        city: "Anytown",
        pincode: 12345
    },       
    contactNumbers: ["123-456-7890", "098-765-4321"]
  };

  function GetFullName(person:PersonInfo): string {
    const fullname = person.firstName + " " + person.lastName
    return fullname;
  }

  function GetFullAdress(person:PersonInfo):string{
    const fullAddress = person.address.street + ", " + person.address.city + ", " + person.address.pincode
    return fullAddress ;
  }

  console.log(GetFullName(person));
  console.log(GetFullAdress(person));   