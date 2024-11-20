import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

// interface MenuItem {
//     id: string;
//     name: string;
//     price: number;
//     description: string;
//     ingredients: string[];
//     Image: string;
//     isFavorite: boolean;
// }

interface MenuState {
    items: any[];
}
const initialState: MenuState = {
    items: [],
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addMenuItems: (state, action) => {
            const updatedItems = action.payload.map((item: any, index: any) => ({ ...item, isFavorite: false, id: index+"_"+uuidv4() }));
  state.items = updatedItems;
        },
        updateFavorites: (state, action) => {
            state.items = state.items.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, isFavorite: action.payload.isFavorite };
                }
                return item;
            });
        },
    },
});

export const { addMenuItems, updateFavorites } = menuSlice.actions;
export default menuSlice.reducer;