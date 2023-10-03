<script>
    import '../app.css';
    import Modal from './modal.svelte';
    export let data;

    let showModal = false;
    let isLoginSelected = true;

    //console.log(document.getElementById("login").classList.contains("selected"))

    function toggleLogin(logreg) {
        isLoginSelected = logreg === "login";
    }
</script>


<nav class="w-full bg-gradient-to-bl from-red-600 to-red-700 h-[8vh] flex items-center justify-center text-2xl menu drop-shadow-md">
    <div>
        <a href="/">Home</a>
        </div>
    <div>
        <button on:click={() => (showModal = true)}> User </button>
    </div>
</nav>

<div id="content" class="min-h-[92vh]">
    <slot/>
</div>

<!--
    two forms, one for login, one for register. We show the one corresponding to the selected button
-->

<Modal bind:showModal>
	<h2 slot="header" style="display: flex;">
		<button class:selected={isLoginSelected} on:click={() => toggleLogin("login")} id="login">Login</button>
        <button class:selected={!isLoginSelected} on:click={() => toggleLogin("register")} id="register">Register</button>
	</h2>

    <div>
        {#if isLoginSelected}
            <form action="/login" method="POST">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" required>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required>
                <button type="submit">Login</button>
            </form>
        {:else}
            <form action="/register" method="POST">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" required>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required>
                <label for="password2">Repeat Password</label>
                <input type="password" name="password2" id="password2" required>
                <button type="submit">Register</button>
            </form>
        {/if}
    </div>
    
</Modal>

<style>
    .selected {
        font-weight: bold;
    }
</style>