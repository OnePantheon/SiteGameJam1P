<script>
    import '../app.css';
    import Modal from './modal.svelte';
    import { applyAction, enhance } from '$app/forms';
    import {page} from '$app/stores';

    let form = undefined; // layout hack to get the form from the modal
    function onSubmit() {
        return async ({ result }) => {
            await applyAction(result); // might not do anything here

            if (result.type == 'success' || result.type == 'failure')
                form = result.data;
        }
    }

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

<Modal bind:showModal >
	<h2 slot="headerModal" class="headerModal">
		<button class:selected={isLoginSelected} on:click={() => toggleLogin("login")} id="login">Login</button>
        <hr style="height: 20px; border: 1px solid #ccc; margin: 0;">
        <button class:selected={!isLoginSelected} on:click={() => toggleLogin("register")} id="register">Register</button>
	</h2>

    <div slot="bodyModal" class="modal-content">
        {#if isLoginSelected}
            <form use:enhance={onSubmit} method="post" action="/users?/login">
                <div>
                <label for="username">Username</label>
                <input type="text" name="username" id="username" required>
                </div>
                <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required>
                </div>
                <button type="submit" >Login</button>
            </form>
        {:else}
            <form use:enhance method="post" action="/users?/register">
                <div>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" required>
                </div>

                <div  >
                    <label for="email" >E-mail</label>
                    <input id="email" name="email" type="text" required   class="text-black" />
                </div>
        
                <div>                
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required>
                </div>
                <div>
                    <label for="password2">Confirm Password</label>
                    <input type="password" name="password2" id="password2" required>
                </div>
                <button type="submit">Register</button>
            </form>
        {/if}
        <form use:enhance={onSubmit} method="post" action="/users?/isLogin">
            <button type="submit">IsLogin</button>
            {#if form?.error}
                <small>{form?.message}</small>
            {/if}
            {#if form?.username}
                <small>login as {form?.username}</small>
            {/if}
        </form>
    </div>
    
</Modal>

<style>
  
    .selected {
        font-weight: bold;
    }

    .headerModal{
        display: flex; 
        justify-content: space-around;
        align-items: center;
        padding: 0.5em;
        padding-bottom: 0em;
    }

    .modal-content > form {
        display: flex;
        flex-direction: column;
    }

    .modal-content > form > div {
        display: flex;
        justify-content: space-between;
        text-align: center;
       
        padding: 0.5em;
    }

    .modal-content > form > div > input {
        border: 1.5px solid #ccc;
        border-radius: 5px;
        margin-left: 10px;
    }
   
</style>


                 
