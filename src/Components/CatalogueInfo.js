import React, { useState, useEffect } from "react";
//import englishData from "./data/english.json";
//import tamilData from "./data/tamil.json";

const HotelInfo = () => {
  const [englishData, setEnglishBooksData] = useState([]);
  const loadEnglishData = async () => {
    const resp = await fetch(
      "https://tqbhblyv3l.execute-api.us-east-1.amazonaws.com/Production/englishbooks"
    );
    let jsonData = await resp.json();
    setEnglishBooksData(jsonData);
  };
  useEffect(() => {
    loadEnglishData();
  }, []);
  const [tamilData, setTamilBooksData] = useState([]);
  const loadTamilData = async () => {
    const resp = await fetch(
      "https://tqbhblyv3l.execute-api.us-east-1.amazonaws.com/Production/tamilbooks"
    );
    let jsonData = await resp.json();
    setTamilBooksData(jsonData);
  };
  useEffect(() => {
    loadTamilData();
  }, []);
  return (
    <div className="scene" id="hotelinfo">
      <article className="heading">
        <h1>My Reading Catalogue</h1>
      </article>
      <article id="usefulinfo">
        <section id="arrivalinfo">
          <h2>Books I loved the most</h2>
          <ul>
            <li>
              <strong>Ponniyin Selvan by Kalki</strong>
            </li>
            <li>
              <strong>Becoming by Michelle Obama</strong>
            </li>
            <li>
              <strong>The Kite Runner by Khaled Hosseini</strong>
            </li>
            <li>
              <strong>Norwegian Wood by Haruki Murakami</strong>
            </li>
            <li>
              <strong>My Life in Full by Indra Nooyi</strong>
            </li>
            <li>
              <strong>The Empress of Indraprastha by Sonali Raje</strong>
            </li>
          </ul>
        </section>
        <section className="checklist" id="services">
          <h2>Tamil</h2>
          <ul>
            {tamilData.map((tamilbook) => (
              <li>{tamilbook.name}</li>
            ))}
          </ul>
        </section>
        <section className="checklist" id="accessibility">
          <h2>English</h2>
          <ul>
            {englishData.map((englishbook) => (
              <li>{englishbook.name}</li>
            ))}
          </ul>
        </section>
      </article>
      <article id="greenprogram">
        <h2>Going Green!!!</h2>
        <p>
          In today's digital age, embracing eBooks is not just a matter of
          convenience but also a significant step towards environmental
          sustainability. By choosing eBooks over traditional printed books, we
          can substantially reduce our carbon footprint. The production of paper
          books involves deforestation, water consumption, and the emission of
          greenhouse gases during the manufacturing and transportation
          processes. In contrast, eBooks eliminate the need for paper and ink,
          and they can be distributed instantly without the environmental costs
          associated with shipping. Moreover, eBooks offer the advantage of
          being stored and accessed on a single device, reducing the physical
          space required to house a personal library. This shift not only
          conserves natural resources but also aligns with the minimalist
          lifestyle that many are adopting today. By going green through eBooks,
          we are making a conscious choice to support a more sustainable future.
          It's a small change in our reading habits that can lead to significant
          positive impacts on our planet. So, the next time you reach for a new
          read, consider downloading an eBook and join the movement towards a
          greener, more eco-friendly world.
        </p>
      </article>
    </div>
  );
};
export default HotelInfo;
