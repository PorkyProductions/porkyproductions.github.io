<script>
    import '../app.css'
    export let href;
    export let text;
    export let icon;
    export let iconAlt;
</script>


<div class="flex justify-between content-center p-2">
    <a href={href} class="header-link sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-slate-400 dark:hover:bg-slate-800 hover:font-semibold hover:rounded-xl">
        {text}
        <img src={icon} alt={iconAlt}>
    </a>
    <br>
</div>

<style>
    .header-link {
        padding:20px;
        margin-top: -15px;
        margin-bottom:-15px;
        padding-right: 50px;
        padding-left:50px;
    }
</style>