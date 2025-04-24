<script>
    import logo from '$lib/assets/YOO_Logo_Transparent_Background.png';
    import instagram from '$lib/assets/ig.png';
    import facebook from '$lib/assets/fb.png';
    import linkedin from '$lib/assets/in.png';
    import youtube from '$lib/assets/yt.png';
</script>

<style>
    .footer > nav > a {
        color: black;
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;
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
    p {
        margin-top: 4px;
        margin-bottom: 0px;
        color: #4e4e4e;
        font-family: Arial, sans-serif;
    }
    .footer img {
        height: 90px;
    }
    a {
        text-decoration: none;
        color: var(--YOO-green-primary);
        font-family: Arial, sans-serif;
        font-weight: bold;
        transition: color 500ms;
    }
    .logo {
        display: flex;
        align-items: center;
    }
    img {
        height: 90px;
    }
    .logo a { font-size: 23px; }
    
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
</style>

<div class="footer">
    <div class="logo">
        <img src={logo} alt="Logo"/>
        <div class="email">
            <a href="/">Youth of Ōrākei</a>
            <p>youthoforakei@gmail.com</p>
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
            <a href="https://www.facebook.com/youthoforakei/"><img src={facebook} alt="Facebook"/></a>
            <a href="https://www.linkedin.com/company/youth-of-%C5%8Dr%C4%81kei/?originalSubdomain=nz"><img src={linkedin} alt="Linkedin"/></a>
            <a href="https://www.youtube.com/channel/UCaAQFFboitXtz8H7_2WLAag"><img src={youtube} alt="Youtube"/></a>
            <a href="https://www.instagram.com/youthoforakei/"><img src={instagram} alt="Instagram"/></a>
        </div>
    </div>
 </div>