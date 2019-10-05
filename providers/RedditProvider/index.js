import React, { createContext, useEffect, useContext, useReducer, useState } from 'react';

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
        .fetch(request.subReddit, {})
        .then((data) => {
          const posts = data.data.children.map((child) => {
            return child.data;
          });

          dispatch({type: 'SUCCESS', response: posts});

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
  return data;
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
        'http://172.17.97.61:8081/https://reddit.com/r' + '/' + resourceEndpoint.replace(/^\//, '') + '.json',
      );

      endpointUrl.searchParams.set('take', limit || defaultLimit);
      endpointUrl.searchParams.set('skip', offset || defaultOffset);

      return fetch(endpointUrl)
        .then(handleAPIError)
        .then(denormalize);
    },
    getEndpoint: function() {
      return endpoint;
    },
  };
}
