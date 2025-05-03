<script>
    export let data;
    console.log("homepage",data);

    import '$lib/styles/global.css';
    import beach from '$lib/assets/Beach Clean-up.webp';
    import council from '$lib/assets/Whole Council.webp';

    import ayv from '$lib/assets/aucklandYouthVoice.png';
    import orakei from '$lib/assets/orakeiLocalBoard.png';

    import shc from '$lib/assets/SHC_Crest-Photoroom.png';
    import baradene from '$lib/assets/Baradene_crest.png';
    import selwyn from '$lib/assets/Selwyn_crest.png';
    import gdc from '$lib/assets/Glendowie_crest.png';
    import stcuths from '$lib/assets/St_Cuthberts_crest.png';

    import Carousel from '$lib/components/Carousel.svelte';
    const images = [
        {
            'date' : '2 October 2025',
            'title' : 'Film Festival 2025',
            'description' : 'Come join us at Berkley Mission Bay',
            'photo' : 'Film Festival 2025.webp'
        },
        {
            'date' : '2nd August, 12:30 - 3:30PM',
            'title' : 'Art Gallery Exhibition',
            'description' : 'Art Gallery!',
            'photo' : 'Art Gallery Exhibition.webp'
        },
        {
            'date' : '18 May 2024',
            'title' : 'QuizEx',
            'description' : 'QuizEx - a fun crossover between Quiz Night and MathEx!',
            'photo' : 'QuizEx.webp'
        },
    ];
</script>

