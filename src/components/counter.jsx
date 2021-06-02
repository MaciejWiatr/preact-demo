import { h } from "preact";
import { useState } from "preact/hooks";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { MouseHoverEffect } from "./mouse";

const Counter = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount((c) => c + 1);
	};

	return (
		<Container>
			<BigHeader
				animate={{
					x: [-100, 0, 100],
					rotateZ: [0, 360, 0],
				}}
				transition={{
					type: "spring",
					bounce: 0.25,
					repeat: Infinity,
					repeatType: "reverse",
				}}
			>
				{count}
			</BigHeader>
			<MouseHoverEffect>
				<button onClick={handleClick}>Click me</button>
			</MouseHoverEffect>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

const BigHeader = styled(motion.h1)`
	transform-origin: "center";
	color: red;
`;

export default Counter;
