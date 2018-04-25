import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

    private comment = {
        albumId: "",
        userName: "",
        content: ""
    }

    constructor() {
    }

    ngOnInit() {
    }

}
