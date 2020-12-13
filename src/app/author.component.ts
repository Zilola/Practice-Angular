import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
   selector: 'authors',
   template: `<h2>{{authors.length + " " + getTitle() }}
    </h2> 
    <ul>
        <li *ngFor="let author of authors">{{author}}</li>
</ul>`,
})
export class Author {
    title = "Authors";

    getTitle (){
        return this.title;
    }
    authors;
        constructor(service: AuthorService){
          
            this.authors= service.getAuthors();
        }
}