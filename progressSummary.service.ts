import { ProgressSummary } from '../../../providers/models/model/progressSummary';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProgressSummaryService {
    constructor(private httpClient: HttpClient) {}


//  public getAssociate(associateId?: string): Observable<ProgressSummary[]> {
//         return of(this.getDetails());
//     }

//     private getDetails():ProgressSummary[]{
//         const first={
//             Title:"Angular",
//             Desciption:"Angular learning",
//             DocumentType:"PDF",
//             CourseType:"Skillsoft",
//             IsCourseCompleted:true
//         };
//         const second={
//             Title:"React",
//             Desciption:"React learning",
//             DocumentType:"PDF",
//             CourseType:"Pluralsight",
//             IsCourseCompleted:false
//         };
//         const third={
//             Title:"MVC",
//             Desciption:"MVC learning",
//             DocumentType:"PDF",
//             CourseType:"Skillsoft",
//             IsCourseCompleted:true
//         };
    
//     return [first, second, third] as ProgressSummary[];
// }

getSummary(associateID:string): Observable<any> {
    debugger
        var apiURL = `https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('ProgressSummary')/items?$filter=AssociateID eq ${associateID}`;
        return this.httpClient.get(apiURL).pipe(map((response: any) => {
            return of(response);
        }));
    }
}    
