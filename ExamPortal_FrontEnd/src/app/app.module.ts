import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMeterialModule } from './angular-meterial/angular-meterial.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TestEdgeInterceptor } from './Interceptors/test-edge.interceptor';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginModule } from './Modules/login/login.module';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Components/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { UserHomeComponent } from './Components/user-home/user-home.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { ViewCategoriesComponent } from './Components/view-categories/view-categories.component';
import { AddCategoriesComponent } from './Components/add-categories/add-categories.component';
import { CategoryShowMoreComponent } from './Components/category-show-more/category-show-more.component';
import { DeleteConfirmComponent } from './Components/delete-confirm/delete-confirm.component';
import { EditCategoryComponent } from './Components/edit-category/edit-category.component';
import { ViewQuizzesComponent } from './Components/view-quizzes/view-quizzes.component';
import { EditQuizComponent } from './Components/edit-quiz/edit-quiz.component';
import { AddQuizComponent } from './Components/add-quiz/add-quiz.component';
import { ViewQuizQuestionsComponent } from './Components/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import { EditQuestionComponent } from './Components/edit-question/edit-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoadQuizzesToUserDashboardComponent } from './Components/load-quizzes-to-user-dashboard/load-quizzes-to-user-dashboard.component';
import { UserSidebarComponent } from './Components/user-sidebar/user-sidebar.component';
import { ViewQuizComponent } from './Components/view-quiz/view-quiz.component';
import { QuizInstructionsComponent } from './Components/quiz-instructions/quiz-instructions.component';
import { StartQuizComponent } from './Components/start-quiz/start-quiz.component';
import { QuizResultComponent } from './Components/quiz-result/quiz-result.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';





@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    HeaderComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    AdminHomeComponent,
    UserHomeComponent,
    EditProfileComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    CategoryShowMoreComponent,
    DeleteConfirmComponent,
    EditCategoryComponent,
    ViewQuizzesComponent,
    EditQuizComponent,
    AddQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    EditQuestionComponent,
    LoadQuizzesToUserDashboardComponent,
    UserSidebarComponent,
    ViewQuizComponent,
    QuizInstructionsComponent,
    StartQuizComponent,
    QuizResultComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    AngularMeterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
      
      
    })
   

   
    
  ],
  providers: [
    {

      provide: HTTP_INTERCEPTORS,
      useClass:TestEdgeInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
