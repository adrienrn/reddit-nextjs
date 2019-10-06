import React, { createContext, useEffect, useContext, useReducer, useState } from 'react';

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const RestContext = createContext({});

export function useApiClient() {
  const context = useContext(RestContext);
  return [context.client];
}

export function useApiRequest(request) {
  const initialState = {
    status: null,
    response: null,
  };

  const [state, dispatch] = useReducer((state, {type, response} = {}) => {

    switch (type) {
        case 'FETCHING':
            return { ...initialState, status: 'FETCHING'};
        case 'SUCCESS':
            return { ...state, status: 'SUCCESS', response};
        case 'ERROR':
            return { ...state, status: 'ERROR',};
        default:
            return state;
    }
  }, initialState);

  const [client] = useApiClient();

  const refetch = () => {
    try {
      dispatch({type: 'FETCHING'});
      client
        .fetch(request.subReddit, request.filters, request.limit, request.offset)
        .then((data) => {
          dispatch({type: 'SUCCESS', response: data});

          return data;
        })
        .catch((error) => {
          console.log(error);
          dispatch({type: 'ERROR', });
        })
      ;
    } catch (error) {
      console.log(error);
      dispatch({type: 'ERROR', });
    }
  };

  const fetchMore = () => {
    const currentData = data;
  };

  return {
    data: state.response,
    error: 'ERROR' === state.status,
    loading: 'FETCHING' === state.status,
    refetch: refetch,
  };
}

export default function ApiProvider({ children }) {
  const [state] = useState({
    client: createDataProvider(),
  });

  return <RestContext.Provider value={state}>{children}</RestContext.Provider>;
}

export function denormalizeError(error) {
  return {
    text:
      'This error probably means the server is unreachable, make sure the service is running',
    title: 'Unknown server error',
  };
}

function handleAPIError(response) {
  return response.json().then(data => {
    if (!response.ok) {
      return Promise.reject(data);
    }

    return data;
  });
}

function denormalize(data) {
  const iterableData = data.data.children.map((child) => {
    return child.data;
  });

  return iterableData;
}

function createDataProvider() {
  const defaultLimit = 10;
  const defaultOffset = 0;

  return {
    fetch: function(resourceEndpoint, filters, limit, offset) {
      if (!resourceEndpoint) {
        // return new Promise()
        //   .then((x) => {
        //     return Promise.reject();
        //   })
        // ;
        throw new Error();
      }

      const endpointUrl = new URL(
        publicRuntimeConfig.redditApiUrl + '/r' + '/' + resourceEndpoint.replace(/^\//, '') + '/new.json',
      );

      endpointUrl.searchParams.set('limit', limit || defaultLimit);
      endpointUrl.searchParams.set('skip', offset || defaultOffset);

      return fetch(endpointUrl)
        .then(handleAPIError)
        .then(denormalize);
    },
    getEndpoint: function() {
      return endpoint;
    },
    searchSubReddit: function(filters, limit, offset) {
      const endpointUrl = new URL(
        publicRuntimeConfig.redditApiUrl + '/subreddits/search.json',
      );

      if (filters) {
        Object.keys(filters).map((filterName) => {
          endpointUrl.searchParams.set(filterName, filters[filterName]);
        });
      }

      return fetch(endpointUrl)
        .then(handleAPIError)
        .then(denormalize)
      ;
    },
  };
}
