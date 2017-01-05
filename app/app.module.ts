import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
//child component
import { FamilyMembersComponent } from "./familymembers/members.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        FamilyMembersComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }