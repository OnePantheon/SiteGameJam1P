<script>
	import { get } from 'svelte/store';

	export let data;

    const status = {
        pending : "pending",
        running : "running",
        ended : "ended",
    }

    function getStatus(){
        if(new Date(Date.parse(data.gamejam.startTime)) > Date.now()){ // gamejam isn't started yet
            return status.pending;
        }

        if(new Date(Date.parse(data.gamejam.endTime)) < Date.now()){ // gamejam already finsished
            return status.ended;
        }

        return status.running;
    }
</script>

<section class="w-full h-full">

    <div class="pt-16 pb-16 pl-20 bg-slate-700">

        <h1 class="text-8xl text-red-600 drop-shadow-md"><strong>
            {data.gamejam.name}
        </strong></h1>

        <p class="text-3xl pt-10 text-white drop-shadow-md">status : {getStatus()}</p>

    </div>

</section>