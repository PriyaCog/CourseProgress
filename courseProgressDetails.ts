export interface ICourseProgressDetails{
    AssociateId:string;
    AssociateName:string;
    CoursesCompletionStatus:boolean;
}

export class CourseProgressDetails implements ICourseProgressDetails {

    constructor(
        public AssociateId:string,
        public AssociateName:string,
        public CoursesCompletionStatus:boolean) {
    }
}
