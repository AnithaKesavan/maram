import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'; 
import { Subject } from 'rxjs/Subject';
//import { LocalStorageHelper, LocalStorageConst } from './localstoragehelper';
// import { Authentication } from 'core/authentication/authentication';


@Injectable()
export class Utility {
    constructor(private http: HttpClient) { }

    /**
    * Initializes Default headers and responseType
    */
    private defaultHeaders: any;
    private responseType: any;

    /**
    * Initializes loading and serverdown flags
    */
    public loading: boolean = false;
    public loadingChange: Subject<boolean> = new Subject<boolean>();
    public isForbidden: boolean = false;
    public isForbiddenChange: Subject<boolean> = new Subject<boolean>();
    public isQueryStringRequest: boolean = false;

    /**
     * Performs a request with `get` http method.
     * @param url
     * @param params
     * @param headers
     * @returns {Observable<>}
     */
    public get(url: string, params: any = {}, headers: any = {}, responseType?: string): Observable<any> { 
        this.loading = true;
        this.loadingChange.next(this.loading);
        this.isQueryStringRequest = (url.indexOf('?') !== -1) ? true : false;
        return this.http.get(url, { params: params, headers: this.setHeaders(headers), responseType: this.setResponseType(responseType) }).do((response: any) => {
            return this.onSuccess(response, 'GET Response Success');
        }, (error: any) => {
            return this.onError(error, 'GET Response Failure');
        });
    }

    /**
     * Performs a request with `post` http method.
     * @param url
     * @param data
     * @param params
     * @param headers
     * @returns {Observable<>}
     */
    public post(url: string, data: any = {}, params: any = {}, headers: any = {}, responseType?: string): Observable<any> {
        this.loading = true;
        this.loadingChange.next(this.loading);
        return this.http.post(url, data, { params, headers: this.setHeaders(headers), responseType: this.setResponseType(responseType) }).do((response: any) => {
            return this.onSuccess(response, 'POST Response Success');
        }, (error: any) => {
            return this.onError(error, 'POST Response Failure');
        });
    }
 

    public login(url: string, params: any = {}, data: any = {}, headers: any = {}, responseType?: string): Observable<any> {
        return this.http.post(url + '?' + params,
            { "email": data.email, "password": data.password }
            , { headers: this.setHeaders(headers), responseType: this.setResponseType(responseType) }
        ).do(res => {
            return this.onSuccess(res, 'POST Response Success');
        }, (error: any) => {
            return this.onError(error, 'POST Response Failure');
        });
    }


    public regsiter(url: string, params: any = {}, data: any = {}, headers: any = {}, responseType?: string): Observable<any> {
        return this.http.post(url + '?' + params,
            data,
            { headers: this.setHeaders(headers), responseType: this.setResponseType(responseType) }
        ).do(res => {
            return this.onSuccess(res, 'POST Response Success');
        }, (error: any) => {
            return this.onError(error, 'POST Response Failure');
        });
    }

    /**
     * onSuccess
     * @param response
     */
    private onSuccess(response: any, gaCategory?: string): any {
        return response;
    }

    /**
     * onError
     * @param error
     */
    private onError(error: any, gaCategory?: string): any {
        return error;
    }

    /**
     * Performs to set dynamic header with default
     * @param header
     */
    public setHeaders(customHeaders: any) {
        console.log(localStorage.getItem('jwt'));
        if (localStorage.getItem('jwt') === null) {
            this.defaultHeaders = new HttpHeaders().set('Content-Type', 'application/raw');
        } else {
            if (customHeaders !== undefined) {
                this.defaultHeaders = new HttpHeaders({
                    'Authorization': localStorage.getItem('jwt')
                });
            } else {
                this.defaultHeaders = new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': localStorage.getItem('jwt')
                });
            }
        }

        /*  Object.keys(customHeaders).map((key: any, value: any) => {
              this.defaultHeaders = this.defaultHeaders.set(key, customHeaders[key]);
          });*/
        return this.defaultHeaders;
    }

    /**
    * Performs to set dynamic responseType
    * @param responseType
    */
    public setResponseType(responseType?: any) {
        this.responseType = responseType || 'json';
        return this.responseType;
    }

    /**
     * Performs a formatted data
     * @param date
     */
    public getFormattedDate(date) {
        var year = date.getFullYear();
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        return month + '/' + day + '/' + year;
    }
}
