<template>
    <div><p>{{minutes}}:{{seconds}}</p></div>

</template>

<script>
    export default {
        name: "Timer",
        data: function(){
            return {
                message: 'Let the countdown begin!!',
                totalTime: (25 * 60),
                timerRunning: false,
                timerPaused: false,
                interval: null
            }
        },
        computed: {
            time: function () {
                return this.minutes + " : " + this.seconds;
            },
            minutes: function () {
                var min = Math.floor(this.totalTime / 60);
                return min >= 10 ? min : '0' + min;
            },
            seconds: function () {
                var sec = this.totalTime - (this.minutes * 60);
                return sec >= 10 ? sec : '0' + sec;
            }
        },
        methods: {
            timerRun() {
                this.timerRunning = true;
                this.message = 'Greatness is within sight!!!';
                this.interval = setInterval(this.countdownTimer, 1000);
                console.log(this.totalTime);
            },
            timerPause() {
                this.message = 'Never quit, keep going!!';
                this.timerRunning = false;
                clearInterval(this.interval);
            },
            countdownTimer() {
                if (this.timerRunning == true) {
                    this.totalTime--;
                }
            }
        }
    }

</script>

<style scoped>

</style>