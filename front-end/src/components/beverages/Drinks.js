import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Drink from "./Drink";
import axios from "axios";
import "./Drinks.css";
import Aos from "aos";
import "aos/dist/aos.css";
const API = process.env.REACT_APP_API_URL;

const Drinks = () => {
  const [alcohol, setAlcohol] = useState([]);
  let { category } = useParams();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    axios
      .get(`${API}/alcohols/category/${category}`)
      .then((response) => {
        setAlcohol(response.data.alcohols);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <div data-aos="fade-up">
      <Link id="alcohol-back-button" to="/alcohols/categories">
        <button>Back</button>
      </Link>
      <h1 className="drink-header">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <section className="alcohol-list">
        {alcohol.map((alcohol, index) => {
          return <Drink alcohol={alcohol} index={index} />;
        })}
      </section>
    </div>
  );
};

export default Drinks;
