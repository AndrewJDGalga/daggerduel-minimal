const tokenCount = 20;

const blackBladePath = 'assets/blackBladeToken.svg';
const blackBootPath = 'assets/blackBootToken.svg';
const whiteBladePath = 'assets/whiteBladeToken.svg';
const whiteBootPath = 'assets/whiteBootToken.svg';

const generateTokens = (pageTarget, elementToGenerate, count) =>{
    for(let i = 0; i < count; i++) {
        $(pageTarget).append(elementToGenerate);
    }
}

$("document").ready(()=>{
    //generate tokens
    $(()=>{
        generateTokens('#game--board_black-tokens_blades', `<img class="game-token" src=${blackBladePath} alt="Black Blade Face token."></li>`, tokenCount);
        generateTokens('#game--board_black-tokens_boots', `<img class="game-token" src=${blackBootPath} alt="Black Boot Face token."></li>`, tokenCount);
        generateTokens('#game--board_black-tokens_blank', '<img class="game-token" src="assets/blackBlankToken.svg" alt="Black Blade Face token."></li>', tokenCount);

        generateTokens('#game--board_white-tokens_blades', `<img class="game-token" src=${whiteBladePath} alt="White Blade Face token."></li>`, tokenCount);
        generateTokens('#game--board_white-tokens_boots', `<img class="game-token" src=${whiteBootPath} alt="White Boot Face token."></li>`, tokenCount);
        generateTokens('#game--board_white-tokens_blank', '<img class="game-token" src="assets/whiteBlankToken.svg" alt="White Blade Face token."></li>', tokenCount);
        //set tokens as draggable by class
        $('.game-token').draggable();
    });

    $('#player1-footing').on('click', ()=>{
        
        if($('#player1-footing').data('facing') === 'blade'){
            $('#player1-footing').data('facing', 'boot');
            $('#footing-img-black').attr('src',blackBootPath);
        } else {
            $('#player1-footing').data('facing', 'blade');
            $('#footing-img-black').attr('src',blackBladePath);
        }
    });
    $('#player2-footing').on('click', ()=>{
        if($('#player2-footing').data('facing') === 'blade'){
            $('#player2-footing').data('facing', 'boot');
            $('#footing-img-white').attr('src',whiteBootPath);
        } else {
            $('#player2-footing').data('facing', 'blade');
            $('#footing-img-white').attr('src',whiteBladePath);
        }
    });
});
