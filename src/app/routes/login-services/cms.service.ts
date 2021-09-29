
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const options = {  
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable({
    providedIn: 'root'
})
export class CMSService {

    // clientId:string = 'QoJO4ZUb4uQKoA09mu65jScgDfMZlvgbTQHXsSRn';
    // client_secret:string = 'JF3JGS2DqxI5jHICvL3gEMgnPDSBdKBzTy71K0GnQYVq5WcD3rvqCC8gUg7PC0XqpvKHadgYJSJWpW254ZJHtuiXRWNjMLILm1wVO39tmn7uVHbDwIj866Tzd32J5mBp';
    // clientId:string = 'db4oqcGIdwlHdFbLLALPw3U6XWn9aUWEfwkVpOvV'; // GITHUB PAGES 
    // client_secret:string = 'QQOu71FZ4o1xjoyxdsieccsZvnnT9hcveRdQqyTwn6MVDZ9cNwS5gq61f1SpeyrVxKDL1ZSOj0McEUQPQIktMtLzxpN8Y7luXVQCxsNNS8AosXH0D2qV6BQx3IWoVPkj'; // GITHUB PAGES
    clientId:string = '2xWic5pseJkn824Q9fQFt7dzqSxaL0ljvPdKCeKX'; // FIREBASE
    client_secret:string = 't7vhE6Opif3Ngct6nTbdCxKhfe1I3FAdKFlEXckcFZNPaQKBuTDndeUmh8qY5UwaEqw9M62ekvEO5JOj1Wr9U7noEbpri9uXWXnNZ3tVqlKN2nFmPZ4Xnz99S10hZJ18'; // FIREBASE
    accessToken: string = '';

    constructor(private http: HttpClient,
    private router: Router) { }
    
    // get access token and related information from localStorage
    getLocalStorageToken() {
        return JSON.parse(localStorage.getItem('cmsData'));
    }

    // we get the access token from this function.
    getToken(username: string, code: string) {
   
        var header = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');
 
        let accessTokenAppend = new URLSearchParams();
        accessTokenAppend.set('grant_type', 'authorization_code');
        // accessTokenAppend.set('redirect_uri', 'http://localhost:4200/app');
        accessTokenAppend.set('redirect_uri', 'https://smart-covid-navigator-1.web.app/app'); // FIREBASE
        accessTokenAppend.set('client_id', this.clientId);
        accessTokenAppend.set('client_secret', this.client_secret);
        accessTokenAppend.set('code', code);
        let queryInputs = accessTokenAppend.toString();
        
        return this.http.post<any>('https://sandbox.bluebutton.cms.gov/v1/o/token/?' + queryInputs, {header, HttpHeaders}, 
            ).pipe(map(data => {     
            localStorage.setItem('cmsData',  JSON.stringify(data));  
            options.headers = options.headers.set('Authorization', `Bearer ${data.access_token}`);
            return data;           
        },
        error => {}));
    }


    // the explanation of benefit file contains information about conditions
    eobInfo(patientId: string) {
        const eobParams = new HttpParams({fromString: `patient=${patientId}`});
        options['params'] = eobParams;
        options.headers = options.headers.set('Authorization', `Bearer ${this.accessToken}`);
        return this.http.get<any>('https://sandbox.bluebutton.cms.gov/v1/fhir/ExplanationOfBenefit/', options)
            .pipe(map(eobData => {          
            localStorage.setItem('eobData', JSON.stringify(eobData));                
            return JSON.stringify(eobData);
        }));
    }
    // the patient file contains information on patient demographics
    patientInfo(patientId: string) {
        const patientParams = new HttpParams({fromString: `patient=${patientId}`});
        options['params'] = patientParams;
        options.headers = options.headers.set('Authorization', `Bearer ${this.accessToken}`);
        return this.http.get<any>('https://sandbox.bluebutton.cms.gov/v1/fhir/Patient/', options)
            .pipe(map(patientReturnedData => {
            
            localStorage.setItem('patientData', JSON.stringify(patientReturnedData));                
            return JSON.stringify(patientReturnedData);
        }));
    }

    coverageInfo(patientId: string) {
        const patientParams = new HttpParams({fromString: `patient=${patientId}`});
        options['params'] = patientParams;
        options.headers = options.headers.set('Authorization', `Bearer ${this.accessToken}`);
        return this.http.get<any>('https://sandbox.bluebutton.cms.gov/v1/fhir/Coverage/', options)
            .pipe(map(coverageReturnedData => {
            
            localStorage.setItem('coverageData', JSON.stringify(coverageReturnedData));                
            return JSON.stringify(coverageReturnedData);
        }));
    }

}