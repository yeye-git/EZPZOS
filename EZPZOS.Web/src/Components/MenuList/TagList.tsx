// File: src/Components/TagList.tsx
import React from "react";

interface TagListProps {
	tags: string[];
}

/**
 * @param tags - The tag list of tags {@link TagListProps.tags}
 */
const TagList: React.FC<TagListProps> = ({ tags }) => {
	return (
		<div className="flex flex-wrap mt-2">
			{
				//mapping tags
				tags.map((tag, index) => (
					<span
						key={index}
						className="inline-block bg-side-bar-gradient text-white text-[12px] px-2 py-[2px] rounded-sm mr-2"
					>
						#{tag}
					</span>
				))
			}
		</div>
	);
};

export default TagList;
