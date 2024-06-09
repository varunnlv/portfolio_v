import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-5%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",

                duration: 10,
            },
        },
    };

    const sliderVariants1 = {
        initial: {
            z: 0,
        },
        animate: {
            z: "100%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",

                duration: 10,
            },
        },
    };

    return (
        <div
            id="Education"
            className="parallax"
            ref={ref}
            style={{
                background:
                    type === "services"
                        ? "linear-gradient(180deg, white, #0c0c1d)"
                        : "linear-gradient(180deg, white, #505064)",
            }}
        >


            <motion.div className="Righttab">

                {/* <div style={{ y: yBg }} className="stars"></div> */}


                <motion.div
                    className="slidingTextContainer"
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate"
                >
                    <img src="./stars.png" />
                </motion.div>

            </motion.div>

            {/* <motion.h1 style={{ y: yText }}>
                {type === "services" ? "Work" : "Education"}
            </motion.h1> */}

            {/* <motion.div
                className="planets"
                style={{
                    y: yBg,
                    backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"
                        })`,
                }}
            ></motion.div> */}


            <div className="Righttab1">

                <h2>Experience</h2>
                <h3 className="font-bold text-2xl mb-6">May 2022 - Present</h3>
                <p className="font-light leading-7 mb-6">
                    Software Engineer
                </p>
                <p className="font-light leading-7 mb-6">
                    INTERNATIONAL DESIGN AND ENGINEERING SOLUTIONS PVT.LTD, PUNE
                </p>
                <p className="font-light leading-7 mb-6">
                    You can keep this relatively short. Talk a bit about your major, when
                    you graduated (or when you WILL graduate), and any accomplishments you
                    made while you were there. Deans list, sports teams, clubs, whatever
                    shows you've put in some effort!
                </p>

            </div>


            <motion.div className="mountains"></motion.div>
        </div>
    );
};

export default Parallax;