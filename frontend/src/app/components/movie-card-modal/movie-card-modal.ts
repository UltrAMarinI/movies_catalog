import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Urls } from '../../core/enums/urls.enum';
import { MovieInterface } from '../../core/interfaces/movie.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-movie-card-modal',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './movie-card-modal.html',
  styleUrl: './movie-card-modal.scss',
})
export class MovieCardModal implements OnInit {
  readonly dialogRef = inject(MatDialogRef<MovieCardModal>);
  readonly data = inject<MovieInterface>(MAT_DIALOG_DATA);

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.data.id);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  moreDetails() {
    this.router.navigate([`${Urls.details}/${this.data.id}`]);
    this.onNoClick();
  }
}
