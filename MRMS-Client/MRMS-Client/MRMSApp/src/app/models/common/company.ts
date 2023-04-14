export class Company {
  constructor(
    public companyId?:number, 
    public name?:string,
    public details?:string, 
    public address?:string,
    public email?:string,
    public phone?:string, 
    public countryId?:string
  ) { }
}
