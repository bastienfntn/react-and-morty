import React from 'react';
import './App.css';
import CardGrid from "./components/CardGrid.tsx";
import {useQueryClient, useQuery} from "@tanstack/react-query";
import { request } from 'graphql-request'

import { graphql } from './gql/gql';

const TESTDATA = [
    {"id": 1, "title": "foo"},
    {"id": 2, "title": "bar"},
]

const charactersDocument = graphql(`
    query charactersQuery($page: Int) {
        characters(page: $page) {
            results {
                name
            }
        }
    }
`)

function App() {

    const queryClient = useQueryClient();
    const testQuery = useQuery({
        queryKey: ['test'],
        queryFn: () => request('https://rickandmortyapi.com/graphql', charactersDocument, { page: 1 })
    })

    if (testQuery.isLoading) return <div>Loading...</div>

    return (
        <div className="container">
            {testQuery.data.map((item) => (
                <h1 key={item.id}>{item.title}</h1>
            ))}
            {/*<CardGrid></CardGrid>*/}
        </div>
    );
}

function wait(duration: int) {
    return new Promise((resolve: fn) => {
        setTimeout(() : void => {
            resolve();
        }, duration);
    });
}
export default App;