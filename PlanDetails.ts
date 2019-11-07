export interface IPlanDetails {
    AssociateId:string,
    Week:string,
    Day: string,
    Date:Date,
    CourseCode:string,
    CourseTitle:string,
    DocumentType:string,
    ReferenceUrl:string,
    CourseType:string,
    CompletionDate:string
}

export class PlanDetails implements IPlanDetails {

    constructor(
        public AssociateId: string,
        public Week: string,
        public Day: string,
        public Date: Date,
        public CourseCode: string,
        public CourseTitle: string,
        public DocumentType: string,
        public ReferenceUrl:string,
        public CourseType:string,
        public CompletionDate:string
        ) {
    }
}
