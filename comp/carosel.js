import Link from 'next/link';
import Router, { useRouter } from "next/router"
import React, { useState } from 'react'
import styles from '/styles/Home.module.css'
import Head from 'next/head'

// const [_document, set_document] = React.useState()

// React.useEffect(() => {
//     set_document(document)
// }, [])

// var index = 0; 
// var slides = document.getElementsByClassName("sliderContainer"); 

// var nextArrow = document.getElementByClassName("nextBtn");

// var previousArrow = document.getElementByClassName("preBtn");

// showSlides(index); 

// function showSlides(x) {
// 	if (x > slides.length-1) {
// 		index = 0; 
// 	}
// 	if (x < 0) {
// 		index = slides.length-1; 
// 	}
// 	for (i=0; i < slides.length; i++) {
// 		slides[i].style.display = "none";  
// 	}
	
// 	slides[index].style.display = "block";
// }

// nextArrow.onclick = function() {
// 	index += 1; 
// 	showSlides(index); 
// } 

// previousArrow.onclick = function() {
// 	index -= 1; 
// 	showSlides(index); 
// } 

// dotArray[0].onclick = showSlides(1); 

const Slide = (props) => {
    const btnContainer = {
      display: "inline-block",
      float: "right"
    };
    const btn = {
      border: "none",
      background: "blue",
      color: "white",
      fontSize: "22px",
      padding: "5px 10px",
      borderRadius: "10px",
      margin: "0 10px"
    };
    return (
      <React.Fragment>
        <img src={props.image.link} alt="Sliderr_image" />
        <h1>
          {props.image.title}
          <span style={btnContainer}>
            <button style={btn} onClick={props.slidePrev}>
              {"<"} Prevs
            </button>
            |
            <button style={btn} onClick={props.slideNext}>
              {">"} Next
            </button>
          </span>
        </h1>
      </React.Fragment>
    );
  };
  const caroselImage = (props) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slides = [
      {
        id: 0,
        title: "Oth Slide",
        link: "/carousel-images/0.jpg"
      },

      {
        id: 1,
        title: "First Slide",
        link: "/carousel-images/1.jpg"
      },

      {
        id: 2,
        title: "Second Slide",
        link: "/carousel-images/2.jpg"
      },

      {
        id: 3,
        title: "Third Slide",
        link: "/carousel-images/3.jpg"
      },

      {
        id: 4,
        title: "Fourth Slide",
        link: "/carousel-images/4.jpg"
      },

      {
        id: 5,
        title: "Fith Slide",
        link: "/carousel-images/5.jpg"
      }
    ];
    const slideNext = (e) => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : currentSlide + 1;
      });
    };
    const slidePrev = (e) => {
      setCurrentSlide((prev) => {
        return prev === 0 ? slides.length - 1 : currentSlide - 1;
      });
    };
    React.useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((prev) => {
          return prev + 1 === slides.length ? 0 : prev + 1;
        });
      }, 4000);
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    return (
      <React.Fragment>
        <Slide
          image={slides[currentSlide]}
          slideNext={slideNext}
          slidePrev={slidePrev}
        />
      </React.Fragment>
    );
  };