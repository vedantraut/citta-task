import { Injectable } from '@angular/core';
import { PageResponse } from '../models/page-response.model';
import { User } from '../models/user.model';
import { TableQuery } from '../models/table-query.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URL = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  fetchUsers(query: TableQuery): Observable<PageResponse<User>> {
    let params = new HttpParams()
      .set('page', query.page)
      .set('pageSize', query.pageSize);

    if (query.sortBy) {
      params = params
        .set('sortBy', query.sortBy)
        .set('sortOrder', query.sortOrder || 'asc');
    }

    return this.http.get<PageResponse<User>>(this.API_URL, { params });
  }
}
