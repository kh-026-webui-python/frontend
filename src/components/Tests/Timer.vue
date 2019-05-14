<template>
    <div>
        <h2>{{minutes}}:{{seconds}}</h2>
    </div>

</template>

<script>
    export default {
        name: "Timer",
        data: function(){
            return {
                totalTime: (25 * 60),
                timerRunning: true,
                interval: null
            }
        },
        mounted() {
            this.timerRun();
        },
        computed: {
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
                this.interval = setInterval(this.countdownTimer, 1000);
                console.log(this.totalTime);
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