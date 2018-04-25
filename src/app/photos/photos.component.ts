import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Album } from '../models/album';
import { Photo } from '../models/photo';
import { User } from '../models/user';
import { CommentComponent } from './comment/comment.component';


@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

    public album: Album;
    public user: User;
    public photoPages = [];
    public currentPage = 1;

    constructor(private appService: AppService) { }

    ngOnInit() {
        this.loadAlbum(3);
        this.getPhotos(3);
    }


    loadAlbum(albumId): void {
        this.appService.fetchAlbum(albumId).subscribe(
            album => this.album = album,
            error => console.log("album failed"),
            () => this.getUser(this.album.userId)
        );

    }

    getUser(userId): void {
        this.appService.fetchUser(userId).subscribe(
            user => this.user = user,
            error => console.log('user failed')
        );
    }

    getPhotos(albumId): void {
        let photos = []
        this.appService.fetchAlbumPhotos(albumId).subscribe(
            photos => this.paginatePhotos(photos),
            error => console.log('photos failed')
        );
    }

    paginatePhotos(photos): void{
        let pages = [];
        let pageNumber = 0;
        for (var i = 0; i < photos.length; i++){
            if (i % 10 == 0){
                pageNumber++;
                pages[pageNumber] = [];
            }
            pages[pageNumber].push(photos[i]);
        }
        this.photoPages = pages;
    }

    nextPage(){
        this.currentPage++;
    }
    previousPage(){
        this.currentPage--;
    }



}
