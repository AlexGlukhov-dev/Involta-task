import {createSlice} from '@reduxjs/toolkit';

const appData = createSlice({
    name: 'data',
    initialState: {
        feedsData: [],
        sortedData: [],
    },
    reducers: {
        createFeedsData(state, action) {
            state.feedsData = action.payload;
            state.sortedData = state.feedsData;
        },
        sortFeedsData(state, action) {
            switch (action.payload) {
                case 'all':
                    state.sortedData = [...state.feedsData]
                    break;
                case 'lenta.ru':
                    state.sortedData = [...state.feedsData].filter(el => el.link.toLowerCase().includes('lenta.ru'))
                    break;
                case 'mos.ru':
                    state.sortedData = [...state.feedsData].filter(el => el.link.toLowerCase().includes('mos.ru'))
                    break;
                default:
                    state.sortedData = [...state.feedsData]
            }
        },
        searchFeedsData(state, action) {
            state.sortedData = [...state.feedsData].filter(el => el.title.toLowerCase().includes(action.payload.toLowerCase()) || el.description.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
} )

export const {createFeedsData, sortFeedsData, searchFeedsData} = appData.actions

export default appData.reducer