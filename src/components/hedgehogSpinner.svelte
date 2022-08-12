<script>
    import '../app.css'
    import hedgehog from '../../images/HedgehogIcon.png'
</script>

<div class="flex justify-center bg-white text-black dark:bg-black dark:text-white">
        <img src={hedgehog} alt="hedgehog" class="hedgehog-spin spin">
        <img src={hedgehog} alt="hedgehog" class="hedgehog-spin spin2">
        <img src={hedgehog} alt="hedgehog" class="hedgehog-spin spin3">
        <img src={hedgehog} alt="hedgehog" class="hedgehog-spin spin4">
        <img src={hedgehog} alt="hedgehog" class="hedgehog-spin spin5">
</div>

<style>
    .hedgehog-spin {
        position: absolute;
    }
    .spin {
        animation: spin 1s infinite;
        margin: auto;
        padding-bottom: 400px;
    }
    @keyframes spin {
        0% {
            transform:rotate(0)
        }
        to {
            transform:rotate(360deg)
        }
    }
    .spin2 {
        animation: spin2 1.2s infinite;
        margin: auto;
        padding-bottom: 400px;
    }
    @keyframes spin2 {
        0% {
            transform:rotate(0)
        }
        to {
            transform:rotate(360deg)
        }
    }
    .spin3 {
        animation: spin3 1.4s infinite;
        margin: auto;
        padding-bottom: 400px;
    }
    @keyframes spin3 {
        0% {
            transform:rotate(0)
        }
        to {
            transform:rotate(360deg)
        }
    }
    .spin4 {
        animation: spin4 1.6s infinite;
        margin: auto;
        padding-bottom: 400px;
    }
    @keyframes spin4 {
        0% {
            transform:rotate(0)
        }
        to {
            transform:rotate(360deg)
        }
    }
    .spin5 {
        animation: spin5 1.8s infinite;
        margin: auto;
        padding-bottom: 400px;
    }
    @keyframes spin5 {
        0% {
            transform:rotate(0)
        }
        to {
            transform:rotate(360deg)
        }
    }
</style>

