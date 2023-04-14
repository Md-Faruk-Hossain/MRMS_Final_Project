export class Demand {
  constructor(
    public demandId?: number,
    public title?: string,
    public demandExpiryDate?: Date,
    public companyId?: number,
    public companyName?: string
  ) { }
}
