import React from "react";
import PropTypes from 'prop-types';
import './Cell.css';

const Cell = ({ data }) => (
    <div className="cell">
      <article>
        <header>
          <h3><a href={data.link}>{data.title}</a></h3>
        </header>
        <a href={data.link}>
          <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
        </a>
        <div className="description">
          <p>{data.desc}</p>
        </div>
      </article>
    </div>
  );

Cell.propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      image: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  };


export default Cell;