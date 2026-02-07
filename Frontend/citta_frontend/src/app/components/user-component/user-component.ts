import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service';
import { TableQuery } from '../../models/table-query.model';
import { User } from '../../models/user.model';
import { TableComponent } from '../table-component/table-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [TableComponent, CommonModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})
export class UserComponent {
  users: User[] = [];
  totalCount = 0;
  loading = false;

  query: TableQuery = {
    page: 1,
    pageSize: 10,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: UserService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = {
        page: +params['page'] || 1,
        pageSize: 10,
        sortBy: params['sortBy'],
        sortOrder: params['sortOrder'],
      };

      this.loadUsers();
    });
  }

  loadUsers(): void {
    this.loading = true;
    this.api.fetchUsers(this.query).subscribe((res) => {
      this.users = res.rows;
      this.totalCount = res.totalCount;
      this.loading = false;
    });
  }

  onPageChange(page: number): void {
    this.updateUrl({ page });
  }

  onSortChange(sortBy: string, sortOrder: 'asc' | 'desc' | null): void {
    this.updateUrl({
      page: 1,
      sortBy: sortBy || null,
      sortOrder: sortOrder || null,
    });
  }

  private updateUrl(params: any): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }
}
