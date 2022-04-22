const showFindDrawing = () => {
    const btn = document.querySelector('.content__find-btn-everywhere'),
        // Меню равной ширины, поэтому достаточно получить ширину одного из них
        asideMenuDrawing = document.querySelector('.content__find-drawing');
    // Получаю ширину одного из них. По умолчанию в css ширина их 0px

    btn.addEventListener("click", (e)=> {
        asideMenuDrawing.classList.toggle('content__find-drawing-active');       
        console.log("afsad");
    });

};

export default showFindDrawing;