import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.enrity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  create(movieData): boolean {
    try {
      this.movies.push({ id: this.movies.length + 1, ...movieData });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  deleteOne(id: string): boolean {
    try {
      this.movies = this.movies.filter((movie) => movie.id !== parseInt(id));
      return true;
    } catch (error) {
      return false;
    }
  }

  update(id: string, updateData): boolean {
    try {
      const movie = this.getOne(id);
      this.deleteOne(id);
      this.movies.push({ ...movie, ...updateData });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
