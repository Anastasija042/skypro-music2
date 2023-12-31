import Playlist from '../Playlist/Playlist'
import './styles.css'

function SideBar() {
	return (
		<div className="main__sidebar sidebar">
			<div className="sidebar__personal">
				<p className="sidebar__personal-name">Sergey.Ivanov</p>
				<div className="sidebar__icon">
					<svg alt="logout">
						<use xlinkHref="img/icon/sprite.svg#logout" />
					</svg>
				</div>
			</div>
			<div className="sidebar__block">
				<div className="sidebar__list">
					<Playlist />
				</div>
			</div>
		</div>
	)
}

export default SideBar
