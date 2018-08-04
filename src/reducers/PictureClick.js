const initialState = {
        imageIsClick: false,
        id:'',
        imageSrc: '',
        posX: '',
        posY: '',
    }
;

const PictureClick = (state = initialState, action)=>{

    switch (action.type){
        case 'OPEN_IMAGE':
            return {
            ...state,
            imageIsClick: true,
            id: action.id,
            imageSrc: action.src,
            posX:action.posX,
            posY:action.posY,
        };

        case 'CLOSE_IMAGE': return {
            ...state,
            imageIsClick: false,
            id: '',
            imageSrc: ''
        };
        case 'CHANGE_IMAGE': return {
            ...state,
            id: action.id,
            imageSrc: action.src
        };
        default: return state;
    }
};

export default PictureClick;