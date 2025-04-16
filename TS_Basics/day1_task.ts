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
    getFullAdress() : string;
    getFullName() : string;
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
    contactNumbers: ["123-456-7890", "098-765-4321"],
     getFullName(): string {
      const fullname : string = this.firstName + " " + this.lastName
      return fullname;
    },
    getFullAdress():string{
      const fullAddress = this.address.street + ", " + this.address.city + ", " + this.address.pincode
      return fullAddress ;
    }
  };

 
  

  console.log(person.getFullName());
  console.log(person.getFullAdress());   