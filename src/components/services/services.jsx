import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";

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
        x: 0,
    },
    animate: {
        x: "-20%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Services = () => {
    const ref = useRef();

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p className="quotation">
                    I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <h2>
                        <motion.b whileHover={{ color: "orange" }}>Technologies I Know</motion.b>
                    </h2>
                </div>


                {/* <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}></motion.b>.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div> */}


            </motion.div>

            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants2}
                initial="initial"
                animate="animate"
            >
                <img alt="" src="./html-5.png" height={100} width={100} />
                <img alt="" src="./css-3.png" height={100} width={100} />
                <img alt="" src="./js.png" height={100} width={100} />


                <img alt="" src="./java.png" height={100} width={100} />
                <img alt="" src="./mysql.png" height={100} width={100} />



                <img alt="" src="./mongodb.png" height={100} width={100} />
                <img alt="" src="./nodejs.png" height={100} width={100} />

                <img alt="" src="./spring-boot.png" height={100} width={100} />

            </motion.div>


            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>FRONT END</h2>
                    <h4>HTML</h4>
                    <h4>CSS</h4>
                    <h4>SCSS</h4>
                    <h4>TAILWIND</h4>
                    <h4>JAVASCRIPT</h4>
                    <h4>REACT</h4>
                    <h4>TYPESCRIPT</h4>
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>BackEnd</h2>


                    <h4>REDUX</h4>
                    <h4>NODE | EXPRESS</h4>
                    <h4>SPRING BOOT</h4>
                    <h4>MICROSERVICES</h4>
                    <h4>NEXTJS</h4>
                    <h4>JAVA</h4>

                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Database</h2>
                    <h4>MYSQL</h4>
                    <h4>MONGO DB</h4>
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >

                    <h4>DOCKER</h4>
                    <h4>HTTP LISTENER</h4>
                    <h4>JSON SERVER</h4>
                    <h4>XML</h4>
                    <h4>CLIENT SIDE RENDERING</h4>
                    <h4>SERVER SIDE RENDERING</h4>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
