const initialState = [

    {
        id:0,
        title: 'Кумамон',
        preview: 'https://c.wallhere.com/photos/9d/89/1920x1080_px_fire_kumamon_Satan-1327969.jpg!d',

    },
    {
        id:1,
        title: 'Коты',
        preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIsIPFW_bcGGaysXdwDqXuCDerlrAKvoOCbHSgtHWzcZ-AiUG7A',

    },
    {
        id:2,
        title: 'Пикачу',
        preview: 'http://www.geek.com/wp-content/uploads/2016/06/Sad-Pikachu.jpg',

    },


    {
        id:3,
        title: 'Природа',
        preview: 'https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg',

    },
    {
        id:4,
        title: 'Города',
        preview: 'http://fanoboi.com/city/194/194-gorod-tuman-vysotki-ogni-oboi-1366x768.jpg',

    },

];

const packages = (state = initialState, action)=>{
    switch (action.type){
        default: return state;
    }
};

export default packages;