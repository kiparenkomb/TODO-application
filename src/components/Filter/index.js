import React from 'react';
import FilterLink from '../../containers/FilterLink';
import { VisibilityFilters } from '../../actions';

import './style.css';

const Filter = () => (
    <div className="Filter">
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>Show All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
);

export default Filter;
