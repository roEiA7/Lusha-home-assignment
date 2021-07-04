import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import { IPageResponse } from 'src/app/core/interfcaes/page-response.interface';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../user.interface';

@Component({
  selector: 'my-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {

  usersPage$: Observable<IPageResponse<IUser>> | undefined;
  page = 1;
  limit = 15;
  loading$: Observable<boolean>;

  constructor(
    private usersService: UsersService,
    private primeConfig: PrimeNGConfig,
  ) {
    this.loading$ = this.usersService.isLoading$();
    this.primeConfig.ripple = true;
  }

  ngOnInit(): void {
    this.getUsersPage();
  }

  loadData(event: LazyLoadEvent) {
    if (event.first !== undefined) {
      this.page = event.first / this.limit + 1;
      this.getUsersPage();
    }
  }

  generateUsers(): void {
    this.usersService.generate().subscribe(
      () => this.getUsersPage()
    )
  }

  deleteUsers(): void {
    this.usersService.deleteAll().subscribe(
      () => this.getUsersPage()
    );

  }

  getUsersPage(): void {
    this.usersPage$ = this.usersService.getUsersPage(this.page, this.limit);
  }



}
