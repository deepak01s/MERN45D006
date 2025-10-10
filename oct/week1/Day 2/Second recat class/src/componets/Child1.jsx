import React, { useContext } from 'react';
import { dataContext } from './dataContext'; // Adjust the import path as needed
import App from '../App';

function Child1() {
    const count  = useContext(countContext);
    return (
        <div>
            count: {count}
        </div>
    );
}

export default Child1;
<App/>
