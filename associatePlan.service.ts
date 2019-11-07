import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AssociatePlanService {
    userInfo: any;
    constructor(private httpClient: HttpClient) {
    }
    
    getSummary(associateID: string): Observable<any> {
        var apiURL = `https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('PlanDetails')/items?$filter=AssociateID eq ${associateID}`;
        return this.httpClient.get(apiURL).pipe(map((response: any) => {
            return of(response.value);
        }));
    }

    getUserInfo() {
        const siteUrl = "https://cognizantonline.sharepoint.com/_api/SP.UserProfiles.PeopleManager/GetMyProperties";
        return this.httpClient.get(siteUrl);
    }
}
