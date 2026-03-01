import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../../../models/album.model';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, CommonModule], 
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
