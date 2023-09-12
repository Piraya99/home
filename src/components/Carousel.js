import React, { useState } from 'react';
import styles from './Carousel.module.css';
import ArrowLeftCircleFill from '../img/icon/arrow-left-circle-fill.svg';
import ArrowRightCircleFill from '../img/icon/arrow-right-circle-fill.svg';

export default function Carousel(props) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? props.project.slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = currentIndex === props.project.slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div>
			<div className={styles.carousel}>
				<div className={styles.slides}>
					<img src={props.project.slides[currentIndex]} alt={props.project.name} />
				</div>
				{ props.project.slides.length > 1 &&
					<div className={styles.arrows}>	
						<img className={styles.arrowLeft} src={ArrowLeftCircleFill} alt="arrow-left" onClick={goToPrevious}/>
						<img className={styles.arrowRight} src={ArrowRightCircleFill} alt="arrow-right" onClick={goToNext}/>
					</div>
				}
			</div>
			{ props.project.slides.length > 1 &&
				<div className={styles.dotsContainer}>
					{props.project.slides.map((slides, slideIndex) => (
						<div className={styles.dots} key={slideIndex} onClick={() => setCurrentIndex(slideIndex)}>•</div>
					))}
				</div>
			}
		</div>
	);
};