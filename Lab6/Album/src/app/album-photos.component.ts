import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from './album.service';
import { Photo } from '../../models/photo.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photo.component.html'
})
export class AlbumPhotosComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumPhotos(id).subscribe(data => {
      this.photos = data;
    });
  }
}
