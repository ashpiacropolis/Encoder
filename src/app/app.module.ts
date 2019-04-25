import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SearchPipe } from './search.pipe';
import { ModalService } from './modal.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FormsComponent } from './forms/forms.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';
import { RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddapplicantsComponent } from './addapplicants/addapplicants.component';
import { AllagentsComponent } from './allagents/allagents.component';
import { AddagentsComponent } from './addagents/addagents.component';
import { PremedComponent } from './premed/premed.component';
import { NonPremedComponent } from './non-premed/non-premed.component';
import { EncoderSmsComponent } from './encoder-sms/encoder-sms.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MatchesfoundComponent } from './matchesfound/matchesfound.component';
import { AgentprofileComponent } from './agentprofile/agentprofile.component';
import { PremedDetailsComponent } from './premed-details/premed-details.component';
import { EditSmsComponent } from './edit-sms/edit-sms.component';
import { FooterComponent } from './footer/footer.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HomeComponent } from './home/home.component';
import { ApplicantprofileComponent } from './applicantprofile/applicantprofile.component';
import { ApplicantdetailsComponent } from './applicantdetails/applicantdetails.component';
import { ApplicantPremedComponent } from './applicant-premed/applicant-premed.component';
import { ApplicantPassportComponent } from './applicant-passport/applicant-passport.component';
import { ApplicantContainerComponent } from './applicant-container/applicant-container.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SearchPipe,
    SidebarComponent,
    MenuComponent,
    FormsComponent,
    ChangeTextDirective,
    SqrtPipe,
    LoginComponent,
    AddapplicantsComponent,
    AllagentsComponent,
    AddagentsComponent,
    PremedComponent,
    NonPremedComponent,
    EncoderSmsComponent,
    EditprofileComponent,
    MatchesfoundComponent,
    AgentprofileComponent,
    PremedDetailsComponent,
    EditSmsComponent,
    FooterComponent,
    ChangepasswordComponent,
    HomeComponent,
    ApplicantprofileComponent,
    ApplicantdetailsComponent,
    ApplicantPremedComponent,
    ApplicantPassportComponent,
    ApplicantContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
         path: 'new-cmp',
         component: SidebarComponent
      }
   ])
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
