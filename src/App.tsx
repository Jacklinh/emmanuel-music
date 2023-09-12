import React from 'react';
import { musics } from './data/musics';
import './App.css'
import { TiHeadphones,TiNotesOutline,TiHeartOutline,TiMediaPlay } from "react-icons/ti";
function App() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="music_wrap">
                        <div className="music_gallery">
                            <div className="gallery_image drop-shadow-md">
                                <p><img src="./images/gallery.jpg" width={450} height={300} alt="" /></p>
                            </div>
                        </div>
                        <div className="music_content">
                            <table className='table_song'>
                                <tbody>
                                    <tr>
                                        <th><TiHeadphones /></th>
                                        <th>Bài hát</th>
                                        <th>Ca sĩ</th>
                                        <th>Thời Gian</th>
                                        <th>yêu thích</th>
                                    </tr>
                                    <tr>
                                        <td><TiNotesOutline /></td>
                                        <td><span className='song_avatar'><img src="./images/gallery.jpg" width={50} height={50} alt="" /></span>nữ siêu anh hùng</td>
                                        <td>ca sĩ</td>
                                        <td>03:30</td>
                                        <td><TiHeartOutline /></td>
                                    </tr>
                                    <tr>
                                        <td><TiNotesOutline /></td>
                                        <td><span className='song_avatar'><img src="./images/gallery.jpg" width={50} height={50} alt="" /></span>nữ siêu anh hùng</td>
                                        <td>ca sĩ</td>
                                        <td>03:30</td>
                                        <td><TiHeartOutline /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="music_player shadow-2xl shadow-white">
                        <div className="player_inner">
                            <div className="player_name">
                                <p>nữ siêu anh hùng</p>
                            </div>
                            <div className="player_control">
                                <button className='control_playpause'><TiMediaPlay /></button>
                                <audio controls src="./media/Tram-Huong-Duy-Ninh.mp3"></audio>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
