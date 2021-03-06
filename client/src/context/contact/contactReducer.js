import {
    ADD_CONTACT,
    CLEAR_CURRENT,
    CLEAR_FILTER,
    DELETE_CONTACT,
    FILTER_CONTACTS,
    SET_CURRENT,
    UPDATE_CONTACT
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };

        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== action.payload
                ),
            };

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
            };

        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)
            }

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
            };

        case FILTER_CONTACTS:
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, "gi") //gi means Global case insensitive
                    return contact.name.match(regex) || contact.email.match(regex)
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null,
            };


        default:
            return state;
    }
};
