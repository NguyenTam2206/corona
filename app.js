new Vue({
    el : '#app',
    data : {
        playerHP : 45,
        virusHP : 30,
        gameIsStart : false,
        player : 1,
        show : false,
    },
    methods : {
        startNewGame : function() {
            this.gameIsStart = true;
            this.playerHP = 45;
            this.virusHP = 30;
            this.player = 1;
        },
        attack : function() {
            //player
            let playerDamage = 1;
            console.log('player dmg' + playerDamage)
            this.virusHP -= playerDamage;

            //virus
            let virusDamage = Math.max(Math.floor(Math.random() * 4),1);
            console.log('virus dmg' + virusDamage)
            this.playerHP -= virusDamage;
            
            //win/lose
            if(this.virusHP <= 0 && this.playerHP > 0){
                alert(`Player ${this.player} is a hero`)
                this.startNewGame()
            }
            if(this.playerHP <= 0 && this.virusHP > 0){
                alert(`Player ${this.player} and the Human Lose`)
                this.startNewGame()
            }
            if(this.playerHP <= 0 && this.virusHP <= 0){
                alert(`Player ${this.player} and virus were died, and then his opponent happy with his wife `)
                this.startNewGame()
            }

            //turn
            if(this.player === 1){
                this.player = 2
            }else if(this.player ===2){
                this.player = 1;
            }
        },
        specialAttack : function() {
            //player
            let playerDamage = 2;
            console.log('player dmg' + playerDamage)
            this.virusHP -= playerDamage;

            //virus
            let virusDamage = Math.max(Math.floor(Math.random() * 4),1);
            console.log('virus dmg' + virusDamage)
            this.playerHP -= virusDamage;

            //win/lose
            if(this.virusHP <= 0 && this.playerHP > 0){
                alert(`Player ${this.player} is a hero`)
                this.startNewGame()
            }
            if(this.playerHP <= 0 && this.virusHP > 0){
                alert(`Player ${this.player} and the Human Lose`)
                this.startNewGame()
            }
            if(this.playerHP <= 0 && this.virusHP <= 0){
                alert(`Player ${this.player} and virus were died, and then his opponent happy with his wife `)
                this.startNewGame()
            }

            //turn
            if(this.player === 1){
                this.player = 2
            }else if(this.player ===2){
                this.player = 1;
            }

        },
        hevyAttack : function() {
            
            //player
            let playerDamage = 3;
            console.log('player dmg' + playerDamage)
            this.virusHP -= playerDamage;

            //virus
            let virusDamage = Math.max(Math.floor(Math.random() * 4),1);
            console.log('virus dmg' + virusDamage)
            this.playerHP -= virusDamage;

            //win/lose
            if(this.virusHP <= 0 && this.playerHP > 0){
                alert(`Player ${this.player} is a hero`)
                this.startNewGame()
            }
            if(this.playerHP <= 0 && this.virusHP > 0){
                alert(`Player ${this.player} and the Human Lose`)
                this.startNewGame()
            }
            if(this.playerHP <= 0 && this.virusHP <= 0){
                alert(`Player ${this.player} and virus were died, and then his opponent happy with his wife `)
                this.startNewGame()
            }

            //turn
            if(this.player === 1){
                this.player = 2
            }else if(this.player ===2){
                this.player = 1;
            }
        },
        heal : function() {
            //turn
            if(this.player === 1){
                this.player = 2
            }else if(this.player ===2){
                this.player = 1;
            }
            let heal = Math.floor(Math.random() * 5);
            console.log(heal)
            this.virusHP += heal;
        },
    }
})