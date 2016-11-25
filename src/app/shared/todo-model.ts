export class TodoModel {
  constructor (
    public subject : string,
    public content : string,
    public isDone : boolean = false,
    public isImportan : boolean = false
  ) {}
}
