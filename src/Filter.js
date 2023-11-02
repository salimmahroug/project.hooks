import React from 'react';
import './Filter.css'
function Filter({ filterTitle, filterRating, handleFilterTitle, handleFilterRating }) {
    return (
        <div className="filter">
            <div className='inp'>
                <input className='input'    //cree un input avec la valeur initial filterTitle et avec onchange handleFilterTitle
                    type="text"   
                    placeholder="Recherche"
                    value={filterTitle}
                    onChange={handleFilterTitle}
                />
            </div>
            <div> 
                <select className='rat' value={filterRating} onChange={handleFilterRating}> 
                    <option value="">All Ratings</option> 
                    <option value="1">Rating 1</option>
                    <option value="2">Rating 2</option>
                    <option value="3">Rating 3</option>
                    <option value="4">Rating 4</option>
                    <option value="5">Rating 5</option> 
                </select>    
            </div>
        </div>
    ); // cree un chat pour ajouter le rating pour filtrer avec la value filterRating
}
export default Filter;
