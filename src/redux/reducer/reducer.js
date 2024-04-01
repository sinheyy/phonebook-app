let initialState = {
    contactList: [],
    searchName: ""
}

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contactList: [
                    ...state.contactList,
                    {
                        name: payload.name,
                        phoneNumber: payload.phoneNumber,
                        email: payload.email,
                        memo: payload.memo
                    }
                ]
            };
        case "SEARCH_CONTACT":
            return { ...state, searchName: payload.searchName };
        default:
            return { ...state };
    }
}

export default reducer