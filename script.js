$("document").ready(()=>{
    $(()=>{
        //$('#draggable').draggable();
        $('.game-token').draggable();
    });
    $('#player1-footing').on('click', ()=>{
        
        if($('#player1-footing').data('facing') === 'blade'){
            console.log('blade set');
            $('#player1-footing').data('facing', 'boot');
        } else {
            console.log('boot set');
            $('#player1-footing').data('facing', 'blade');
        }
        
        //console.log($('#player1-footing').data('facing'));
    });
});
