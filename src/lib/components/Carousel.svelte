<script>
    export let title;
    export let images;

    let slide = 0;

    const mod = (n,m) => ((n % m) + m) % m; // modulo (javascript has no modulo op, only remainder)
</script>

<style>
    h2,h3 {
        font-family: "Archivo Black", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    p {
        font-family: "Bricolage Grotesque", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "wdth" 100;
    }
    .carousel {
        display: flex;
        overflow: hidden;
        width: 80%;
        height: 100%;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        border-top-right-radius: 15px;
    }
    img {
        height: 60vh;
        width: 100%;
        object-fit: cover;
    }
    .wrapper {
        height: 100%;
        position: relative;
        display: flex;
       justify-content: center;
    }
    .wrapper > button {
        position: absolute;
        top: 0;
        height: 60vh;
        width: 10%;
        border: none;
        background-color: transparent;
    }
    .wrapper > button.left{
        left: 0;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    .wrapper > button.right{
        right: 0;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    .wrapper > button:hover {
        background-color: rgba(0,0,0,0.3);
    }
    h2 {
        position: absolute;
        left: 0;
        top: 0;
        background-color: var(--YOO-green-lightest);
        margin: 0;
        padding-top: 4%;
        padding-bottom: 4%;
        padding-left: 5%;
        margin-left: 10%; /* necessary for the little curved bit to fit in the box */
        padding-right: 5%;
        border-bottom-right-radius: 15px;
        font-size: 26px;
    }
    h2::before {
        position: absolute;
        width: 30px;
        height: 15px;
        content: "";
        top: 0;
        right: -30px;
        background-color: transparent;
        border-top-left-radius: 15px;
        box-shadow: -15px 0 var(--YOO-green-lightest);
        margin-left: 50px;
        overflow: hidden;
    }
    h2::after {
        position: absolute;
        width: 15px;
        height: 30px;
        content: "";
        bottom: -30px;
        left: 0px;
        background-color: transparent;
        border-top-left-radius: 15px;
        box-shadow: 0 -15px var(--YOO-green-lightest);
        overflow: hidden;
    }
    .slide {
        width: 100%;
        height: 80%;
        flex-shrink: 0;
        flex-grow: 0;
        transition: transform 500ms;
    }
    .text {
        display: flex;
        gap: 30px;
        color: black;
        padding-left: 5%;
        padding-right: 5%;
    }
    h3 {
        font-size: 40px;
        margin: 0px;
    }
    p {
        font-size: 23px;
        margin: 5px;
    }
    .left+p{
        flex-shrink: 2;
    }

    .indicator{
        height: 12px;
        width: 12px;
        border-radius: 50%;
        border: 3px solid black;
        background-color: transparent;
        margin: 10px;
    }
    .indicators {
        display: flex;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
    }
    input {display:none;}
    input:checked+.indicator, .indicator:hover{
        background-color: black;
    }
    .wrapper { z-index: 1; }
    h2 { z-index: 999!important; }
</style>

<div class="wrapper">
    <button class="left" on:click={()=>slide=mod(slide-1,images.length)} aria-label="Left">
        <svg viewBox="0 0 24 24" style="width: 50px; height: 50px;">
            <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
        </svg>
    </button>
    <div class="carousel">
        {#each images as image (image.photo)}
            <div class="slide" style={"transform:translate(-"+slide*100+"%);"}>
                <img src={'/'+image.photo} alt={image.title}/>
                <div class="text">
                    <div class="left">
                        <p>{image.date}</p>
                        <h3>{image.title}</h3>
                    </div>
                    <p>{image.description}</p>
                </div>
            </div>
        {/each}
        <h2>{title}</h2>
    </div>
    <button class="right" on:click={()=>slide=mod(slide+1,images.length)} aria-label="Right">
        <svg viewBox="0 0 24 24" style="width: 50px; height: 50px;">
            <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
        </svg>
    </button>
    <div class="indicators">
        {#each images as image, i (image.photo)}
            <label>
                <input type="radio" name="Team" value={i} bind:group={slide}/> <!--I have no clue what the name attribute does-->
                <div class="indicator"></div>
            </label>
        {/each}
    </div>
</div>