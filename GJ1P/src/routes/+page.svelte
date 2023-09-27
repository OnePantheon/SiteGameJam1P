<script>
    export let data;
</script>

<section class="w-full h-full">
    <div class="pt-16 pb-16 pl-20 bg-slate-700">
        <h1 class="text-8xl text-red-600 drop-shadow-md"><strong>GAMEJAM</strong><br/> EFREI</h1>
        <p class="text-3xl pt-10 w-1/2 text-white drop-shadow-md">Rejoins des évènements pendant lesquels tu pourras exprimer ta créativité et tes capacités au travers de jeu vidéo. Tu pourras rejoindre une équipe de passionés pour tenter de créer le meilleur jeu vidéo possible</p>
    </div>

    <div class="bg-slate-600 pt-16">
        <h2 class="text-center text-6xl text-white drop-shadow-md"><strong>Nos derniers évènements</strong></h2>
        <div class="flex justify-center">
            {#each data.gameJams as gamejam, i}
                <a href="/gamejam/{gamejam.name}" class="w-1/2 bg-slate-700 rounded-xl mt-10 mb-10 mr-10 ml-10 drop-shadow-md">
                    <div class="flex justify-center">
                        <img src="https://picsum.photos/500/300?seed={i}" alt="{i}" class="rounded-xl mt-10 mb-6 mr-10 ml-10 drop-shadow-md">
                    </div>
                    <div class="flex justify-center">
                        <h3 class="text-3xl text-white">{gamejam.name}</h3>
                    </div>
                    <div class="flex justify-center p-2">
                        <p class="text-xl text-white">{gamejam.description}</p>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>