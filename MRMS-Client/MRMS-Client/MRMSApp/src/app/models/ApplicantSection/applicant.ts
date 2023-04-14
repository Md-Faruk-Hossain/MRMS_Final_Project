import { eduction, gender, maritalStatus, religion } from "../shared/enum-list";

export class Applicant {
  constructor(
    public applicantId?: number,
    public passsportNo?: string,
    public passportExpiry?: Date,
    public height?: number,
    public weight?: number,
    public jobExperience?: string,
    public agentId?: number,
    public name?: string,
    public fathersName?: string,
    public mothersName?: string,
    public spouse?: string,
    public presentAddress?: string,
    public permanentAddress?: string,
    public dateOfBrith?: Date,
    public phoneNumber?: string,
    public nid?: string,
    public birthCertificateNo?: string,
    public email?: string,
    public nationality?: string,
    public picture?: string,
    public pictureFile?: File,
    public gender?: gender,
    public religion?: religion ,
    public maritalStatus?: maritalStatus,
    public education?: eduction
  ) { }


}
