import { createSelector } from "@reduxjs/toolkit";

export const userState = (state) => state.user;

export const filterUsers = createSelector(userState, (userData) => {
  const { searchValue, user } = userData;
  if (searchValue) {
    const filterData = user.filter(
      (userValue) =>
        userValue.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        userValue.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        userValue.address.city
          .toLowerCase()
          .includes(searchValue.toLowerCase()),
    );
    return filterData;
  }
  return user;
});

export const filterUsersById = createSelector(userState, (userData) => {
  const { id } = userData;
  if (id) {
    const filterData = userData.user.filter((userValue) => userValue.id === id);
    return filterData;
  }
  return [];
});
