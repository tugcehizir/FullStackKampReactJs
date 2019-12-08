const initialState = {
    todos: [
        {
            name: "test",
            completed: false
        }
    ],
};

export default (state = initialState, action) => {
    console.log('action: ', action);
    console.log('state: ', state);
    switch (action.type) {
        case 'todo/add_todo': 
            const { todos } = state;
               todos.push ({name: action.data, completed: false});
            return {
                // ... ile getirilip, ayrıştırıp yeni parametre alınır!
                ...state, //state.map() *alternatif kullanım*
                // todos: [action.data] bu kullanım ile sıfırdan oluşturup ona ekleme yapar her seferinde!
                todos // todos: todos işleminin kısa yazımı!
            };


        default:
            return state;
        // break;
    }
}