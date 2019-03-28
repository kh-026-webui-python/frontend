<template>
    <div id="registration">
  <form @submit.prevent='registration' action="" method="POST" class="form">
    <fieldset>
        <h1>Sing up</h1>
        <label class="" for="username">Username:</label>
        <input type="text" name="username" value="">
        <label class="" for="fname">First name:</label>
        <input type="text" name="fname" value="">
        <label class="" for="lname">Last name:</label>
        <input type="text" name="lname" value="">
        <label class="" for="email">Email address:</label>
        <input type="text" name="email" value="">
        <label class="" for="password">Password:</label>
        <input type="text" name="password" value="">
        <label class="" for="confirm">Password confirm:</label>
        <input type="text" name="confirm" value="">

    </fieldset>
    <button type="submit">Sing up</button>
</form>
</div>
</template>

<script>

export default {
  name: 'Registration',
}
</script>
<style>
* {
    box-sizing: border-box;
}
h1{
    text-align:center;
}

form {
    max-width: 400px;
    margin: 10px auto;
    padding: 10px 25px;
    background: #f1f4f5;
    border-radius: 8px;
}


input[type="text"],
input[type="email"],
input[type="password"] {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    font-size: 16px;
    height: auto;
    margin: 0;
    outline: 0;
    padding: 15px;
    width: 100%;
    background-color: #e8eeef;
    color: #8a97a0;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    margin-bottom: 10px;
}

input:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
}

fieldset {
    border: none;
    text-align:left;
}

button {
    padding: 19px 39px 18px 39px;
    color: #FFF;
    background-color: #416eb7;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #6091ce;
    border-width: 1px 1px 3px;
    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;
    margin-bottom: 10px;
}
</style>

