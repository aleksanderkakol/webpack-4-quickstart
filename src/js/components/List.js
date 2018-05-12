import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {articles: state.articles};
};
//articles is array from REDUX
//line from Redux:
// const initialState = {
//     articles: []
// };
// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_ARTICLE:
//             return { ...state, articles: [...state.articles, action.payload] };
//         default:
//             return state;
//     }
// };



const ConnectedList = ({articles}) => (
    <ul className='list-group-flush'>
        {articles.map(e => (
            <li className='list-group-item' key={e.id}>
                {e.title}
            </li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;