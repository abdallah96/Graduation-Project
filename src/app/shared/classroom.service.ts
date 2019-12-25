import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})
export class ClassroomService {
  readonly rootURL='https://eflearning.azurewebsites.net';

  constructor(private http: HttpClient, private toastr: ToastrService ) { }
  
  getClassroom(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/GivenClassroom/GetAll',httpOptions);
  }

  postClassroom(formData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post(this.rootURL +'/api/GivenClassroom/Create', formData,httpOptions);
  }

  UpdateClassroom(formData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.put(this.rootURL +'/api/GivenClassroom/Update', formData,httpOptions);
  }

  deleteClassroom(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.delete(this.rootURL +'/api/GivenClassroom/Delete/'+id,httpOptions);
  }
 
}
