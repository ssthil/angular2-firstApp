import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()

export class FamilyMembersService {

    //data: any;
    constructor(private _http:Http) { }

    getMembers () {  
        return this._http.get("http://localhost:3000/app/data/data.json")
        .map((response: Response) => response.json()); 
        
    }
}
