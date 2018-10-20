// e.hosseini.ir@gmail.com

import axios from 'axios';

import Catalog from './containers/Catalog';

export const routes = [
  {
    path: '/catalog/',
    component: Catalog,
  }
];

const getCatalogListType = "GET_CATALOG_LIST";

const initialState = {
  error: null,
  isLoading: false,
  cataloges: [],
};

export const actionCreators = {
  getCatalogList: page => (dispatch, getState) => {
    axios
      .post(
        "https://dev.app.address.hichestan.org/rest/v3/catalogs/search/10/" +
          page,
        {}
      )
      .then(response => {
        if (response.status !== 200) return;
        const result = {
          cataloges: response.data.data
        };
        dispatch({ type: getCatalogListType, ...result });
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case getCatalogListType:
      return {
        ...state,
        cataloges: action.cataloges,
      };

    default:
      return state;
  }
};
