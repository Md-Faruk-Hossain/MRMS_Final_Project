import { issueStatus } from "../shared/enum-list";

export class MedicalIssues {
  constructor(
    public medicalIssueId?: number,
    public medicalRecordId?: number,
    public title?: string,
    public description?: string,
    public issueStatus?: issueStatus,
    public issueDate?: Date,
    public resolveDate?: Date,
    public applicant?: string//For Searching by Applicant

  ) { }
}
