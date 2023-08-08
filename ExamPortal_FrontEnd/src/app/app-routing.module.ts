import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Components/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './Guards/admin/admin.guard';
import { ProfileComponent } from './Components/profile/profile.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { ViewCategoriesComponent } from './Components/view-categories/view-categories.component';
import { AddCategoriesComponent } from './Components/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './Components/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './Components/add-quiz/add-quiz.component';
import { ViewQuizQuestionsComponent } from './Components/view-quiz-questions/view-quiz-questions.component';
import { userGuard } from './Guards/user/user.guard';
import { LoadQuizzesToUserDashboardComponent } from './Components/load-quizzes-to-user-dashboard/load-quizzes-to-user-dashboard.component';
import { ViewQuizComponent } from './Components/view-quiz/view-quiz.component';
import { QuizInstructionsComponent } from './Components/quiz-instructions/quiz-instructions.component';
import { StartQuizComponent } from './Components/start-quiz/start-quiz.component';
import { QuizResultComponent } from './Components/quiz-result/quiz-result.component';



const routes: Routes = [
  {path:"home",component:HomeComponent},
  
  {
    path:"adminDashboard", component:AdminDashboardComponent,canActivate:[adminGuard],children:[
      {
        path:"profile",component:ProfileComponent
      },
      {
        path:'',component: ViewCategoriesComponent
      },
      {
        path:'edit-profile', component:EditProfileComponent
      },
      
      {
        path: 'addCategories',component:AddCategoriesComponent
      },
      {
        path:'viewQuizzes',component:ViewQuizzesComponent
      },
      {
        path:'addQuiz',component:AddQuizComponent
      },
      {
        path:'viewQuestions',component:ViewQuizQuestionsComponent
      }

    ]
  },
  {
    path:"userDashboard", component:UserDashboardComponent ,canActivate:[userGuard],children:[
      {
        path:'',component:LoadQuizzesToUserDashboardComponent
         
      },
      {
        path: 'viewQuiz',component:ViewQuizComponent
      },
      {
        path: 'instructions',component:QuizInstructionsComponent
      }
    ]
  },
  {
    path:'startQuiz', component:StartQuizComponent,canActivate:[userGuard]
  },
  {
    path:'quizResult', component:QuizResultComponent,canActivate:[userGuard]
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:"**", redirectTo:"/home"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
