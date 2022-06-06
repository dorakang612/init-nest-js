import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.enrity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID [ ${id} ] not found.`);
    }
    return movie;
  }

  create(movieData: CreateMovieDto): boolean {
    try {
      this.movies.push({ id: this.movies.length + 1, ...movieData });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  deleteOne(id: number): boolean {
    this.getOne(id);
    try {
      this.movies = this.movies.filter((movie) => movie.id !== id);
      return true;
    } catch (error) {
      return false;
    }
  }

  update(id: number, updateData: CreateMovieDto): boolean {
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
