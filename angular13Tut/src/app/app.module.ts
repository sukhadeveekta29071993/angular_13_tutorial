import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Components
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponentComponent } from './directive-component/directive-component.component';
import { Header2Component } from './header2/header2.component';

import { ProductListComponent } from './product-list/product-list.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { FilterproductComponent } from './filterproduct/filterproduct.component';

import { CourseComponent } from './course/course.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseFilterComponent } from './course-filter/course-filter.component';

import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ViewchildComponent } from './viewchild/viewchild.component';

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

import { NewProductComponent } from './new-product/new-product.component';

import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { Demo2Component } from './demo2/demo2.component';
import { DemoChildComponent } from './demo-child/demo-child.component';

import { VideoCardComponent } from './video-card/video-card.component';

import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';

import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AllUserComponent } from './all-user/all-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { ObservableComponent } from './observable/observable.component';

import { Data1Component } from './data1/data1.component';
import { Data2Component } from './data2/data2.component';

// Courses2
import { Courses2Component } from './courses2/courses2.component';
import { CourseDetailsComponent } from './courses2/course-details/course-details.component';

// Directives
import { SetBackgroundDirective } from './custom-directive/setbackground.directive';
import { HighlightRenderDirective } from './custom-directive/hilight-render.directive';
import { HoverHostListnerDirectiveDirective } from './custom-directive/hover-host-listner-directive.directive';
import { BetterHighlightHostBindingDirectiveDirective } from './custom-directive/better-hilight-host-binding-directive.directive';
import { AppClassDirective } from './custom-directive/app-class.directive';
import { HiLightDirectiveDirective } from './custom-directive/hi-light-directive.directive';
import { StyleDirective } from './custom-directive/style.directive';

// Services
import { EnrollService } from './core/services/enroll.service';
import { UserService } from './core/services/user.service';
import { LoggerService } from './core/services/loggeer.service';
import { DataService } from './core/services/data.service';
import { CourseService } from './core/services/course.service';

// Routing
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,

    // Components
    ContainerComponent,
    NavbarComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    BindingComponent,
    DirectiveComponentComponent,
    Header2Component,

    ProductListComponent,
    SearchProductComponent,
    FilterproductComponent,

    CourseComponent,
    CourseSearchComponent,
    CourseFilterComponent,

    TemplateVariableComponent,
    CustomerListComponent,
    ViewchildComponent,

    Comp1Component,
    Comp2Component,

    NewProductComponent,

    LifeCycleComponent,
    Demo2Component,
    DemoChildComponent,

    VideoCardComponent,

    JavascriptComponent,
    AngularComponent,

    UserComponent,
    AddUserComponent,
    AllUserComponent,
    UserDetailsComponent,

    ObservableComponent,

    Data1Component,
    Data2Component,

    // Courses2
    Courses2Component,
    CourseDetailsComponent,

    // Directives
    SetBackgroundDirective,
    HighlightRenderDirective,
    HoverHostListnerDirectiveDirective,
    BetterHighlightHostBindingDirectiveDirective,
    AppClassDirective,
    HiLightDirectiveDirective,
    StyleDirective,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],

  providers: [
    EnrollService,
    UserService,
    LoggerService,
    DataService,
    CourseService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
