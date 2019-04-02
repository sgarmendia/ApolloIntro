import React from 'react';
import propTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ToggleFavorite from '../common/toggleFavorite';

import './list.css';

const List = () => {
  return (
    <div className="countries-list">
      {[
        { code: 'AR', name: 'Argentina', isFavorite: false },
        { code: 'CA', name: 'Canada', isFavorite: true },
        { code: 'ES', name: 'Spain', isFavorite: false }
      ].map(country => (
        <Link to={`/contry/${country.code}`} key={country.code}>
          <Paper className="country-card" elevation={1}>
            <img src={`http://www.countryflags.io/${country.code}/flat/64.png`} alt={country.code} />
            <div className="country-card-content">
              <Typography variant="h5" component="h3">
                {country.name}
              </Typography>
            </div>
            <ToggleFavorite code={country.code} isFavorite={country.isFavorite} />
          </Paper>
        </Link>
      ))}
    </div>
  );
};

// List.propTypes = {
//   data: propTypes.object.isRequired
// };

// const query = gql`
// `;

export default List;
