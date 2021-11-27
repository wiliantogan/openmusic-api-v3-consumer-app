const { Pool } = require('pg');

// Menangani SongsService
class SongsService {
  constructor() {
    this._pool = new Pool();
  }

  // Fungsi memperoleh lagu dengan playlistId
  async getSongs(playlistId) {
    const query = {
      text: `SELECT songs.* FROM songs 
      LEFT JOIN playlistsongs ON songs.id = playlistsongs.song_id 
      WHERE playlistsongs.playlist_id = $1`,
      values: [playlistId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }
}

module.exports = SongsService;
