<script>
    import '../app.css';
    export let data;
</script>


<nav class="w-full bg-gradient-to-bl from-red-600 to-red-700 h-[8vh] flex items-center justify-center text-2xl menu drop-shadow-md">
    <a href="/">Home</a>
</nav>

<div id="content" class="min-h-[92vh]">
    <slot/>
</div>