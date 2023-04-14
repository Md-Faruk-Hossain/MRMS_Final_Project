export class Visa {
  constructor(
    public visaId?: number,
    public visaNumber?: number,
    public refNumber?: number,
    public applicantId?: number,
    public issueDate?: number,
    public expiryDate?: number,
    public name?: string  
  ) { }
}
