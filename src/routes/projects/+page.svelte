<script>
    import Carousel from '$lib/components/Carousel.svelte';
    const images = [
        {
            'date' : '2/07/2024',
            'title' : 'YOO meeting',
            'description' : 'This is a description about quizzes at YOO. Quizzes are good to learn from.',
            'photo' : 'cover.webp'
        },
        {
            'date' : '27/08/2023',
            'title' : 'Showcased the artworks of talented youth artists within the Ōrākei community!',
            'description' : 'Art Gallery',
            'photo' : 'Art Gallery Exhibition.webp'
        },
        {
            'date' : '6/08/2023',
            'title' : 'Quiz Night',
            'description' : 'This is a description about quizzes at YOO. Quizzes are good to learn from.',
            'photo' : 'quiz night.webp'
        },
    ];

    import Project from '$lib/components/Project.svelte';
</script>

<style>
    .block {
        height: 100vh;
        background-size: cover;
        padding-left: 10%;
        padding-right: 10%;
    }
    .carousel {
        padding-left: 5%;
        padding-right: 5%;
        background-color: var(--YOO-green-lightest);
        padding-top: 10vh;
        padding-bottom: 2%;
        height: 70vh;
    }
    .past {
        background-image: url('/YOO_index-hero-bg-2.svg');
        padding-top: 50px;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding-bottom: 50px;
    }
    .past > h2 {
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
        margin-top: 50px;
    }
    .past h2:hover {
        transform: rotate(5deg);
    }
    h2 { font-family: Arial, sans-serif; }
</style>

<title>Youth of Ōrākei | Projects</title>

<div class="block carousel">
    <Carousel title="Upcoming Events" images={images}/>
</div>
<div class="block past">
    <h2>Our past projects</h2>
    <div style="--primary:var(--YOO-green-lightest); --secondary:var(--YOO-green-light);">
        <Project
            team="Team 2"
            name="Film Festival"
            date="Saturday, September 21, 12:00 PM"
            description="Showcased 15 films from aspiring Year 11-13 film-makers on the big screen!"
            photo="Film Festival 2024.webp"
            align="right"
        />
    </div>
    <div style="--primary:var(--YOO-red-light); --secondary:var(--YOO-red-primary);">
        <Project
            team="Team 3"
            name="Disability Conference"
            date="Saturday, August 10, 12:00 PM"
            description="Encouraged meaningful discussions on ableism, accessibility, and the representation of disability in media."
            photo="Disability Conference.webp"
            align="left"
        />
    </div>
    <div style="--primary:var(--YOO-blue-light); --secondary:var(--YOO-blue-primary);">
        <Project
            team="Team 4"
            name="Sustainability Saturday: Tree Planting"
            date="Monday, June 3, 12:00 PM"
            description="Attendees planted over 200 trees to support environmental conservation!"
            photo="Sustainability Saturday.webp"
            align="right"
        />
    </div>
    <div style="--primary:var(--YOO-green-lightest); --secondary:var(--YOO-green-light);">
        <Project
            team="Team 2"
            name="QuizEx"
            date="Saturday, May 18, 12:00 PM"
            description="A fun crossover between Quiz Night and MathEx!"
            photo="QuizEx.webp"
            align="left"
        />
    </div>
    <div style="--primary:var(--YOO-red-light); --secondary:var(--YOO-red-primary);">
        <Project
            team="Team 5"
            name="Beach clean up"
            date="Monday, May 13, 12:00 PM"
            description="Come join us to clean the local beach and save our environment!"
            photo="Beach Clean Up.webp"
            align="right"
        />
    </div>
    <div style="--primary:var(--YOO-blue-light); --secondary:var(--YOO-blue-primary);">
        <Project
            team="Team 3"
            name="Orakei Youth Expo"
            date="Wednesday, August 30, 12:00 PM"
            description="Placeholder project description."
            photo="Youth Expo.webp"
            align="left"
        />
    </div>
    <div style="--primary:var(--YOO-green-lightest); --secondary:var(--YOO-green-light);">
        <Project
            team="Team 1"
            name="Student Leadership Conference"
            date="Friday, May 5, 12:00 PM"
            description="Empowered local high school students with valuable leadership skills!"
            photo="Student Leadership Conference.webp"
            align="right"
        />
    </div>
</div>