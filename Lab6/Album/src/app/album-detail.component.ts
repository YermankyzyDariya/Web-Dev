import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from './album.service';
import { Album } from '../../models/album.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

@Component({
  standalone: true,
  imports: [RouterModule ,  FormsModule],
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit {

  album!: Album;
  newTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.newTitle = data.title;
    });
  }

  save() {
    this.album.title = this.newTitle;

    this.albumService.updateAlbum(this.album).subscribe();
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
