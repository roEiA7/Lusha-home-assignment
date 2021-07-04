import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, EMPTY, Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { IPageResponse } from 'src/app/core/interfcaes/page-response.interface';
import { ApiService } from 'src/app/core/services/api.service';
import { IUser } from '../user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly url = 'users';

  private loading$ = new BehaviorSubject(false);

  constructor(
    private api: ApiService,
    private messageService: MessageService
  ) { }

  public getUsersPage(page: number, limit: number, filter?: any): Observable<IPageResponse<IUser>> {
    const headers = new HttpHeaders({
      'cache': 'should-cache'
    });

    this.loading$.next(true);
    return this.api.get<IPageResponse<IUser>>(`${this.url}/${page}/${limit}`, filter, headers).pipe(
      catchError(err => {
        this.messageService.add({ severity: 'error', summary: 'Operation Failed', detail: 'Failed to load uesrs' });
        console.log(err);
        return EMPTY;
      }),
      finalize(() => this.loading$.next(false))
    );
  }

  public add(user: IUser) {
    this.loading$.next(true);
    return this.api.post<IUser>(this.url, user).pipe(
      tap(() => { this.messageService.add({ severity: 'success', summary: 'Operation Succeed', detail: 'Added user successfully' }); }),
      catchError(err => {
        this.messageService.add({ severity: 'error', summary: 'Operation Failed', detail: 'Failed to add user' });
        console.log(err);
        return throwError(err);
      }),
      finalize(() => this.loading$.next(false))
    );
  }

  public generate() {
    this.loading$.next(true);
    return this.api.post(`${this.url}/generate`).pipe(
      tap(() => { this.messageService.add({ severity: 'success', summary: 'Operation Succeed', detail: 'Generated users successfully' }); }),
      catchError(err => {
        this.messageService.add({ severity: 'error', summary: 'Operation Failed', detail: 'Failed to generate users' });
        console.log(err);
        return throwError(err);
      }),
      finalize(() => this.loading$.next(false))
    );
  }

  public deleteAll() {
    this.loading$.next(true);
    return this.api.delete(this.url).pipe(
      tap(() => { this.messageService.add({ severity: 'success', summary: 'Operation Succeed', detail: 'Deleted all users successfully' }); }),
      catchError(err => {
        this.messageService.add({ severity: 'error', summary: 'Operation Failed', detail: 'Failed to delete all users' });
        console.log(err);
        return throwError(err);
      }),
      finalize(() => this.loading$.next(false))
    );
  }

  isLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

}
