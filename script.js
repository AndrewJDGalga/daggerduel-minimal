const tokenCount = 20;

$("document").ready(()=>{
    //generate tokens
    $(()=>{
        for(let i = 0; i < tokenCount; i++) {
            $('#game--board_black-tokens').append('<img class="game-token" src="assets/blackBladeToken.svg" alt="Black Blade Face token."></li>');
            $('#game--board_black-tokens').append('<img class="game-token" src="assets/blackBootToken.svg" alt="Black Boot Face token."></li>');
            $('#game--board_black-tokens').append('<img class="game-token" src="assets/blackBlankToken.svg" alt="Black Blade Face token."></li>');

            $('#game--board_white-tokens').append('<img class="game-token" src="assets/whiteBladeToken.svg" alt="White Blade Face token."></li>');
            $('#game--board_white-tokens').append('<img class="game-token" src="assets/whiteBootToken.svg" alt="White Boot Face token."></li>');
            $('#game--board_white-tokens').append('<img class="game-token" src="assets/whiteBlankToken.svg" alt="White Blade Face token."></li>');
        }
    })
    //make all tokens draggable
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
