import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
// import { useEffect } from "preact/hooks";
import { useMouse, useHover } from "react-use";
import { createContext, h, Fragment } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

const MouseFollower = ({ appRef }) => {
	const { docX, docY } = useMouse(appRef);
	const { mouseState } = useContext(MouseContext);
	const { isHovered, hoverImg } = mouseState;

	return (
		<MouseCircle
			animate={{
				x: docX,
				y: docY,
				scale: isHovered ? 3 : 1,
			}}
			transition={{
				x: {
					type: "spring",
					stiffness: 150,
					damping: 15,
				},
				y: {
					type: "spring",
					stiffness: 150,
					damping: 15,
				},
			}}
		>
			<AnimatePresence exitBeforeEnter>
				{hoverImg && (
					<MouseImage
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.3 }}
						exit={{ opacity: 0 }}
						src={hoverImg}
					/>
				)}
			</AnimatePresence>
		</MouseCircle>
	);
};

const MouseCircle = styled(motion.div)`
	position: absolute;
	height: 2.5rem;
	width: 2.5rem;
	border-radius: 50%;
	pointer-events: none;
	/* background-color: red; */
	backdrop-filter: invert(100%);
	object-fit: cover;
	overflow: hidden;
`;

const MouseImage = styled(motion.img)`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const defaultMouseState = { isHovered: false, hoverImg: null };
const MouseContext = createContext(defaultMouseState);

const MouseHoverContext = ({ children }) => {
	const [mouseState, setMouseState] = useState(defaultMouseState);

	return (
		<MouseContext.Provider value={{ mouseState, setMouseState }}>
			{children}
		</MouseContext.Provider>
	);
};

const MouseHoverEffect = ({ children, img = null, scale = 3 }) => {
	const { mouseState, setMouseState } = useContext(MouseContext);

	const handleMouseEnter = () => {
		if (!mouseState.isHovered) {
			setMouseState(() => ({ isHovered: true, hoverImg: img }));
		}
	};

	const handleMouseLeave = () => {
		setMouseState(() => ({ isHovered: false, hoverImg: false }));
	};

	return (
		<HoverArea onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
			{children}
		</HoverArea>
	);
};

const HoverArea = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

export default MouseFollower;
export { MouseHoverContext, MouseHoverEffect };
