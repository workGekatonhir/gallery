const initialState = [

    {
        id:0,
        packageId: 0,
        author: 'Geka',
        text: "Nicely!"
    },
    {
        id:1,
        packageId: 0,
        author: 'Tonhir',
        text: "Во славу Кумамона!"
    },
    {
        id:2,
        packageId: 0,
        author: 'Matheltof',
        text: "All hail Kumamon "
    },
    {
        id:3,
        packageId: 1,
        author: 'Matheltof',
        text: "D"
    },
    {
        id:4,
        packageId:2,
        author: 'Sandshrew',
        text: "Пикачу уже не торт"
    },

];

const comments = (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_COMMENT' : return [
            ...state,{
             id: action.id,
             packageId: action.packageId,
             author: 'Guest',
             text: action.text
            }
        ];
        default: return state;

    }

};

export default comments;