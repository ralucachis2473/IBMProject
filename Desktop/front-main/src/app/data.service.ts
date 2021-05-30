import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  apiKey = 'ae14c7f9bb334a4d83cc18d02c425127';
  get(){
        return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
      }
}
