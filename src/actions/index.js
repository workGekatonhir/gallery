let curCommetntUd =2;

const getId =()=>{
    curCommetntUd++;
    return curCommetntUd;
};


export const openImage =(id,src,element)=>({
    type: 'OPEN_IMAGE',
    id:id,
    src: src,
    posX: element.left+75,
    posY: element.top+25
});

export const closeImage =()=>({
    type: 'CLOSE_IMAGE'
});
export const changeImage =(id,src)=>({
    type: 'CHANGE_IMAGE',
    id:id,
    src: src

});

export const addComment =(text,packageId)=>({
    type: 'ADD_COMMENT',
    packageId: packageId,
    text:text,
    id:getId(),

});

