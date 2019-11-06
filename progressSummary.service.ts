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

getSummary(associateID:string): Observable<any> {
        var apiURL = `https://cognizantonline.sharepoint.com/sites/TestWeb/_api/lists/getbytitle('ProgressSummary')/items?$filter=AssociateID eq ${associateID}`;
        return this.httpClient.get(apiURL).pipe(map((response: any) => {
            return of(response);
        }));
    }
}    
