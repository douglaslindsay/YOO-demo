<script>
    import logo from '$lib/assets/YOO_Logo_Transparent_Background.png';
    let menu = false;
</script>

<style>
    .navbar {
        border-bottom: 3px solid rgba(139, 193, 139, 0.5);
        display: flex;
        padding-left: 10%;
        padding-right: 10%;
        padding-bottom: 10px;
        padding-top: 10px;
        justify-content: space-between;
        height: 50px;
        align-items: center;
        backdrop-filter: blur(10px);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }
    
    nav {
        display: flex;
        flex-grow: 2;
        justify-content: flex-end;
    }

    .logo a { font-size: 23px; }
    nav a {
        font-size: 18px;
        margin-left: 10px;
        margin-right: 10px;
        justify-content: space-between;
    }
    
    a {
        text-decoration: none;
        color: var(--YOO-green-primary);
        font-family: Arial, sans-serif;
        font-weight: bold;
        transition: color 500ms;
    }
    
    .navbar nav a::after {
        width: 0%;
        height: 2px;
        background-color: var(--YOO-green-primary);
        bottom: 0px;
        left: 0px;
        display: block;
        position: relative;
        content: "";
        transition: width 500ms, background-color 500ms, opacity 500ms;
        opacity: 0;
    }
    
    .navbar nav a:hover::after {
        width: 100%;
        background-color: var(--text-active);
        opacity: 1;
    }
    .logo {
        display: flex;
        align-items: center;
    }
    .logo > img {
        height: 50px;
    }
    a:hover {
        color: var(--text-active);
    }
    button {
        background-color: transparent;
        border: none;
        height: 100%;
        aspect-ratio: 1 / 1;
        display: none;
        margin-left: 20px;
        margin-right: 20px;
    }
    .wrapper {
        position: fixed;
        top: 90px;
        width: 100%;
        z-index: 999;
    }
    .wrapper > nav {
        flex-direction: column;
        border: 3px solid rgba(139, 193, 139, 0.5);
        border-radius: 15px;
        margin-left: 5%;
        margin-right: 5%;
        backdrop-filter: blur(10px);
        align-items: center;
    }
    .wrapper > nav > a {
        padding: 10px;
        width: 100%;
        text-align: center;
    }
    .wrapper > nav { display: none; }
    @media screen and (max-width: 800px){
        .navbar {
            padding-left: 0;
            padding-right: 0;
        }
    }
    @media screen and (max-width: 650px){
        .navbar > nav {display: none;}
        button { display: block;}
        .wrapper > nav { display: flex; }
    }
</style>

<div class="wrapper">
    <div class="navbar">
        <div class="logo">
            <img src={logo} alt="Logo"/>
            <a href="/">Youth of Ōrākei</a>
        </div>

        <nav>
            <a href="/projects">Projects</a>
            <a href="/members">Members</a>
            <a href="/contact">Contact Us</a>
            <a href="/history">History</a>
        </nav>

            <!-- todo: include lucide svg license-->
        <button aria-label="menu" on:click={()=>(menu=!menu)}>
            {#if menu}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu">
                    <line x1="4" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
            {/if}
        </button>
    </div>
    {#if menu}
        <nav>
            <a href="/projects">Projects</a>
            <a href="/members">Members</a>
            <a href="/contact">Contact Us</a>
            <a href="/history">History</a>
        </nav>
    {/if}
</div>