<script>
    import '../app.css'
    import { deviceType } from 'uadetect'
</script>
<section class = "bg-slate-300 dark:bg-slate-800">
    {#if deviceType === "mobile"}
        <div class="gridMobile">
            <div class="tileMobile bg-slate-100 dark:bg-slate-600 drop-shadow-lg font-secondary">
                This is a test cuz i cant figure out how github works ahhhhhhh
            </div>
            <div class="tileMobile bg-slate-100 dark:bg-slate-600 drop-shadow-lg font-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea harum aperiam excepturi, tenetur, vero ex, aliquid corporis cumque quas fugiat error ipsam? Labore nobis eius libero necessitatibus quae eveniet!
            </div>
            <div class="tileMobile bg-slate-100 dark:bg-slate-600 drop-shadow-lg font-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reiciendis autem minima quisquam odit dolorum magni. Perspiciatis dolor rerum amet, voluptatibus aspernatur dolore officia veniam, corrupti quasi accusantium saepe possimus.
            </div>
            <div class="tileMobile bg-slate-100 dark:bg-slate-600 drop-shadow-lg font-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus, dignissimos illum veritatis, nisi, temporibus omnis obcaecati nihil nobis eius sint placeat dolorum sed hic soluta voluptatum aliquid facilis ab!
            </div>
        </div>
    {:else}
        <div class="grid">
            <div class="tile bg-slate-100 dark:bg-slate-600 drop-shadow-lg font-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum placeat quibusdam vero iure, maxime dignissimos, similique fugiat aliquam temporibus distinctio quis? Omnis minima at harum quia mollitia sunt velit enim.
            </div>
            <div class="tile bg-slate-100 dark:bg-slate-600 drop-shadow-lg font-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea harum aperiam excepturi, tenetur, vero ex, aliquid corporis cumque quas fugiat error ipsam? Labore nobis eius libero necessitatibus quae eveniet!
            </div>
            <div class="tile bg-slate-100 dark:bg-slate-600 drop-shadow-lg font-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum reiciendis autem minima quisquam odit dolorum magni. Perspiciatis dolor rerum amet, voluptatibus aspernatur dolore officia veniam, corrupti quasi accusantium saepe possimus.
            </div>
            <div class="tile bg-slate-100 dark:bg-slate-600 drop-shadow-lg font-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus, dignissimos illum veritatis, nisi, temporibus omnis obcaecati nihil nobis eius sint placeat dolorum sed hic soluta voluptatum aliquid facilis ab!
            </div>
        </div>
    {/if}
</section>



<style>
.grid {
    display:grid;
    grid-template-columns:1fr 1fr
}
.tile {
    padding: 50px;
    margin: 50px;
    border-radius:30px;
    text-align:left;
}

.gridMobile {
    display:grid;
    grid-template-columns: 1
}

.tileMobile {
    padding: 25px;
    margin: 25px;
    border-radius:30px;
    text-align:left;
}
</style>