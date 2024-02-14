const tokenCount = 20;

const generateTokens = (pageTarget, elementToGenerate, count) =>{
    for(let i = 0; i < count; i++) {
        $(pageTarget).append(elementToGenerate);
    }
}

$("document").ready(()=>{
    //generate tokens
    $(()=>{
        generateTokens('#game--board_black-tokens_blades', '<img class="game-token" src="assets/blackBladeToken.svg" alt="Black Blade Face token."></li>', tokenCount);
        generateTokens('#game--board_black-tokens_boots', '<img class="game-token" src="assets/blackBootToken.svg" alt="Black Boot Face token."></li>', tokenCount);
        generateTokens('#game--board_black-tokens_blank', '<img class="game-token" src="assets/blackBlankToken.svg" alt="Black Blade Face token."></li>', tokenCount);

        generateTokens('#game--board_white-tokens_blades', '<img class="game-token" src="assets/whiteBladeToken.svg" alt="White Blade Face token."></li>', tokenCount);
        generateTokens('#game--board_white-tokens_boots', '<img class="game-token" src="assets/whiteBootToken.svg" alt="White Boot Face token."></li>', tokenCount);
        generateTokens('#game--board_white-tokens_blank', '<img class="game-token" src="assets/whiteBlankToken.svg" alt="White Blade Face token."></li>', tokenCount);
        //set tokens as draggable by class
        $('.game-token').draggable();
    })
    $('#player1-footing').on('click', ()=>{
        
        if($('#player1-footing').data('facing') === 'blade'){
            console.log('blade set');
            $('#player1-footing').data('facing', 'boot');
        } else {
            console.log('boot set');
            $('#player1-footing').data('facing', 'blade');
        }
    });
    $('#player2-footing').on('click', ()=>{
        
        if($('#player2-footing').data('facing') === 'blade'){
            console.log('blade set');
            $('#player2-footing').data('facing', 'boot');
        } else {
            console.log('boot set');
            $('#player2-footing').data('facing', 'blade');
        }
    });
});
