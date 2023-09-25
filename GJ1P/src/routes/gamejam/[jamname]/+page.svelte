<script>
    import { getCurrentGameJam } from '../../+layout.svelte';

    let currentGameJam = getCurrentGameJam();
    console.log(currentGameJam);

</script>

<section class="w-full h-full">

    <div class="pt-16 pb-16 pl-20 bg-slate-700">

        <h1 class="text-8xl text-red-600 drop-shadow-md"><strong>
            {currentGameJam.name}
        </strong></h1>

        <p class="text-3xl pt-10 w-1/2 text-white drop-shadow-md">BLABLA</p>

    </div>

</section>