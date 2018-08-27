import { MoviesService } from './services/movies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private movies: MoviesService){}
  pelicula(id){
    console.log(this.movies.getMovie(id));
  }
}
