import styled from "@emotion/styled";
import { h } from "preact";
import { MouseHoverEffect } from "../../components/mouse";
import style from "./style.css";

const Home = () => (
	<div class={style.home}>
		<AnimalsContainer>
			<MouseHoverEffect
				img={
					"https://media.os.fressnapf.com/cms/2020/07/ratgeber_hund_rasse_portraits_australian_cattle_dog_1200x527.jpg?t=cmsimg_920"
				}
			>
				<p>Pieski</p>
			</MouseHoverEffect>
			<MouseHoverEffect img="https://i.pinimg.com/originals/d2/bd/e8/d2bde8df6f9111ad741ac8b803957b93.png">
				<p>Kotki</p>
			</MouseHoverEffect>
		</AnimalsContainer>
		<p>
			Sit minim fugiat et mollit non eiusmod laborum sit. Exercitation
			aliquip quis qui elit consectetur velit. Enim sunt ipsum magna
			aliquip fugiat voluptate id Lorem magna.
		</p>
	</div>
);

const AnimalsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	font-size: 2rem;
	font-weight: bold;
`;

export default Home;
