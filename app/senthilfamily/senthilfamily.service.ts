import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class SenthilFamilyMemberService {
    members: Array<any>;

    constructor (public _http: Http) { }

    getMembers () {
        return this._http.get("https://raw.githubusercontent.com/ssthil/angular2-firstapp/master/app/data/data.json")
        .map(res=>res.json());
    }
}