import { Enrollment } from  './enrollment';

export interface Users{
	id: number;
	role: string;
	year: number;
	firstName: string;
	lastName: string;
	classIdList: Enrollment[];
}