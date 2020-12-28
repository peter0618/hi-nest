import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [
    // {
    //   id: 1,
    //   title: 'Good Will Hunting',
    //   year: 2003,
    //   genres: ['Romantic comedy'],
    // },
    // {
    //   id: 2,
    //   title: 'Six Sense',
    //   year: 1994,
    //   genres: ['Thriller'],
    // },
    // {
    //   id: 3,
    //   title: 'Ghost',
    //   year: 1990,
    //   genres: ['Romantic'],
    // },
  ];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find(movie => movie.id === parseInt(id));
  }

  deleteOne(id: string): boolean {
    this.movies = this.movies.filter(movie => movie.id !== +id);
    return true;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
