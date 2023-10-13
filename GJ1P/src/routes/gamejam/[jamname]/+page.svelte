<script>
	import { onMount } from 'svelte';

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

    let currentStatus = getStatus();
    let timeLeft = 0;

    setInterval(() => {
        let newStatus = getStatus();
        if(currentStatus != newStatus){
            currentStatus = newStatus;
        }
    }, 1000);

    const pad = (n) => n < 10 ? `0${n}` : n;

    const formatSeconds = (secs) => {
        const pad = (n) => n < 10 ? `0${n}` : n;

        const d = Math.floor(secs / 3600);
        const h = Math.floor(secs / 3600);
        const m = Math.floor(secs / 60) - (h * 60);
        const s = Math.floor(secs - h * 3600 - m * 60);

        return `${pad(h)}:${pad(m)}:${pad(s)}`;
    }

    const formatMilliseconds = (ms) => {
        const pad = (n) => n < 10 ? `0${n}` : n;

        const d = Math.floor(ms / (3600 * 24 * 1000));
        const h = Math.floor(ms / (3600 * 1000)) - (d * 24);
        const m = Math.floor(ms / (60 * 1000)) - (d * 24 * 60) - (h * 60);
        const ms2 = ms - (d * 24 * 3600 * 1000) - (h * 3600000) - (m * 60000);

        return `${pad(d)} Days, ${pad(h)} Hours, ${pad(m)} Minutes, ${pad(Number((ms2 / 1000)).toFixed(3))} Seconds.`;
    }

    const formatDHMSMs = (ms) => {
        const pad = (n) => n < 10 ? `0${n}` : n;

        const d = Math.floor(ms / (3600 * 24 * 1000));
        const h = Math.floor(ms / (3600 * 1000)) - (d * 24);
        const m = Math.floor(ms / (60 * 1000)) - (d * 24 * 60) - (h * 60);
        const ms2 = ms - (d * 24 * 3600 * 1000) - (h * 3600000) - (m * 60000);

        return {
            days : pad(d),
            hours : pad(h),
            minutes : pad(m),
            seconds : pad(Math.floor(ms2 / 1000)),
            secondsWithMs : pad(Number((ms2 / 1000)).toFixed(2)),
        }
    }

    onMount(() => {
        console.log("onMount");
        let millisecondsCounter = requestAnimationFrame(function loop() {
            if(currentStatus == status.running){
                timeLeft = new Date(Date.parse(data.gamejam.endTime)) - Date.now();
            }

            if(currentStatus == status.pending){
                timeLeft = new Date(Date.parse(data.gamejam.startTime)) - Date.now();
            }

            timeLeft = formatDHMSMs(timeLeft);

            millisecondsCounter = requestAnimationFrame(loop);
        }); 
        
        return () => {
            cancelAnimationFrame(millisecondsCounter);
        }
    });

    
</script>

<section class="w-full bg-white" style="background-image: url(https://picsum.photos/1920/1080);">

    <div class="flex justify-center">
        <img src="https://picsum.photos/600/400" alt="Random image" class="rounded-[6rem] p-[3%]">
        <h1 class="text-8xl text-center w-full align-middle self-center text-red-600 drop-shadow-lg"><strong>{data.gamejam.name}</strong></h1>
    </div>
    <div class="w-full bg-slate-700 mt-[25%]">
        <div class="{currentStatus != status.ended ? "-translate-y-[25%]" : ""}">
            <div class="flex justify-center">
                {#if currentStatus === status.pending}
                <div class="text-3xl text-white bg-red-600 rounded-3xl p-[2%] m-[3%] drop-shadow-md text-center w-3/4">
                    <div class="block">
                        <strong>
                            <h1 class="text-5xl pb-5">Gamejam will start in :</h1>
                            {#if timeLeft.days > 0}
                            <p class="text-8xl inline">{timeLeft.days}</p>
                            <p class="inline">days, </p>
                            {/if}
                            <p class="text-8xl inline">{timeLeft.hours}</p>
                            <p class="inline">hours, </p>
                            <p class="text-8xl inline">{timeLeft.minutes}</p>
                            <p class="inline">minutes, </p>
                            <p class="text-8xl inline">{timeLeft.hours + timeLeft.days > 0 ? timeLeft.seconds : timeLeft.secondsWithMs}</p>
                            <p class="inline">seconds.</p>
                        </strong>
                    </div>

                    <button class="p-[1%] bg-red-500 drop-shadow-md rounded-lg mt-[1%]" >Inscription</button>
                </div>
                {:else if currentStatus === status.running}
                <div class="text-3xl text-white bg-red-600 rounded-3xl p-[2%] m-[3%] drop-shadow-md text-center -translate-y-[60%]">
                    <strong>
                        <h1 class="text-5xl">Gamejam will end in :<br/><br/></h1>
                        {#if timeLeft.days > 0}
                        <p class="text-9xl inline">{timeLeft.days}</p>
                        <p class="inline">days, </p>
                        {/if}
                        <p class="text-9xl inline">{timeLeft.hours}</p>
                        <p class="inline">hours, </p>
                        <p class="text-9xl inline">{timeLeft.minutes}</p>
                        <p class="inline">minutes, </p>
                        <p class="text-9xl inline">{timeLeft.hours + timeLeft.days > 0 ? timeLeft.seconds : timeLeft.secondsWithMs}</p>
                        <p class="inline">seconds.</p>
                    </strong>

                    <button class="p-[1%] bg-red-500 drop-shadow-md rounded-lg mt-[3%]" >Submit</button>
                </div>
                {:else}

                {/if}
            </div>

            <div class="pt-10 pb-10 pl-16 text-white">
                <div class="mb-10">
                    <h1 class="text-6xl ">Description : </h1>
                    <p class="text-3xl drop-shadow-md">{data.gamejam.description}</p>
                </div>
                
                <div class="mb-10">
                    <h1 class="text-6xl">Rules : </h1>
                    <p class="text-3xl drop-shadow-md">{data.gamejam.rules}</p>
                </div>
                

                <h1 class="text-8xl text-red-600 drop-shadow-md"><strong>
                    {data.gamejam.name}
                </strong></h1>

                <p class="text-3xl pt-10 text-white drop-shadow-md">status : {currentStatus}</p>

            </div>
        </div>
    </div>

</section>