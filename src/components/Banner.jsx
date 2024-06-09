import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] uppercase font-bold leading-[1] lg:text-[110px]"
            >
              <h1>
                {" "}
                SAM <span>Velasco</span>
              </h1>
              <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
                <span className="text-white mr-4">I am a</span>
                <TypeAnimation
                  sequence={[
                    "",
                    2000,
                    "Developer",
                    2000,
                    "Student",
                    2000,
                    "Lab instructor",
                    2000,
                    "Developer",
                    60000,
                  ]}
                  speed={50}
                  className="text-[#3bace2]"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mv-8 max-w-lg mx-auto lg:mx-0 pb-3"
            >
              Software Engineering student and Fullstack Web Developer. I enjoy
              challenges and learning new things.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {}
            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaYoutube></FaYoutube>
              </a>
              <a href="#">
                <FaGithub></FaGithub>
              </a>
              <a href="#">
                <FaDribbble></FaDribbble>
              </a>
            </motion.div>
          </div>
          {}
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto">
            {/* <img src={Image} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
