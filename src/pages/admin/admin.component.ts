import { UserProvider } from './../../services/users/user.provider';
import { User } from '../../services/users/models/user.model';
import { PageHeader } from './../../services/abstract/models/page-header.model';

import { Component, OnInit } from '@angular/core';

import { AppProvider } from './../../services/application/app.provider';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private header: PageHeader = { title: 'Configurações' };
  public menuTitle: string = 'Gestão de Usuários';

  public users: User[] = [];

  constructor(
    private readonly appProvider: AppProvider,
    private readonly userProvider: UserProvider
  ) {

  }

  public setMenu(title: string) {
    this.menuTitle = title;
  }

  async ngOnInit() {

    setTimeout(() => {
      this.appProvider.setHeaderPage(this.header);
      this.appProvider.startLoading();
    }, 1);
    this.users = await this.userProvider.list();

    this.appProvider.stopLoading();

  }

  showDetail(user: User) {
    alert(user.toString());
  }

}
