import SkeletonElement from "./SkeletonElement";

function SkeletonPlayer() {
	return (
		<div className="skeleton-player blink">
			<div>
				<SkeletonElement type='playerAvatar' />
			</div>
			<div>
				<SkeletonElement type='playerTrack' />
				<SkeletonElement type='playerTrack' />
			</div>
		</div>
	)
}

export default SkeletonPlayer