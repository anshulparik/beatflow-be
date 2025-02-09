import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService){}

  @Post()
  async createSong(@Body() createSong: CreateSongDTO) {
    try {
      return 'CREATE SONG';
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async findAllSongs() {
    try {
      return 'FIND ALL SONGS METHOD';
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findOneSong() {
    try {
      return 'FIND ONE SONG';
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async updateSong() {
    try {
      return 'UPDATE ONE SONG';
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async deleteSong() {
    try {
      return 'DELETE ONE SONG';
    } catch (error) {
      throw error;
    }
  }
}
