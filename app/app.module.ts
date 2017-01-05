import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
//child component
import { FamilyMembersComponent } from "./familymembers/members.component";
import { SenthilFamilyMembersComponent } from "./senthilfamily/senthilfamily.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        FamilyMembersComponent,
        SenthilFamilyMembersComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }