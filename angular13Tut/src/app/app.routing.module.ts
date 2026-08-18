import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { Courses2Component } from './courses2/courses2.component';
import { CourseDetailsComponent } from './courses2/course-details/course-details.component';

const routes: Routes = [
  // Home
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  // About
  {
    path: 'about',
    component: AboutComponent,
  },

  // Contact
  {
    path: 'contact',
    component: ContactComponent,
  },

  // Courses
  {
    path: 'courses',
    component: Courses2Component,
    children: [
      {
        path: 'course/:id',
        component: CourseDetailsComponent,
      },
    ],
  },

  // Page Not Found
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
