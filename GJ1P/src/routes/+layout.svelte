<script>
    import '../app.css';
    import { get, writable } from 'svelte/store';
    export let data;

    // obtenir la page de la première gamejam
    const currentGameJam = writable(data.gameJams[0]);
    export function setCurrentGameJam(gamejam) {
        currentGameJam.set(gamejam);
    }
    export function getCurrentGameJam() {
        return get(currentGameJam);
    }
    console.log(getCurrentGameJam());
</script>


<nav class="w-full bg-gradient-to-bl from-red-600 to-red-700 h-[8vh] flex items-center justify-center text-2xl menu drop-shadow-md">
    <a href="/">Home</a>
    <a href="/gamejam/{data.gameJams[0].name}">GameJam</a>
</nav>

<div id="content" class="min-h-[92vh]">
    <slot/>
</div>