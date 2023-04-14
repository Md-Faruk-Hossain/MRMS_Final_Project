
import { issueStatus } from "../shared/enum-list";
export class DemandIssue {
  constructor(
    public demandIssueId?: number,
    public demandId?: number,
    public title?: string,
    public description?: string,
    public status?: issueStatus,
    public issueDate?: Date,
    public resolveDate?: Date

  ) { }
}
