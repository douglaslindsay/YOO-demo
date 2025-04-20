<script>
    import logo from '$lib/assets/YOO_Logo_Transparent_Background.png';
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
        gap: 50px;
    }

    .logo a { font-size: 23px; }
    nav a { font-size: 18px; }
    
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
</style>

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

</div>