import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-component.html',
  styleUrl: './table-component.css',
})
export class TableComponent {
  @Input() rows: User[] = [];
  @Input() page = 1;
  @Input() pageSize = 10;
  @Input() totalCount = 0;
  @Input() sortBy?: string;
  @Input() sortOrder?: 'asc' | 'desc';

  @Output() pageChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<{
    sortBy: string;
    sortOrder: 'asc' | 'desc' | null;
  }>();

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize);
  }

  changeSort(column: string): void {
    let order: 'asc' | 'desc' | null = 'asc';

    if (this.sortBy === column) {
      if (this.sortOrder === 'asc') order = 'desc';
      else if (this.sortOrder === 'desc') order = null;
    }

    this.sortChange.emit({ sortBy: order ? column : '', sortOrder: order });
  }

  next(): void {
    if (this.page < this.totalPages) {
      this.pageChange.emit(this.page + 1);
    }
  }

  prev(): void {
    if (this.page > 1) {
      this.pageChange.emit(this.page - 1);
    }
  }
}
