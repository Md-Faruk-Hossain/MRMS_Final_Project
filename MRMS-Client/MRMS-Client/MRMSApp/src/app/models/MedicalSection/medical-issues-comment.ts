export class MedicalIssuesComment {
  constructor(
    public medicalIssueCommentId?: number,
    public medicalIssueId?: number,
    public comment?: string,
    public medicalIssue?: string//For searching
  ) { }
}
