import SkeletonElement from "./SkeletonElement";

function SkeletonTracks() {
	return (
		<div className="skeleton-wrapper blink">
			<div className="skeleton-avatar-track">
				<SkeletonElement type='avatar' />
				<SkeletonElement type='track' />
			</div>
			<div><SkeletonElement type='name' /></div>
			<div><SkeletonElement type='album' /></div>
			<div className="skeleton-like-time">
				<SkeletonElement type='like' />
				<SkeletonElement type='time' />
			</div>
		</div>
	)
}

export default SkeletonTracks