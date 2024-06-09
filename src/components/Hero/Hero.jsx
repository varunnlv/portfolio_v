import React, { useEffect } from 'react';
import './Hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: '-620%',
        transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 80,
        },
    },
};

const Hero = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const changeTextLetter = (element) => {
        let iteration = 0;
        const initText = element.innerText;
        const textLength = initText.length;

        const interval = setInterval(() => {
            element.innerText = initText
                .split('')
                .map((letter, index) => {
                    if (index < iteration) {
                        return element.dataset.textValue[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join('');

            if (iteration >= textLength) {
                iteration = 0; // Reset iteration for continuous loop
            }

            iteration += 1 / 10;
        }, 50);

        return interval; // Return the interval ID for cleanup
    };

    useEffect(() => {
        const animTexts = document.querySelectorAll('.animated-text');
        const intervals = [];

        animTexts.forEach((element) => {
            element.dataset.textValue = element.innerText;
            intervals.push(changeTextLetter(element)); // Start the animation and store the interval ID
        });
        return () => {
            intervals.forEach(clearInterval); // Clear all intervals on component unmount
        };
    }, []);

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <div className="wrapper3">
                        <h1 className="animated-text">VARUN NLV</h1>
                    </div>
                    <motion.h1 variants={textVariants}> Web Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons"></motion.div>
                </motion.div>
            </div>
            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Front End | Back End | Full Stack
            </motion.div>
        </div>
    );
};

export default Hero;
