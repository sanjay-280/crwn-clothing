import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shopData => shopData.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopData],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopData],
    collections =>
        collections[collectionUrlParam]
);