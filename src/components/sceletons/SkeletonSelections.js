import SkeletonElement from "./SkeletonElement";

function SkeletonSelections() {
	return (
		<div className="skeleton-selections blink">
			<SkeletonElement type='selection' />
			<SkeletonElement type='selection' />
			<SkeletonElement type='selection' />
		</div>
	)
}

export default SkeletonSelections