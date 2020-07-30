import {
    FETCHDATA,
    FETCHCOUNTRY,
    FETCHDAILYDATA
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case FETCHDATA:
            return {
                ...state,
                data: action.payload,
            };
        case FETCHCOUNTRY:
            return {
                ...state,
                countries: action.payload,
            };
        case FETCHDAILYDATA:
            return {
                ...state,
                dailydata: action.payload,
            };

        default:
            return state;
    }
};