<style>
    h1,h2,h3 {
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
    .block {
        min-height: 100vh;
        background-size: cover;
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    .hero {
        background-image: url('/YOO_index-hero-bg-2.svg');
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .hero > h1 {
        font-size: 23px;
        margin-top: 0px;
        color: var(--YOO-green-medium);
    }
    .hero > h2 {
        font-size: 40px;
        color: var(--YOO-green-primary);
    }
    .hero > p {
        color: var(--YOO-green-primary);
        padding-bottom: 20%;
        width: min(80vh, 80vw);
    }
    .council img {
        width: 100%;
    }
    .about {
        background-image: url('/YOO_index-hero-bg-2.svg');
        display: flex;
        gap: 50px;
        align-items: center;
        color: var(--text-dark);
        padding-top: 30px;
    }
    .left {
        width: 50%;
    }
    @media screen and (max-width: 725px){
        .about {
            flex-direction: column;
        }
        .left {
            width: 100%;
        }
    }
    .about > img {
        border-top-left-radius: 64px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 64px;
        width: 500px;
        height: 500px;
        object-fit: cover;
    }
    .about h2, .goals h2 {
        color: var(--YOO-blue-darkest);
        font-size: 34px;
        margin: 0;
        padding-left: 28px;
        padding-right: 28px;
        padding-top: 6px;
        padding-bottom: 6px;
        background-color: white;
        border-radius: 16px;
        width: fit-content;
        background-color: rgb(241, 255, 246);
        box-shadow: rgba(0, 71, 82, 0.25) 4px 4px 7px -2px, rgba(0, 71, 82, 0.25) 12px 12px 18px -3px;
        transition: transform 300ms;
    }
    .about h2:hover, .goals h2:hover {
        transform: rotate(5deg);
    }
    .about h3 {
        font-size: 23px;
    }
    .about p {
        font-size: 19px;
    }
    .goals {
        background-image: url('/YOO_index-hero-bg-2.svg');
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-bottom: 30px;
    }
    .card {
        border-radius: 16px;
        background-color: white;
        padding-top: 24px;
        padding-bottom: 24px;
        padding-left: 48px;
        padding-right: 48px;
        min-height: 10vh;
        box-shadow: rgba(0, 71, 82, 0.15) 4px 4px 7px -2px, rgba(0, 71, 82, 0.15) 12px 12px 18px -3px;
        transition: all 300ms;
    }
    .card:hover {
        box-shadow: 8px 8px 16px -2px #00475226,22px 22px 28px -3px #00475226;
        transform: translate(-6px,-6px);
    }
    .goals h2 {
        margin-top: 20vh;
        margin-bottom: 50px;
    }
    .goals h3 {
        font-size: 28px;
        margin: 0;
    }
    .goals p {
        font-size: 16px;
    }

    .organisations {
        min-height: 50vh;
        background-color: var(--YOO-yellow-light);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 20px;
    }
    .organisations img {
        height: 15vh;
    }
    .organisations > h2 {
        margin: 0;
        color: var(--YOO-green-primary);
        font-size: 16px;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
    .organisations > div {
        display: flex;
        gap: 50px;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }

    .carousel {
        padding-left: 5%;
        padding-right: 5%;
        background-color: var(--YOO-green-lightest);
        padding-top: 2%;
        padding-bottom: 2%;
        height: 70vh;
    }
    .council {
        padding: 0;
        height: fit-content;
        margin-bottom: -1vh;
    }
    .hero { display: none; } /* hide hero page */
</style>

<title>Youth of Ōrākei | Home</title>

<div class="block hero">
    <h1>Youth of Ōrākei</h1>
    <h2>Inspiring. Representing. Connecting.</h2>
    <p>We are the Youth of Ōrākei, the local youth council for the Ōrākei ward. We are 100% volunteer-led, comprised of 27 young leaders (aged 16-19) determined to make a positive impact in our community.</p>
</div>
<div class="council" style="min-height: 0.1!important;">
    <img src={council} alt="The whole council"/>
</div>
<div class="block about">
    <div class="left">
        <h2>About us</h2>
        <h3>Who we are</h3>
        <p>A group of 27 young leaders, aged 16-19, from within the Ōrākei Local Board area that delivers several projects throughout the year to inspire, represent, and connect youth within our diverse community. We are an independent and non-partisan entity that is funded and proudly supported by the Ōrākei Local Board.</p>
        <h3>What we do</h3>
        <p>We not only organise and deliver various projects, but we also equip and engage youth by representing their voice for the future of Ōrākei and wider Auckland through advising and submitting on council policies.</p>
    </div>
    <img src={beach} alt="Beach clean-up"/>
</div>
<div class="block goals">
    <h2>Our goals</h2>
    <div class="card" style="background-color:var(--YOO-blue-light);color:var(--YOO-blue-darkest)">
        <h3>Inspire</h3>
        <p>We strive to inspire youth to grow, develop, and lead positive change within our community.</p>
    </div>
    <div class="card" style="background-color:var(--YOO-green-lightest);color:var(--YOO-green-dark)">
        <h3>Represent</h3>
        <p>We strive to represent and amplify youth voices within our community.</p>
    </div>
    <div class="card" style="background-color:var(--YOO-red-light);color:var(--YOO-red-dark)">
        <h3>Connect</h3>
        <p>We strive to create and strengthen diverse connections within our community.</p>
    </div>
</div>
<div class="block carousel">
    <Carousel title="Upcoming Events" images={images}/>
</div>
<div class="block organisations">
    <h2>Organisations and schools we work with:</h2>
    <div>
        <a href="https://www.ayv.org.nz/"><img src={ayv} alt="Auckland Youth Voice"/></a>
        <a href="https://www.aucklandcouncil.govt.nz/about-auckland-council/how-auckland-council-works/local-boards/all-local-boards/orakei-local-board/Pages/default.aspx"><img src={orakei} alt="Ōrākei Local Board"/></a>
    </div>
    <div style="height:100%;">
        <a href="https://www.sacredheart.school.nz/"><img src={shc} alt="Sacred heart College"/></a>
        <a href="https://www.baradene.school.nz/"><img src={baradene} alt="Baradene College of the Sacred Heart"/></a>
        <a href="https://selwyn.school.nz/"><img src={selwyn} alt="Selwyn College"/></a>
        <a href="https://www.gdc.school.nz/"><img src={gdc} alt="Glendowie College"/></a>
        <a href="https://stcuthberts.school.nz/"><img src={stcuths} alt="St Cuthbert's"/></a>
    </div>
</div>