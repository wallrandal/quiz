<template>
  <div id="exercise">
    <div class="header">
      <div class="fighter">You</div>
      <div class="fighter">Monster</div>
    </div>
    <div class="body">
      <div class="life-bars">
        <div class="life-bar">
          <div class="health" :style="{ width: playerHealth + '%'  }">
            {{ playerHealth }}
          </div>  
        </div>
        <div class="life-bar">
          <div class="health" :style="{ width: monsterHealth + '%'  }">
            {{ monsterHealth }}
          </div>
        </div>
      </div>
      <div class="start-game" v-if="!gameIsRunning">
        <div @click="startGame">start new game</div>
      </div>
      <div class="controls" v-else>
        <div class="attact" @click="attack">
          Attack
        </div>
        <div class="special-attact" @click="specialAttack">
          Special attack
        </div>
        <div class="heal" @click="heal">
          Heal
        </div>
        <div class="give-up" @click="giveUp">
          Give up
        </div>
      </div>
      <div class="history" v-if="turns.length > 0">
        <div class="event" v-for="(turn, index) in turns" :key="index">
          <span :class="{'player-turn': turn.isPlayer,'monster-turn': !turn.isPlayer }">{{turn.text}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quiz',
  data: function() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
      turns: [],
    }
  },
  methods: {
    startGame () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack () {
      const damage = this.calculateDamage(3, 10)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits monster for ${damage}` 
      });

      if(this.checkWin()) {
        return;
      }

      this.monsterAttacks(5, 12)
      this.checkWin()
    },
    specialAttack () {
      const damage = this.calculateDamage(10, 20)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits monster for ${damage}` 
      });
      if(this.checkWin()) {
        return;
      }

      this.monsterAttacks(5, 12)
      this.checkWin()
    },
    heal () {
      if(this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100
      }
      this.turns.unshift({
        isPlayer: true,
        text: `Player heals for 10` 
      });
      this.monsterAttacks(5, 12) 
    },
    giveUp () {
      this.gameIsRunning = false
      this.playerHealth = this.monsterHealth = 100
    },
    monsterAttacks(min, max) {
      const damage = this.calculateDamage(min, max)
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits monster for ${damage}` 
      });
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) +  1, min)
    },
    checkWin() {
      if(this.monsterHealth <= 0) {
        if(confirm('You won! Do you want to start again?')) {
          this.startGame();
        } else{
          this.gameIsRunning = false
        }
      } else if(this.playerHealth <= 0) {
        if(confirm('You lost! Do you want to start again?')) {
          this.startGame();
        } else{
          this.gameIsRunning = false
        }
      }
    },
  },
}
</script>
<style lang="sass" scoped>
  
</style>


