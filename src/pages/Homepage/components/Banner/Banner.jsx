import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  // console.log('ddd', data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <Alert variant="light">{error.message}</Alert>;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[0].backdrop_path}` +
          ')',
      }}
    >
      <div className="text-white banner-text-area">
        <h3 className="pick-text">"Today's Solflix Pick !"</h3>

        <h1>{data.results[0].title}</h1>
        {/* 정리하고 다시 <span>
          <FontAwesomeIcon icon={faStar} />
          &nbsp;
          {Math.floor(data.results[0].vote_average)}
        </span>*/}
        <span>{data.results[0].tagline}</span>
        <p>{data.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
