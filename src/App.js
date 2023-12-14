// import logo from './logo.svg';
/* eslint-disable */

import './App.css';
import Nav from './components/Nav/Nav';
import TrackList from './components/TrackList/TrackList';
import SideBar from './components/SideBar/SideBar';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import { useEffect, useState } from 'react';

// const tracksUrl = 'https://skypro-music-api.skyeng.tech/catalog/track/all/';
// export let tracks = [];
// function getTracks() {
// 	return fetch(tracksUrl, {
// 		method: 'GET',
// 	}).then((response) => {
// 		if (response.status === 401) {
// 			throw new Error('Нет авторизации')
// 		}
// 		return response.json()
// 	})
// }


export const tracks = [
	{
		"id": 8,
		"name": "Chase",
		"author": "Alexander Nakarada",
		"release_date": "2005-06-11",
		"genre": "Классическая музыка",
		"duration_in_seconds": 205,
		"album": "Chase",
		"logo": null,
		"track_file": "https://skypro-music-api.skyeng.tech/media/music_files/Alexander_Nakarada_-_Chase.mp3",
		"stared_user": []
	}
];

function App() {
	// const [tracks, setTracks] = useState({
	// 	tracks: [];
	// })

	// useEffect(() => {
	// 	fetchTracks().then((data) => {
	// 		console.log(data);
	// 		setTracks(data)
	// 	})
	// }, [])

	return (
		<div className="wrapper">
			<div className="container">
				<main className="main">
					<Nav />
					<TrackList />
					<SideBar />
				</main>
				<AudioPlayer />
				<footer className="footer" />
			</div>
		</div>
	);
}

export default App;
