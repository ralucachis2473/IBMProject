import {Observable} from 'rxjs';
import { Class } from './class';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})

export class TeacherService {
private apiServerUrl = environment.apiBaseUrl;

constructor(private http: HttpClient) { }

public getClasses(): Observable<Class[]> {
	return this.http.get<Class[]>(`${this.apiServerUrl}/teacher/all`);
	}
	
public addClass(addedClass: Class): Observable<Class> {
	return this.http.post<Class>(`${this.apiServerUrl}/teacher/add`, addedClass);
	}
	
public updateClass(updatedClass: Class): Observable<Class> {
	return this.http.put<Class>(`${this.apiServerUrl}/teacher/update`, updatedClass);
	}
	
public deleteClass(classId: number): Observable<void> {
	return this.http.delete<void>(`${this.apiServerUrl}/teacher/delete/${classId}`);
	}
	
public addUser(addedUsers: Users): Observable<Users> {
return this.http.post<Users>(`${this.apiServerUrl}/enrollments/add`, addedUsers);
}
}
