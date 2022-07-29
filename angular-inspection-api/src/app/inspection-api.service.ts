import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {
  readonly inspectionAPIUrl = "https://localhost:7042/api";
  constructor(private http:HttpClient) { }


  //Inspection

  getInspectionLIst():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl + '/inspections');
  }

  addInspection(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/inspections', data);
  }

  updateInspection(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/inspections/${id}`, data);
  }

  deleteInspection(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/inspection(${id})`);
  }


  //***********************************************
  //Inspection Types

  getInspectionTypesLIst():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectionsTypes');
  }

  addInspectionTypes(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/inspectionsTypes', data);
  }

  updateInspectionTypes(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/inspectionsTypes/${id}`, data);
  }

  deleteInspectionTypes(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/inspectionTypes(${id})`);
  }

  //*********************************************** 
  //Status

  getStatusLIst():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectionsStatus');
  }

  addStatus(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/inspectionsStatus', data);
  }

  updateStatus(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/inspectionsStatus/${id}`, data);
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/inspectionStatus(${id})`);
  }

}
