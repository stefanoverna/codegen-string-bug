/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment EpisodeFragment on Episode {\n    id\n    title\n    show {\n      id\n      title\n    }\n    releaseDate\n    __typename\n  }\n": types.EpisodeFragmentFragmentDoc,
    "\n  fragment MovieFragment on Movie {\n    id\n    title\n    collection {\n      id\n    }\n    releaseDate\n    __typename\n  }\n": types.MovieFragmentFragmentDoc,
    "\n  fragment DetailsFragment on Video {\n    title\n    __typename\n    ...MovieFragment\n    ...EpisodeFragment\n  }\n": types.DetailsFragmentFragmentDoc,
    "\n  query Video($id: ID!) {\n    video(id: $id) {\n      ...DetailsFragment\n      __typename\n    }\n  }\n": types.VideoDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment EpisodeFragment on Episode {\n    id\n    title\n    show {\n      id\n      title\n    }\n    releaseDate\n    __typename\n  }\n"): typeof import('./graphql').EpisodeFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MovieFragment on Movie {\n    id\n    title\n    collection {\n      id\n    }\n    releaseDate\n    __typename\n  }\n"): typeof import('./graphql').MovieFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DetailsFragment on Video {\n    title\n    __typename\n    ...MovieFragment\n    ...EpisodeFragment\n  }\n"): typeof import('./graphql').DetailsFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Video($id: ID!) {\n    video(id: $id) {\n      ...DetailsFragment\n      __typename\n    }\n  }\n"): typeof import('./graphql').VideoDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
