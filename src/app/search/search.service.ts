import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';

interface Product{
  name: string;
  price: number;
}

@Injectable()
export class SearchService{

  constructor(private http: HttpClient){}

  // This search link returns HTML page,

  searchResult(query: string): Observable<Product[]>{
    const url ="http://toronto.craigslist.org/search/sss";
    let params = new HttpParams();
    params = params.append('query', query);
    params = params.append('sort','rel');
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json')

    return this.http.get<any>(url, {headers: header, params: params});
  }
}
