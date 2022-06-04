import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOneMovie(@Param('id') movieId: string) {
    return `This will return one movie with the id : ${movieId}`;
  }

  @Post()
  createMovie() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  deleteMovie(@Param('id') movieId: string) {
    return `This will delete a movie with the id : ${movieId}`;
  }

  @Patch('/:id')
  patchMovie(@Param('id') movieId: string) {
    return `This will patch a movie with the id : ${movieId}`;
  }
}
