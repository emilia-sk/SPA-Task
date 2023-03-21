import React from 'react';
import Card from './Card';
import data from '../api.json';

/* 
User inputs in the search field and code below filters 
the data from the api.json file for a matching name
and displays the cards with matching names.

If no input is detected all the cards are on display.
If the input is invalid/no matches are found then nothing displays.
Input must be a string (letters only, e.g. "Lowe"), and must be a person's first or last name(no spaces or both names, numbers, etc.)
*/

const Search = ({ searchValue }) => {
    const filteredData = data.filter(person =>
        person.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        person.lastName.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        //Code below displays the cards in a grid
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-4 gy-4 mt-1 mb-5">
            {filteredData.map(person => <Card key={person.firstName} {...person} />)}
        </div>
    );
};

export default Search;