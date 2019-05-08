//Defines new game object instance
var game = new Phaser.Game(600, 800, Phaser.AUTO);

//Adds the games states to the queue
game.state.add('MainMenu', MainMenu);
game.state.add('Play', Play);
game.state.add('GameOver', GameOver);
game.state.start('MainMenu');