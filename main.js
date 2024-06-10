$().ready(() => {
    const draggable = $('.draggable-div');

    $(draggable).on('mousedown', (e) => {
        e.preventDefault()
        let dragElement = $(e.target);
        let dragElementWidth = parseInt(dragElement.css('width'));
        let dragElementHight = parseInt(dragElement.css('height'));
        let parent = $(e.target).parent()[0];

        dragElement.css('cursor', 'grabbing');
        $(parent).css('cursor', 'grabbing')

        let bounds = parent.getBoundingClientRect();

        $(parent).on('mousemove', (e) => {
            e.preventDefault()
            dragElement.text('WEEEEEEE')
            dragElement.css({'top': (e.clientY - dragElementHight / 2) - bounds.top, 'left': (e.clientX - dragElementWidth / 2) - bounds.left})
            if(parseInt(dragElement.css('top')) > bounds.height - dragElementHight){
                dragElement.css('top', bounds.height - dragElementHight)
            }
            if(parseInt(dragElement.css('left')) > bounds.width - dragElementWidth){
                dragElement.css('left', bounds.width - dragElementWidth);
            }
            if(parseInt(dragElement.css('top')) < 0){
                dragElement.css('top', 0)
            }
            if(parseInt(dragElement.css('left')) < 0){
                dragElement.css('left', 0)
            }

        })

        $(parent).on('mouseleave', ()=>{
            dragElement.text('Drag me around');
            $(parent).off('mousemove');
            dragElement.css('cursor', 'grab');
            $(parent).css('cursor', 'auto');
        })

        $(parent).on('mouseup', ()=>{
            dragElement.text('Drag me around');
            $(parent).off('mousemove');
            dragElement.css('cursor', 'grab');
            $(parent).css('cursor', 'auto');
        })
    })
})