import React from 'react';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import MovieTag from '../../../../common/MovieTag/MovieTag';
import './MovieRecommendCard.style.css';
import { useNavigate } from 'react-router-dom';

const MovieRecommendCard = ({ item }) => {
  const { data: genre } = useMovieGenreQuery();
  const navigate = useNavigate();

  const showGenre = (genreIdList) => {
    if (!genre) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genre.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  const goToDetail = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div
      onClick={() => goToDetail(item?.id)}
      className="recommend-card-box"
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${item?.backdrop_path})`,
      }}
    >
      <div className="recommend-card-detail">
        <div className="recommend-card-title-wrap">
          <h4 className="recommend-card-title">{item?.title}</h4>
          <div className="recommend-genre-badge">
            {showGenre(item.genre_ids).map((id, index) => (
              <span className="badge-bg">{id}</span>
            ))}
          </div>
        </div>
        <MovieTag movie={item} />
      </div>
    </div>
  );
};

export default MovieRecommendCard;
