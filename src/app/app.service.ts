import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from './models/album';
import { Photo } from './models/photo';
import { User } from './models/user';


@Injectable()
export class AppService {

    private baseUrl = 'https://jsonplaceholder.typicode.com/';

    constructor(protected http: HttpClient) { }

    fetchAlbumPhotos(albumId): Observable<Photo[]> {
        return this.http.get<Photo[]>(this.baseUrl+'albums/'+albumId+'/photos');
    }

    fetchUser(userId): Observable<User> {
        return this.http.get<User>(this.baseUrl+'users/'+userId);

    }

    fetchAlbum(albumId): Observable<Album> {
        return this.http.get<Album>(this.baseUrl+'albums/'+albumId);

    }

}
