import { Routes } from '@angular/router';
import { ListDepartmentComponent } from '../departments/list-department/list-department.component';
import { AddDepartmentComponent } from '../departments/add-department/add-department.component';
import { EditDepartmentComponent } from '../departments/edit-department/edit-department.component';
import { ListEmployeeComponent } from '../employees/list-employee/list-employee.component';
import { AddEmployeeComponent } from '../employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from '../employees/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from '../employees/delete-employee/delete-employee.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

export const routes: Routes = [
    {path :'departments' ,component : ListDepartmentComponent},
    {path :'departments/add' ,component : AddDepartmentComponent},
    {path :'departments/edit/:id' ,component : EditDepartmentComponent},
    {path :'employees', component: ListEmployeeComponent},
    {path :'employees/add', component: AddEmployeeComponent},
    {path :'employees/edit/:id',component:EditEmployeeComponent},
    {path :'employee/delete/:id', component: DeleteEmployeeComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'**',redirectTo:'login'} //**-base part
];
