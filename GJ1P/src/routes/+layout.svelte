<script>
    import '../app.css';
    import Modal from './modal.svelte';
    export let data;

    let showModal = false;
    let isLoginSelected = true;

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
	<h2 slot="header" style="display: flex; justify-content: space-around; align-items: center;">
		<button class:selected={isLoginSelected} on:click={() => toggleLogin("login")} id="login">Login</button>
        <hr style="height: 20px; border: 1px solid #ccc; margin: 0;">
        <button class:selected={!isLoginSelected} on:click={() => toggleLogin("register")} id="register">Register</button>
	</h2>

    <div class="modal-content">
        {#if isLoginSelected}
            <form action="/login" method="POST">
                <div>
                <label for="username">Username</label>
                <input type="text" name="username" id="username" required>
                </div>
                <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required>
                </div>
                <button type="submit">Login</button>
            </form>
        {:else}
            <form action="/register" method="POST">
                <div>
                <label for="username">Username</label>
                <input type="text" name="username" id="username" required>
                </div>
                <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required>
                </div>
                <div>
                <label for="password2">Repeat Password</label>
                <input type="password" name="password2" id="password2" required>
                </div>
                <button type="submit">Register</button>
            </form>
        {/if}
    </div>
    
</Modal>

<style>
    .selected {
        font-weight: bold;
    }

    .modal-content > form {
        display: flex;
        flex-direction: column;
    }

    .modal-content > form > div {
        display: flex;
        justify-content: space-between;
    }

    .modal-content > form > div > input {
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-left: 10px;
    }

</style>