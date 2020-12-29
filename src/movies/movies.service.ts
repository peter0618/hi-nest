import { Injectable, NotFoundException } from '@nestjs/common';
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
    const movie = this.movies.find(movie => movie.id === parseInt(id));
    if (!movie) {
      throw new NotFoundException(`Movie with ID: ${id} not found.`);
    }
    return movie;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== +id);
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
