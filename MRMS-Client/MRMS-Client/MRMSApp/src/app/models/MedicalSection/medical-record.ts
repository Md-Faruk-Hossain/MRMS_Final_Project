import { medicalStatus } from "../shared/enum-list";

export class MedicalRecord {
  constructor(
    public medicalRecordId?: number,
    public demandId?: number,
    public applicantId?: number,
    public medicalCenterId?: number,
    public agencySyndicateId?: number,
    public medicalStatus?:medicalStatus,
    public slipIssueDate?: Date,
    public medicalDate?: Date,
    public expiryDate?: Date,
    public demand?: string,//For Searching BY Demand
    public applicant?: string,//For Searching BY Applicant
    public medicalCenter?: string,//For Searching BY MedicalCenter
    public agencySyndicate?: string//For Searching BY AgencyName

  ) { }
}
