<script lang="ts">
    import '../app.css'
    export let href: string;
    export let text: string;
    export let icon: any;
    export let iconAlt: string;
</script>


<div class="flex justify-between content-center p-4">
    <span>
        <a href={href} class="p-4 header-link sm:text-sm md:text-md lg:text-lg xl:text-xl font-primary font-medium hover:bg-slate-400 dark:hover:bg-slate-800 hover:font-semibold rounded-xl">
            <span>{text}</span>
            <span><img src={icon} alt={iconAlt}></span>
        </a>
    </span>
</div>

<style>
    img {
        display: inline;
    }
    
</style>