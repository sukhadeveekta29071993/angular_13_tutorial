import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
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
import { SetBackgroundDirective } from './custom-directive/setbackground.directive';
import { HighlightRenderDirective } from './custom-directive/hilight-render.directive';
import { HoverHostListnerDirectiveDirective } from './custom-directive/hover-host-listner-directive.directive';
import { BetterHighlightHostBindingDirectiveDirective } from './custom-directive/better-hilight-host-binding-directive.directive';
import { AppClassDirective } from './custom-directive/app-class.directive';
import { VideoCardComponent } from './video-card/video-card.component';
import { HiLightDirectiveDirective } from './custom-directive/hi-light-directive.directive';
import { StyleDirective } from './custom-directive/style.directive';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { EnrollService } from './core/services/enroll.service';
import { UserComponent } from './user/user.component';
import { UserService } from './core/services/user.service';
import { AddUserComponent } from './user/add-user/add-user.component';
import { LoggerService } from './core/services/loggeer.service';

@NgModule({
  declarations: [
    AppComponent,
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
    SetBackgroundDirective,
    HighlightRenderDirective,
    HoverHostListnerDirectiveDirective,
    BetterHighlightHostBindingDirectiveDirective,
    AppClassDirective,
    VideoCardComponent,
    HiLightDirectiveDirective,
    StyleDirective,
    JavascriptComponent,
    AngularComponent,
    UserComponent,
    AddUserComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [EnrollService, UserService, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
