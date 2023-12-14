/* eslint-disable */
import SkeletonTracks from '../sceletons/SkeletonTracks'
import './styles.css'
import { useEffect, useState } from 'react'

function Track() {
	const [tracks, setTrack] = useState(null)

	// useEffect(() => {
	// 	setTimeout(async () => {
	// 		const res = await fetch(
	// 			'https://skypro-music-api.skyeng.tech/catalog/track/all/',
	// 		)
	// 		const data = await res.json()
	// 		setTrack(data)
	// 	}, 5000)
	// }, [])

	useEffect(() => {
		setTimeout(() => {
			fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/')
				.then((res) => res.json())
				.then((json) => setTrack(json))
		}, 5000)
	})

	return (
		<>
			{tracks &&
				tracks.map((track) => (
					<div className="playlist__item" key={track.id}>
						<div className="playlist__track track">
							<div className="track__title">
								<div className="track__title-image">
									<svg className="track__title-svg" alt="music">
										<use xlinkHref="img/icon/sprite.svg#icon-note" />
									</svg>
								</div>
								<div className="track__title-text">
									<a className="track__title-link" href={track.track_file}>
										{track.name}
										<span className="track__title-span" />
									</a>
								</div>
							</div>
							<div className="track__author">
								<a className="track__author-link" href="http:">
									{track.author}
								</a>
							</div>
							<div className="track__album">
								<a className="track__album-link" href="http:">
									{track.album}
								</a>
							</div>
							<div className="track__time">
								<svg className="track__time-svg" alt="time">
									<use xlinkHref="img/icon/sprite.svg#icon-like" />
								</svg>
								<span className="track__time-text">
									{track.duration_in_seconds}
								</span>
							</div>
						</div>
					</div>
				))}

			{!tracks && [...Array(25)].map((n) => <SkeletonTracks key={n} />)}
		</>
	)
}

export default Track
