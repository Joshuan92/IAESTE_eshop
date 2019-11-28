import React, { useState, useEffect } from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import Intern1 from "./../../../public/img/internship1.jpeg";
import Intern2 from "./../../../public/img/internship2.jpeg";
import Intern3 from "./../../../public/img/internship3.jpeg";
import Intern4 from "./../../../public/img/internship4.jpeg";

const images = [Intern1, Intern2, Intern3, Intern4];

const InternKar = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (index === 3) {
                setIndex(0);
            } else {
                setIndex(prev => prev + 1);
            }
        }, 3000);
        return () => clearInterval(timer);
    }, [index]);

    return (
        <Gallery
            style={{
                padding: "30px",
                height: "50vh",
                width: "auto"
            }}
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }}
        >
            {images.map(image => (
                <GalleryImage objectFit="contain" key={image} src={image} />
            ))}
        </Gallery>
    );
}

export default InternKar;
