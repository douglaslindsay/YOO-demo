<script>
    import data from '$lib/data/homepage-data.json';

    import '$lib/styles/global.css';

    import Carousel from '$lib/components/Carousel.svelte';

    const images = data.upcoming.map(project => ({
        'date' : project.Date,
        'title' : project.Name,
        'description' : project.Description,
        'photo' : 'generated/'+project.Image+'.webp'
    }));
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
        background-image: url('/generated/background.svg');
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
        background-image: url('/generated/background.svg');
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
        background-image: url('/generated/background.svg');
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
        min-height: 50vh;
    }
    .council {
        padding: 0;
        height: fit-content;
        margin-bottom: -1vh;
    }
    .hero { display: none; } /* hide hero page */
</style>

<title>Youth of Ōrākei | Home</title>

<div class="block hero"> <!-- this bit doesn't  actually render -->
    <h1>Youth of Ōrākei</h1>
    <h2>Inspiring. Representing. Connecting.</h2>
    <p>We are the Youth of Ōrākei, the local youth council for the Ōrākei ward. We are 100% volunteer-led, comprised of 27 young leaders (aged 16-19) determined to make a positive impact in our community.</p>
</div>
<div class="council" style="min-height: 0.1!important;">
    <img src="/generated/Whole Council.webp" alt="The whole council"/>
</div>
<div class="block about">
    <div class="left">
        <h2>About us</h2>
        <h3>Who we are</h3>
        <p>{data.whoweare}</p>
        <h3>What we do</h3>
        <p>{data.whatwedo}</p>
    </div>
    <img src="/generated/About Us.webp" alt="Beach clean-up"/>
</div>
<div class="block goals">
    <h2>Our goals</h2>
    {#each data.goals as goal,i}
        <div class="card" style={[
            "background-color:var(--YOO-blue-light);color:var(--YOO-blue-darkest)",
            "background-color:var(--YOO-green-lightest);color:var(--YOO-green-dark)",
            "background-color:var(--YOO-red-light);color:var(--YOO-red-dark)"
        ][i%3]}>
            <h3>{goal.Name}</h3>
            <p>{goal.Description}</p>
        </div>
    {/each}
</div>
<div class="block carousel">
    <Carousel title="Upcoming Events" images={images}/>
</div>
<div class="block organisations">
    <h2>Organisations and schools we work with:</h2>
    <div>
        {#each data.organisations as organisation}
            <a href={organisation.URL}><img src={'/generated/'+organisation.Logo+'.png'} alt={organisation.Name}/></a> <!-- FIXME: convert to PNG -->
        {/each}
    </div>
    <div style="height:100%;">
        {#each data.schools as school}
            <a href={school.URL}><img src={'/generated/'+school.Logo+'.png'} alt={school.Name}/></a> <!-- FIXME: convert to PNG -->
        {/each}
    </div>
</div>