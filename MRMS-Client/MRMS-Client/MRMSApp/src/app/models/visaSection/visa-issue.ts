
import { issueStatus } from "../shared/enum-list";
export class VisaIssue {
 /* visaNumber: string | number | undefined;*/
  constructor(
    public visaIssueId?: number,
    public visaId?: number,
    public title?: string,
    public description?: string,
    public status?: issueStatus,
    public issueDate?: Date,
    public resolveDate?: Date,
    public visaNumber?: number | "" | undefined

  ) { }
}
