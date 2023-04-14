export class Trade {
  constructor(
    public tradeId?: number,
    public jobTitle?: string, 
    public maleQuota?:number,
    public femaleQuota?:number, 
    public age?:number, 
    public salary?:number, 
    public currency?:string, 
    public workingHours?:number, 
    public overTime?:number,
    public food?:string, 
    public accomodation?:string, 
    public contractPeriod?:string,
    public demandId?:number 
  ) { }
}
