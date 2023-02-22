<script>
    import '../app.css'
    import { deviceType } from 'uadetect' 
    import Typewriter from 'svelte-typewriter'
            
    let props = {
            // general-purpose props
            mode: "loopOnce",
            interval: 50,
            delay: 10,
            keepCursorOnFinish: false,
            showCursorOnDelay: false,
            cursor: true,
            disabled: false,
            element: "div",
            // mode-specific props
            unwriteInterval: 50,
            wordInterval: 1500,
            // CSS variables
            "--cursor-width": "1ch",
            "--cursor-color": "white"
        }
    </script>
    
    <main class="p-3">
        <div id="bg" class="p-10 -m-10">
            <p class="text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                Hi, we're 
        <Typewriter --cursor-width={props["--cursor-width"]} --cursor-color={props["--cursor-color"]} {...props}>
            <h3 class="font-primary font-bold text-white sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl">
                PorkyProductions
            </h3>
            <h3 class="font-primary font-bold text-white sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl">
                Making Games
            </h3>
            <h3 class="font-primary font-bold text-white sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl">
                Developing Software
            </h3>
            <h3 class="font-primary font-bold text-white sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl">
                3D Printing
            </h3>
            <h3 class="font-primary font-bold text-white sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl">
                Pushing What's Possible
            </h3>
            {#if deviceType === "mobile"}
                <h3 class="font-primary font-bold text-white text-sm">
                    PorkyProductions
                </h3>
            {:else}
                <h3 class="font-primary font-bold text-white sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl">
                    PorkyProductions
                </h3>
            {/if}
        </Typewriter>
    </p>
        </div>
    </main>
    
    <style>
        #bg {
            background: rgba( 74, 144, 226, 0.2 );
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 15px );
            -webkit-backdrop-filter: blur( 15px );
            border-radius: 10px;
            border: 1px solid rgba( 255, 255, 255, 0.18 );
        }
        #bg::hover {
            background: rgba( 74, 144, 226, 0.2 );
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 45px );
            -webkit-backdrop-filter: blur( 45px );
            border-radius: 10px;
            border: 1px solid rgba( 255, 255, 255, 0.18 );
        }
    </style>