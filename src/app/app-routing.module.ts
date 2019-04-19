import { NgModule, Component } from '@angular/core';
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
import { MatchesfoundComponent } from './matchesfound/matchesfound.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ApplicantsContainerComponent } from './applicants-container/applicants-container.component';



const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent,
    children:[

      {
        path:'',
        component:FormsComponent,
      },
      {
        path:'forms',
        component:FormsComponent,
      },
      {
        path:'All_Applicants',
        component: MenuComponent
      },
      {
        path: 'Add_Applicants',
        component: AddapplicantsComponent,
        children:[
          {
              path: '',
              component: ApplicantsContainerComponent
          },
          {
            path: 'matches',
            component: MatchesfoundComponent
          },
        ]
      },
      {
        path:'editprofile',
        component: EditprofileComponent
      },          
      {
         path: 'Add_Agents',
        component: AddagentsComponent
      },
     {
       path: 'All_Agents',
       component: AllagentsComponent
     },
     {
      path: 'changepassword',
      component: ChangepasswordComponent
    },
    {
      path: 'encodersms',
      component: EncoderSmsComponent
    },
    {
      path: 'editsms',
      component: EditSmsComponent
    },
    {
      path: 'Non_premed',
      component: NonPremedComponent
      },
      {
        path:'Pre_med',
        component: PremedComponent
      },
      {
        path: 'premeddetails',
        component: PremedDetailsComponent
      },     
    ]
  },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
