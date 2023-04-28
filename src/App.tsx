import React from 'react';
import { graphql } from './gql';

const episodeFragment = graphql(/* GraphQL */ `
  fragment EpisodeFragment on Episode {
    id
    title
    show {
      id
      title
    }
    releaseDate
    __typename
  }
`);
const movieFragment = graphql(/* GraphQL */ `
  fragment MovieFragment on Movie {
    id
    title
    collection {
      id
    }
    releaseDate
    __typename
  }
`);

const videoDetailsFragment = graphql(/* GraphQL */ `
  fragment DetailsFragment on Video {
    title
    __typename
    ...MovieFragment
    ...EpisodeFragment
  }
`);

const videoQueryDocument = graphql(/* GraphQL */ `
  query Video($id: ID!) {
    video(id: $id) {
      ...DetailsFragment
      __typename
    }
  }
`);

function App() {
  return (
    <pre>
      {videoQueryDocument.toString()}
    </pre>
  );
}

export default App;
