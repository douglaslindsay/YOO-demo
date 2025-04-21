<script>
    export let team;
    export let name;
    export let date;
    export let description;
    export let photo;
    export let align="right";

    let order = -1*(align=="right");
</script>

<style>
    .wrapper {
        position: relative;
        display: flex;
        background-color: var(--secondary);
        padding-left: 5%;
        padding-right: 5%;
        gap: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-radius: 15px;
    }
    img {
        border-radius: 15px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .text, h4 {
        color: var(--text-dark);
    }
    .picture > h4.left {
        background-color: var(--secondary);
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
        padding: 20px;
    }
    .picture > h4.right {
        background-color: var(--secondary);
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0;
        padding: 20px;
    }
    * {
        font-family: Arial, sans-serif;
    }
    .picture {
        position: relative;
        height: 60vh;
        width: 100%;
    }
    .text{
        width: 25%;
        background-color: var(--primary);
        border-radius: 15px;
        padding: 20px;
        flex-grow: 0;
        flex-shrink: 0;
    }
    .text h3 {
        font-size: 30px;
        margin: 4px;
    }
    .picture h4 {
        font-size : 30px;
        padding: 30px;
    }
    .picture h4.left {border-top-right-radius: 15px;}
    .picture h4.right {border-top-left-radius: 15px;}
    .picture h4.left::before{
        width: 30px;
        height: 15px;
        content: "";
        background-color: transparent;
        box-shadow: -15px 0 var(--secondary);
        position: absolute;
        top: -15px;
        left: 0px;
        border-bottom-left-radius: 15px;
    }
    .picture h4.left::after{
        width: 30px;
        height: 15px;
        content: "";
        background-color: transparent;
        box-shadow: -15px 0 var(--secondary);
        position: absolute;
        bottom: 0px;
        right: -30px;
        border-bottom-left-radius: 15px;
    }
    .picture h4.right::before{
        width: 30px;
        height: 15px;
        content: "";
        background-color: transparent;
        box-shadow: 15px 0 var(--secondary);
        position: absolute;
        top: -15px;
        right: 0px;
        border-bottom-right-radius: 15px;
    }
    .picture h4.right::after{
        width: 30px;
        height: 15px;
        content: "";
        background-color: transparent;
        box-shadow: 15px 0 var(--secondary);
        position: absolute;
        bottom: 0px;
        left: -30px;
        border-bottom-right-radius: 15px;
    }
    .text h4 {
        margin-top: 4px;
    }
</style>

<div class="wrapper">
    <div class="picture">
        <img src={'/'+photo} alt={name}/>
        {#if align=="left"}
            <h4 class="left">{team}</h4>
        {:else if align=="right"}
            <h4 class="right">{team}</h4>
        {/if}
    </div>
    <div class="text" style={"order:"+order+";"}>
        <h3>{name}</h3>
        <h4>{date}</h4>
        <p>{description}</p>
    </div>
</div>