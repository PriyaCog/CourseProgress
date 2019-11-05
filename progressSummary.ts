export interface IProgressSummary{
    Title:string;
    Description:string;
    DocumentType:string;
    CourseType:string;
    IsCourseCompleted:boolean;
    Screenshots:URL;
}

export class ProgressSummary implements IProgressSummary {

    constructor(
        public Title:string,
        public Description:string,
        public DocumentType:string,
        public CourseType:string,
        public IsCourseCompleted:boolean,
        public Screenshots:URL) {
    }
}
