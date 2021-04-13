export const setSelectedUsers = (id) => {
    return {
        type : "SET_SELECTED_USERS",
        payload : id
    }
}

export const clearSelectedUsers = () => {
    return {
        type: "CLEAR",
        payload : []
    }
}