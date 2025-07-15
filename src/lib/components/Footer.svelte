<script>
    import misc from '$lib/data/miscellaneous.json';
</script>

<style>
    .footer > nav > a {
        color: black;
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
        font-family: "Bricolage Grotesque", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "wdth" 100;
    }
    .footer {
        display: flex;
        justify-content: space-between;
        padding-left: 10%;
        padding-right: 10%;
        align-items: center;
        border-top: 3px solid rgba(139, 193, 139, 0.5);
        height: 120px;
    }
    @media screen and (max-width: 900px){
        .footer {
            flex-direction: column;
            gap: 20px;
        }
    }
    .footer img {
        height: 90px;
    }
    a {
        text-decoration: none;
        color: var(--YOO-green-primary);
        font-weight: bold;
        transition: color 500ms;
        font-family: "Archivo Black", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    .logo {
        display: flex;
        align-items: center;
    }
    img {
        height: 90px;
    }
    .logo > .email > a { font-size: 23px; }
    
    nav {
        display: flex;
        justify-content: space-between;
    }
    @media screen and (max-width:460px){
        nav {
            display: none;
        }
    }
    .socials > p {
        color: var(--YOO-green-primary);
        font-weight: bold;
        font-size: 1.2rem;
    }
    .icons img {
        height: 20px;
    }
    .icons {
        display: flex;
        gap: 20px;
    }
    .socials {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        text-align: center;
    }
    a:hover {
        color: var(--text-active)!important;
    }
    p {
        margin-top: 4px;
        margin-bottom: 0px;
        font-family: Arial, sans-serif;
    }
    p > a {
        color: #4e4e4e;
        font-family: "Bricolage Grotesque", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "wdth" 100;
    }
</style>

<div class="footer">
    <div class="logo">
        <img src='/logo.webp' alt="Logo"/>
        <div class="email">
            <a href="/">Youth of Ōrākei</a>
            <p><a href={"mailto:"+misc.email}>{misc.email}</a></p>
        </div>
    </div>

    <nav>
        <a href="/projects">Projects</a>
        <a href="/members">Members</a>
        <a href="/contact">Contact Us</a>
        <a href="/history">History</a>
    </nav>

    <div class="socials">
        <p>Connect with us</p>
        <div class="icons">
            {#each misc.socialmedia as social}
                <a href={social.URL}><img src={'/'+social.Icon+'.webp'} alt={social.Platform}/></a>
            {/each}
        </div>
    </div>
 </div>