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
import { FindapplicantComponent } from './findapplicant/findapplicant.component';
import { MatchesfoundComponent } from './matchesfound/matchesfound.component';
import { AgentprofileComponent } from './agentprofile/agentprofile.component';
import { PremedDetailsComponent } from './premed-details/premed-details.component';
import { EditSmsComponent } from './edit-sms/edit-sms.component';


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
    FindapplicantComponent,
    MatchesfoundComponent,
    AgentprofileComponent,
    PremedDetailsComponent,
    EditSmsComponent
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
