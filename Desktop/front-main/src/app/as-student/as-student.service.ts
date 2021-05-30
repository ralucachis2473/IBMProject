import {Observable} from 'rxjs';
import { Enrollment } from './enrollment';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class StudentService {
private apiServerUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) { }

public getEnrollments(): Observable<Enrollment[]> {
	return this.http.get<Enrollment[]>(`${this.apiServerUrl}/student/all`);
	}
	
public getStudents(): Observable<Users[]> {
return this.http.get<Users[]>(`${this.apiServerUrl}/enrollments/all`);
}

public updateUser(updatedUser: Users): Observable<Users> {
	return this.http.put<Users>(`${this.apiServerUrl}/enrollments/update`, updatedUser);
	}
	
public addEnrollment(addedClass: Enrollment): Observable<Enrollment> {
	return this.http.post<Enrollment>(`${this.apiServerUrl}/student/enroll`, addedClass);
	}

}