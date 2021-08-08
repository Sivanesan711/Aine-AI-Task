import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonPlanComponent } from './lesson-plan/lesson-plan.component';
import { SettingsComponent } from './settings/settings.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: '', redirectTo: '/lesson-plan', pathMatch: 'full'},
  {path:'students', component: StudentsComponent},
  {path:'lesson-plan', component: LessonPlanComponent},
  {path:'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
