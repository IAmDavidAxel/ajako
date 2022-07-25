export class User {
  name: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  dateOfBirth: string;
  email: string;
  password: string;
  token: string;
  tokenExpiracy: string;

  constructor(name: string, lastName: string, address: string, phoneNumber: string, dateOfBirth: string, email: string, password: string, token: string, tokenExpiracy: string) {
    this.name = name;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.password = password;
    this.token = token;
    this.tokenExpiracy = tokenExpiracy;
  }

}
