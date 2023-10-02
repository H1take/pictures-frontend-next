"use client"
import React, { useState, useRef, useEffect } from 'react';
import images from "@/utils/images";
import { motion } from "framer-motion";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import Image from "next/image";

import "@/styles/slider.css";

const SliderComponent = () => {
    const [width, setWidth] = useState<number>(0);
    const carousel = useRef<any>();

    useEffect(() =>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className="slider">
            <div className="leftArrow">
                <Image src={leftArrow} alt="left arrow" />
            </div>
            <motion.div ref={carousel} className="carousel">
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="inner-carousel"
                >
                    {images.map((image: any, index: number) => {
                        return (
                            <motion.div key={index} className="item">
                                <Image src={image} alt="image" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
            <div className="rightArrow">
                <Image src={rightArrow} alt="right arrow" />
            </div>
        </div>
    );
};

export default SliderComponent;