import { CourseProgressDetails } from '../../../providers/models/model/courseProgressDetails';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CourseProgressService {
    constructor(private httpClient: HttpClient) {
    }



//  public getAssociate(): Observable<CourseProgressDetails[]> {
//         return of(this.getDetails());
//     }

// private getDetails():CourseProgressDetails[]{
//     const first={
//         AssociateId:"123",
//         AssociateName:"Anushya",
//         CoursesCompletionStatus:true
//     };
//     const second={
//         AssociateId:"1234",
//         AssociateName:"Rhea",
//         CoursesCompletionStatus:false
//     };
//     const third={
//         AssociateId:"125",
//         AssociateName:"Shree",
//         CoursesCompletionStatus:true
//     };
//     return [first, second, third] as CourseProgressDetails[];
//     }

    getAssociate(): Observable<any> {
        var apiURL = "https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('CourseProgress')/items";
        return this.httpClient.get(apiURL).pipe(map((response: any) => {
            return of(response.value);
        }));
    }

    getAssociateById(associateID:string): Observable<any> {
        var apiURL = `https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('CourseProgress')/items?$filter=AssociateId eq ${associateID}`;
        return this.httpClient.get(apiURL).pipe(map((response: any) => {
            return of(response.value);
        }));
    }
    
}    
