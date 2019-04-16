import { NgModule } from '@angular/core';
import { FormsComponent } from './forms/forms.component';
import { MenuComponent } from './menu/menu.component';
import { AddapplicantsComponent } from './addapplicants/addapplicants.component';
import { AllagentsComponent } from './allagents/allagents.component';
import { AddagentsComponent } from './addagents/addagents.component';
import { PremedComponent } from './premed/premed.component';
import { NonPremedComponent } from './non-premed/non-premed.component';
import { EncoderSmsComponent } from './encoder-sms/encoder-sms.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { Routes, RouterModule } from '@angular/router';
import { PremedDetailsComponent } from './premed-details/premed-details.component';
import { EditSmsComponent } from './edit-sms/edit-sms.component';
import { FindapplicantComponent } from './findapplicant/findapplicant.component';
import { MatchesfoundComponent } from './matchesfound/matchesfound.component';

const routes: Routes = [
  {
    path: 'Home',
    component: FormsComponent
},
{
path: 'Forms',
component: FormsComponent
},
{
  path: 'All_Applicants',
  component: MenuComponent
},

{
  path: 'Add_Applicants',
  component: AddapplicantsComponent
},
{
  path: 'All_Agents',
  component: AllagentsComponent
},
{
path: 'Add_Agents',
component: AddagentsComponent
},

{
path: 'Pre_med',
component: PremedComponent
},
{
  path: 'Non_premed',
  component: NonPremedComponent
  },
  
  {
  path: 'encodersms',
  component: EncoderSmsComponent
  },
  {
    path: 'editprofile',
    component: EditprofileComponent
  },
  {
    path: 'premeddetails',
    component: PremedDetailsComponent
  },
  {
    path: 'editsms',
    component: EditSmsComponent
  },
  {
    path: 'matches',
    component: MatchesfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
