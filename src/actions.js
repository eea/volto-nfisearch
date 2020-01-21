import {
  SET_LOADER,
  SET_FOLDER_TABS,
  GET_KEYWORDS,
  GET_COUNTRY,
  GET_DATA_SET,
  GET_DATA_TYPE,
  GET_INFO_LEVEL,
  GET_LANGUAGE,
  GET_NUTS_LEVEL,
  GET_RESOURCE_TYPE,
  GET_TOPIC_CATEGORY,
  GET_PUBLICATION_YEARS,
  GET_COLECTION_RANGE,
  NFI_SEARCH,
} from './constants';

export function setLoader(value) {
  return {
    type: SET_LOADER,
    payload: value,
  };
}

export function setFolderTabs(payload) {
  return {
    type: SET_FOLDER_TABS,
    payload: payload,
  };
}


/**
 * Facets GET list requests
 */
export function getKeywords() {
  return {
    type: GET_KEYWORDS,
    baseType: GET_KEYWORDS,
    stateToChange: 'keyword',
    request: {
      op: 'get',
      path: 'http://localhost:8000/api/facets/keyword/',
      external: true,
    },
  };
}
export function getCountry() {
  return {
    type: GET_COUNTRY,
    baseType: GET_COUNTRY,
    stateToChange: 'country',
    request: {
      op: 'get',
      path: 'http://localhost:8000/api/facets/country/',
      external: true,
    },
  };
}

export function getDataSet() {
  return {
    type: GET_DATA_SET,
    baseType: GET_DATA_SET,
    stateToChange: 'data_set',
    request: {
      op: 'get',
      path: 'http://localhost:8000/api/facets/data-set/',
      external: true,
    },
  };
}

export function getDataType() {
  return {
    type: GET_DATA_TYPE,
    baseType: GET_DATA_TYPE,
    stateToChange: 'data_type',
    request: {
      op: 'get',
      path: 'http://localhost:8000/api/facets/data-type/',
      external: true,
    },
  };
}

export function getInfoLevel() {
  return {
    type: GET_INFO_LEVEL,
    baseType: GET_INFO_LEVEL,
    stateToChange: 'info_level',
    request: {
      op: 'get',
      path: 'http://localhost:8000/api/facets/info-level/',
      external: true,
    },
  };
}

export function getNutsLevel() {
  return {
    type: GET_NUTS_LEVEL,
    baseType: GET_NUTS_LEVEL,
    stateToChange: 'nuts_level',
    request: {
      op: 'get',
      path: 'http://localhost:8000/api/facets/nuts-level/',
      external: true,
    },
  };
}

export function getResourceType() {
  return {
    type: GET_RESOURCE_TYPE,
    baseType: GET_RESOURCE_TYPE,
    stateToChange: 'resource_type',
    request: {
      op: 'get',
      path: 'http://localhost:8000/api/facets/resource-type/',
      external: true,
    },
  };
}

export function getTopicCategory() {
  return {
    type: GET_TOPIC_CATEGORY,
    baseType: GET_TOPIC_CATEGORY,
    stateToChange: 'topic_category',
    request: {
      op: 'get',
      path: 'http://localhost:8000/api/facets/topic-category/',
      external: true,
    },
  };
}

export function getPublicationYears() {
  return {
    type: GET_PUBLICATION_YEARS,
    baseType: GET_PUBLICATION_YEARS,
    stateToChange: 'published_year',
    request: {
      op: 'get',
      path: 'http://localhost:8000/api/publication_years/',
      external: true,
    },
  };
}

export function getColectionRange() {
  return {
    type: GET_COLECTION_RANGE,
    baseType: GET_COLECTION_RANGE,
    stateToChange: 'collections_range',
    request: {
      op: 'get',
      path: 'http://localhost:8000/api/collections_range/',
      external: true,
    },
  };
}

export function getLanguage() {
  return {
    type: GET_LANGUAGE,
    baseType: GET_LANGUAGE,
    stateToChange: 'language',
    request: {
      op: 'get',
      path: 'http://localhost:8000/api/facets/language/',
      external: true,
    },
  };
}

export function doNfiSearch(
  page = null,
  pageSize = null,
  searchTerms = '',
  keywords = '',
  countries = '',
  customQuery = '',
) {
  let pageQuery = page ? `&page=${page}` : '';
  let pageSizeQuery = pageSize ? `&page_size=${pageSize}` : '';
  let searchTermsQuery = '';
  let keywordsQuery = '';
  let countriesQuery = '';
  let query = '';
  // Construct searchTermQuery
  if (Array.isArray(searchTerms) && searchTerms.length > 0) {
    searchTerms.forEach(term => {
      searchTermsQuery = searchTermsQuery + `&search=${term}`;
    });
  } else if (searchTerms.length > 0) {
    searchTermsQuery = searchTermsQuery + `&search=${searchTerms}`;
  }
  // Construct keywordsQuery
  if (Array.isArray(keywords) && keywords.length > 0) {
    keywords.forEach(keyword => {
      keywordsQuery = keywordsQuery + `&search=${keyword}`;
    });
  } else if (keywords.length > 0) {
    keywordsQuery = keywordsQuery + `&search=${keywords}`;
  }
  // Construct countriesQuery
  if (Array.isArray(countries) && countries.length > 0) {
    countries.forEach(country => {
      countriesQuery = countriesQuery + `&country=${country}`;
    });
  } else if (countries.length > 0) {
    countriesQuery = countriesQuery + `&country=${countries}`;
  }
  // Construct query
  query =
    pageQuery +
    pageSizeQuery +
    searchTermsQuery +
    keywordsQuery +
    countriesQuery +
    customQuery;
  query = query.replace('&', '?');
  return {
    type: NFI_SEARCH,
    baseType: NFI_SEARCH,
    stateToChange: 'search',
    request: {
      op: 'get',
      path: `http://localhost:8000/api/search/${query}`,
      external: true,
    },
  };
}
