/* eslint-disable */
import Track from '../Track/Track'
import Searchblock from '../Searchblock/Searchblock'
import './styles.css'
import { useEffect, useState } from 'react'

function TrackList() {
	const [isOpenAuthor, setOpenAuthor] = useState(false)
	const [isOpenDate, setOpenDate] = useState(false)
	const [isOpenGenre, setOpenGenre] = useState(false)

	useEffect(() => {
		const handler = (e) => {
			if (e.target) {
				setOpenAuthor(false)
				setOpenDate(false)
				setOpenGenre(false)
			}
		}

		document.addEventListener('mousedown', handler)
	})

	return (
		<div className="main__centerblock centerblock">
			<Searchblock />
			<h2 className="centerblock__h2">Трек</h2>
			<div className="centerblock__filter filter">
				<div className="filter__title">Искать по:</div>
				<div className="search__block-1">
					<div
						className="filter__button button-author _btn-text"
						onClick={() => setOpenAuthor(!isOpenAuthor)}
					>
						исполнителю
					</div>
					<ul className={`author__list ${isOpenAuthor ? 'active' : ''}`}>
						<li className="author__item">
							<a className="author__link" href="#">
								Alexander Nakarada
							</a>
						</li>
						<li className="author__item">
							<a className="author__link" href="#">
								Frank Schroter
							</a>
						</li>
						<li className="author__item">
							<a className="author__link" href="#">
								Kevin Macleod
							</a>
						</li>
						<li className="author__item">
							<a className="author__link" href="#">
								Mixkit
							</a>
						</li>
						<li className="author__item">
							<a className="author__link" href="#">
								Баста
							</a>
						</li>
						<li className="author__item">
							<a className="author__link" href="#">
								Егор Крид
							</a>
						</li>
						<li className="author__item">
							<a className="author__link" href="#">
								МОТ
							</a>
						</li>
					</ul>
				</div>

				<div className="search__block-2">
					<div
						className="filter__button button-year _btn-text"
						onClick={() => setOpenDate(!isOpenDate)}
					>
						году выпуска
					</div>
					<ul className={`date__list ${isOpenDate ? 'active' : ''}`}>
						<li className="date__item">
							<a className="date__link" href="#">
								1980
							</a>
						</li>
						<li className="date__item">
							<a className="date__link" href="#">
								1970
							</a>
						</li>
						<li className="date__item">
							<a className="date__link" href="#">
								1990
							</a>
						</li>
						<li className="date__item">
							<a className="date__link" href="#">
								2000
							</a>
						</li>
						<li className="date__item">
							<a className="date__link" href="#">
								2010
							</a>
						</li>
						<li className="date__item">
							<a className="date__link" href="#">
								2020
							</a>
						</li>
						<li className="date__item">
							<a className="date__link" href="#">
								1960-1970
							</a>
						</li>
					</ul>
				</div>

				<div className="search__block-3">
					<div
						className="filter__button button-genre _btn-text"
						onClick={() => setOpenGenre(!isOpenGenre)}
					>
						жанру
					</div>
					<ul className={`genre__list ${isOpenGenre ? 'active' : ''}`}>
						<li className="genre__item">
							<a className="genre__link" href="#">
								Хип-Хоп
							</a>
						</li>
						<li className="genre__item">
							<a className="genre__link" href="#">
								Поп-музыка
							</a>
						</li>
						<li className="genre__item">
							<a className="genre__link" href="#">
								Инди
							</a>
						</li>
						<li className="genre__item">
							<a className="genre__link" href="#">
								Электро
							</a>
						</li>
						<li className="genre__item">
							<a className="genre__link" href="#">
								Техно
							</a>
						</li>
						<li className="genre__item">
							<a className="genre__link" href="#">
								Классическая
							</a>
						</li>
						<li className="genre__item">
							<a className="genre__link" href="#">
								Рок
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="centerblock__content">
				<div className="content__title playlist-title">
					<div className="playlist-title__col col01">Трек</div>
					<div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
					<div className="playlist-title__col col03">АЛЬБОМ</div>
					<div className="playlist-title__col col04">
						<svg className="playlist-title__svg" alt="time">
							<use xlinkHref="./img/icon/sprite.svg#icon-watch" />
						</svg>
					</div>
				</div>
				<div className="content__playlist playlist">
					<Track />
				</div>
			</div>
		</div>
	)
}

export default TrackList
