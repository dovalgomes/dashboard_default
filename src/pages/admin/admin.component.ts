import { DataPaginate } from './../../services/abstract/application/data.paginate.model';
import { UserProvider } from './../../services/users/user.provider';
import { User } from '../../services/users/models/user.model';
import { PageHeader } from '../../services/abstract/application/page-header.model';

import { Component, OnInit } from '@angular/core';

import { AppProvider } from './../../services/application/app.provider';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private header: PageHeader = { title: 'Configurações' };
  public menuTitle: string = 'Gestão de Usuários';

  public userDataPage: DataPaginate = new DataPaginate();

  private user: User = new User();

  public userForm: FormGroup;
  public userFormSubmitted: boolean = false;

  constructor(
    private readonly appProvider: AppProvider,
    private readonly userProvider: UserProvider,
    // private readonly formBuilder: FormBuilder
  ) {

  }

  public setMenu(title: string) {
    this.menuTitle = title;
  }

  async ngOnInit() {

    this.userForm = this.userProvider.getFormUserRules(this.user);



    setTimeout(() => {
      this.appProvider.setHeaderPage(this.header);
      // this.appProvider.startLoading();
    }, 1);

    this.userDataPage = await this.userProvider.listWithPaginate();
    this.appProvider.stopLoading();

  }

  async refresh() {
    // this.appProvider.startLoading();
    this.userDataPage = await this.userProvider.listWithPaginate();
    this.appProvider.stopLoading();
  }

  showDetail(user: User) {
    alert(user.toString());
  }

  disableUser(user: User) {
    this.userProvider.disable(user);
    this.refresh();
  }

  enableUser(user: User) {
    this.userProvider.enable(user);
    this.refresh();
  }

  addUser() {
    this.user = new User();
    this.userForm = this.userProvider.getFormUserRules(this.user);
    $('#modal-user').modal('show');
  }

  editUser(user: User) {
    this.user = user;
    this.userForm = this.userProvider.getFormUserRules(this.user);
    $('#modal-user').modal('show');
  }

  saveUser() {
    this.userFormSubmitted = true;

    this.userProvider.getUserFormValues(this.userForm);

    if (this.userForm.invalid) {
      return;
    }

    alert('OK');
  }

  get userControls() {
    return this.userForm.controls;
  }

}
