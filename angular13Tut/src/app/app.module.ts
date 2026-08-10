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

@NgModule({
  declarations: [
    AppComponent, 
    ContainerComponent, NavbarComponent, HeaderComponent, NotificationComponent, SearchComponent, BindingComponent, DirectiveComponentComponent, Header2Component, ProductListComponent, SearchProductComponent, FilterproductComponent, CourseComponent, CourseSearchComponent, CourseFilterComponent, TemplateVariableComponent, CustomerListComponent, ViewchildComponent, Comp1Component, Comp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
