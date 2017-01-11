import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()


export class IlangoFamilyMemberService {
    members:Array<any>;

    constructor (public _http: Http) { }

    getMembers () {
        let githubDataUrl = "https://raw.githubusercontent.com/ssthil/angular2-firstapp/master";
        let localDataUrl = "http://localhost:3000"
        return this._http.get(githubDataUrl+"/app/data/data.json")
        .map(res => res.json());
    }
}