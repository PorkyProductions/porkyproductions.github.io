<script>
    import GamesPageMain from '../../components/gamesPageMain.svelte';
    import Header from '../../components/header.svelte';
    import '../../app.css'
</script>

<Header />
<GamesPageMain />



<style>
.grid {
    display:grid;
    grid-template-columns:1fr 1fr
}
.tile {
    padding:50px;
    margin:50px;
    border:5px solid hsl(240, 100%, 48%);
    border-radius:30px;
    text-align:left;
}
</style>