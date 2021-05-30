import { Enrollment } from  './enrollment';

export interface Users{
	id: number;
	role: string;
	firstName: string;
	lastName: string;
	classIdList: Enrollment[];
}