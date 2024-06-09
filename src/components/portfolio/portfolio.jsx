import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import Slider from "react-slick";

const items = [
    {
        id: 1,
        title: "Expense Tracker",
        images: [
            "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",


            // Add more image URLs as needed
        ],
        desc: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
        id: 2,
        title: "Filmpire",
        images: [
            "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            // Add more image URLs as needed
        ],
        desc: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
];

// ... (Your existing components)

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Replace with your custom dots container component
};

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div  id='Projects' className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            <div className="progress1">
                <h1> </h1>
            </div>

            <div class="ui-container">
                <div class="slider-container">
                    <Slider {...settings}>
                        {items[0].images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))}
                    </Slider>
                </div>
                <h2>{items[0].title}</h2>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <button>See Demo</button>
            </div>

            <div class="ui-container">
                <div class="slider-container">
                    <Slider {...settings}>
                        {items[0].images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))}
                    </Slider>
                </div>
                <h2>{items[0].title}</h2>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <p>{items[0].desc}</p>
                <button>See Demo</button>
            </div>




            {/* {items.map((item) => (
                <Single item={item} key={item.id} />
            ))} */}
        </div>
    );
};

export default Portfolio;
