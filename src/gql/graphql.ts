/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Collection = {
  __typename?: 'Collection';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Episode = Video & {
  __typename?: 'Episode';
  id: Scalars['ID'];
  releaseDate: Scalars['Date'];
  show: Show;
  title: Scalars['String'];
};

export type Movie = Video & {
  __typename?: 'Movie';
  collection?: Maybe<Collection>;
  id: Scalars['ID'];
  releaseDate: Scalars['Date'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  video: Video;
};


export type QueryVideoArgs = {
  id: Scalars['ID'];
};

export type Show = {
  __typename?: 'Show';
  id: Scalars['ID'];
  releaseDate: Scalars['Date'];
  title: Scalars['String'];
};

export type Video = {
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type EpisodeFragmentFragment = { __typename: 'Episode', id: string, title: string, releaseDate: any, show: { __typename?: 'Show', id: string, title: string } } & { ' $fragmentName'?: 'EpisodeFragmentFragment' };

export type MovieFragmentFragment = { __typename: 'Movie', id: string, title: string, releaseDate: any, collection?: { __typename?: 'Collection', id: string } | null } & { ' $fragmentName'?: 'MovieFragmentFragment' };

type DetailsFragment_Episode_Fragment = (
  { __typename: 'Episode', title: string }
  & { ' $fragmentRefs'?: { 'EpisodeFragmentFragment': EpisodeFragmentFragment } }
) & { ' $fragmentName'?: 'DetailsFragment_Episode_Fragment' };

type DetailsFragment_Movie_Fragment = (
  { __typename: 'Movie', title: string }
  & { ' $fragmentRefs'?: { 'MovieFragmentFragment': MovieFragmentFragment } }
) & { ' $fragmentName'?: 'DetailsFragment_Movie_Fragment' };

export type DetailsFragmentFragment = DetailsFragment_Episode_Fragment | DetailsFragment_Movie_Fragment;

export type VideoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VideoQuery = { __typename?: 'Query', video: (
    { __typename: 'Episode' }
    & { ' $fragmentRefs'?: { 'DetailsFragment_Episode_Fragment': DetailsFragment_Episode_Fragment } }
  ) | (
    { __typename: 'Movie' }
    & { ' $fragmentRefs'?: { 'DetailsFragment_Movie_Fragment': DetailsFragment_Movie_Fragment } }
  ) };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: { hash: string }) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const MovieFragmentFragmentDoc = new TypedDocumentString(`
    fragment MovieFragment on Movie {
  id
  title
  collection {
    id
  }
  releaseDate
  __typename
}
    `) as unknown as TypedDocumentString<MovieFragmentFragment, unknown>;
export const EpisodeFragmentFragmentDoc = new TypedDocumentString(`
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
    `) as unknown as TypedDocumentString<EpisodeFragmentFragment, unknown>;
export const DetailsFragmentFragmentDoc = new TypedDocumentString(`
    fragment DetailsFragment on Video {
  title
  __typename
  ...MovieFragment
  ...EpisodeFragment
}
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
fragment MovieFragment on Movie {
  id
  title
  collection {
    id
  }
  releaseDate
  __typename
}`) as unknown as TypedDocumentString<DetailsFragmentFragment, unknown>;
export const VideoDocument = new TypedDocumentString(`
    query Video($id: ID!) {
  video(id: $id) {
    ...DetailsFragment
    __typename
  }
}
    fragment DetailsFragment on Video {
  title
  __typename
  ...MovieFragment
  ...EpisodeFragment
}`) as unknown as TypedDocumentString<VideoQuery, VideoQueryVariables>;