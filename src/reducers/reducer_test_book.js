export default function (state = null, action) {
    console.log("clicked");
    switch (action.type) {
        case 'BOOK_TESTED':
            return action.payload;
    }
    return state;
}