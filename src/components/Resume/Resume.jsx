import { useRef } from "react";
import "./Resume.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const sliderVariants2 = {
    initial: {
        x: "-80%",
    },
    animate: {
        x: "20%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 30,
        },
    },
};

const Resume = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="services1"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="titleContainer1" variants={variants}>
                <div className="title">
                    <h2>
                        <motion.b whileHover={{ color: "orange" }}>CERTIFICATIONS</motion.b>
                    </h2>
                </div>
            </motion.div>

            <motion.div className="slidingTextContainer1">
                <motion.img
                    src="./NETINTI LAXMIVASANTHVARUN.png"
                    height={700}
                    width={500}
                    className="staticImage"
                    style={{ zIndex: 10 }}
                />
                <motion.div
                    className="scrollingImages1"
                    variants={sliderVariants2}
                    initial="initial"
                    animate="animate"
                >
                    <img src="./jsc.png" height={200} width={300} />
                    <img src="./jsc.png" height={200} width={300} />
                    <img src="./jsc.png" height={200} width={300} />
                    <img src="./jsc.png" height={200} width={300} />
                    <img src="./jsc.png" height={200} width={300} />
                    <img src="./jsc.png" height={200} width={300} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Resume;
