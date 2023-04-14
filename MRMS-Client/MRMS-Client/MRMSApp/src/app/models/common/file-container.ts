

export class FileContainer {
  constructor(
    public fileTypeId?: number | null,
    public name?: string,
    public filepath?: string,
    public description?: string,
    public date?: Date,
    public file? : File | null

  ) { }
}
