export interface peopleData {
    id	: number;
    isActive	:	boolean;
    balance	:	number;
    picture	: string;
    age	: number;
    eyeColor	:	string;
    name	:	string;
    gender	:	string;
    company	:	string;
    email	:	string;
    phone	:	string;
    about	:	string;
    registered	:	string;
    latitude	:	number;
    longitude	:	number;
    tags		: 	string[];
    friends		: 	friend[];
}
export interface friend {
    id : number; 
    name : string;
}