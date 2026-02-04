import type * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAllPokemonQueryVariables = Types.Exact<{
  offset?: Types.InputMaybe<Types.Scalars['Int']>;
  take?: Types.InputMaybe<Types.Scalars['Int']>;
  reverse?: Types.InputMaybe<Types.Scalars['Boolean']>;
  offsetFlavorTexts?: Types.InputMaybe<Types.Scalars['Int']>;
  takeFlavorTexts?: Types.InputMaybe<Types.Scalars['Int']>;
  reverseFlavorTexts?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type GetAllPokemonQuery = { __typename?: 'Query', getAllPokemon: Array<{ __typename?: 'Pokemon', key: Types.PokemonEnum }> };


export const GetAllPokemonDocument = gql`
    query GetAllPokemon($offset: Int, $take: Int, $reverse: Boolean, $offsetFlavorTexts: Int, $takeFlavorTexts: Int, $reverseFlavorTexts: Boolean) {
  getAllPokemon(
    offset: $offset
    take: $take
    reverse: $reverse
    offsetFlavorTexts: $offsetFlavorTexts
    takeFlavorTexts: $takeFlavorTexts
    reverseFlavorTexts: $reverseFlavorTexts
  ) {
    key
  }
}
    `;

/**
 * __useGetAllPokemonQuery__
 *
 * To run a query within a React component, call `useGetAllPokemonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPokemonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPokemonQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      take: // value for 'take'
 *      reverse: // value for 'reverse'
 *      offsetFlavorTexts: // value for 'offsetFlavorTexts'
 *      takeFlavorTexts: // value for 'takeFlavorTexts'
 *      reverseFlavorTexts: // value for 'reverseFlavorTexts'
 *   },
 * });
 */
export function useGetAllPokemonQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPokemonQuery, GetAllPokemonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPokemonQuery, GetAllPokemonQueryVariables>(GetAllPokemonDocument, options);
      }
export function useGetAllPokemonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPokemonQuery, GetAllPokemonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPokemonQuery, GetAllPokemonQueryVariables>(GetAllPokemonDocument, options);
        }
export type GetAllPokemonQueryHookResult = ReturnType<typeof useGetAllPokemonQuery>;
export type GetAllPokemonLazyQueryHookResult = ReturnType<typeof useGetAllPokemonLazyQuery>;
export type GetAllPokemonQueryResult = Apollo.QueryResult<GetAllPokemonQuery, GetAllPokemonQueryVariables>;