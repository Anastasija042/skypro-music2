/* eslint-disable */
import './styles.css'
import { useEffect, useState } from 'react'
import SkeletonSelections from '../sceletons/SkeletonSelections.js'

function Playlist() {
	const [selections, setSelection] = useState(null)

	// useEffect(() => {
	// 	setTimeout(async () => {
	// 		const res = await fetch(
	// 			'https://skypro-music-api.skyeng.tech/catalog/selection/',
	// 		)
	// 		const data = await res.json()
	// 		setSelection(data)
	// 	}, 5000)
	// }, [])

	useEffect(() => {
		setTimeout(() => {
			fetch('https://skypro-music-api.skyeng.tech/catalog/selection/')
				.then((res) => res.json())
				.then((json) => setSelection(json))
		}, 5000)
	})

	return (
		<>
			{selections &&
				selections.map((selection) => (
					<div className="sidebar__item" key={selection.id}>
						<a className="sidebar__link" href="index.html">
							<img
								className="sidebar__img"
								src="img/playlist01.png"
								alt="day's playlist"
							/>
						</a>
					</div>
				))}
			{!selections && [1, 2, 3].map((n) => <SkeletonSelections key={n} />)}
		</>
	)
}

export default Playlist
