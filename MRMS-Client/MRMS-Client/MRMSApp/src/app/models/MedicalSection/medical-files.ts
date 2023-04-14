export class MedicalFiles {
  constructor(
    public medicalFileId?: number,
    public medicalRecordId?: number,
    public fileTypeId?: number,
    public description?: string,
    public filepath?: string,
    public date?: Date,
    public applicantName?: string,//For Searching By name
    public fileType?: string //For Searching By FileType
  ) { }
}
