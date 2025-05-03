<script>
    export let data;
    console.log("history", data);
    import Project from '$lib/components/Project.svelte';

    const projects = [
        {
            'date' : 'Saturday, September 21, 12:00 PM',
            'title' : 'Film Festival',
            'description' : 'Showcased 15 films from aspiring Year 11-13 film-makers on the big screen!',
            'photo': 'Film Festival 2024.webp',
            'team' : 'Team 2'
        },
        {
            'date' : 'Saturday, August 10, 12:00 PM',
            'title' : 'Disability Conference',
            'description' : 'Encouraged meaningful discussions on ableism, accessibility, and the representation of disability in media.',
            'photo' : 'Disability Conference.webp',
            'team' : 'Team 3'
        },
        {
            'date' : 'Monday, June 3, 12:00 PM',
            'title' : 'Sustainability Saturday: Tree Planting',
            'description' : 'Attendees planted over 200 trees to support environmental conservation!',
            'photo' : 'Sustainability Saturday.webp',
            'team' : 'Team 4'
        },
        {
            'date' : 'Saturday, May 18, 12:00 PM',
            'title' : 'QuizEx',
            'description' : 'A fun crossover between Quiz Night and MathEx!',
            'photo' : 'QuizEx.webp',
            'team' : 'Team 2'
        },
        {
            'date' : 'Monday, May 13, 12:00 PM',
            'title' : 'Beach clean up',
            'description' : 'Come join us to clean the local beach and save our environment!',
            'photo' : 'Beach Clean Up.webp',
            'team' : 'Team 5'
        },
        {
            'date' : 'Wednesday, August 30, 12:00 PM',
            'title' : 'Orakei Youth Expo',
            'description' : 'Placeholder project description.',
            'photo' : 'Youth Expo.webp',
            'team' : 'Team 3'
        },
        {
            'date' : 'Friday, May 5, 12:00 PM',
            'title' : 'Student Leadership Conference',
            'description' : 'Empowered local high school students with valuable leadership skills!',
            'photo' : 'Student Leadership Conference.webp',
            'team' : 'Team 1'
        }
    ];
</script>

<style>
    .block {
        height: 100vh;
        background-size: cover;
        padding-left: 10%;
        padding-right: 10%;
    }
    .upcoming {
        background-image: url('/YOO_index-hero-bg-2.svg');
        padding-top: 50px;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding-bottom: 50px;
    }
    .upcoming > h2 {
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
    .upcoming h2:hover {
        transform: rotate(5deg);
    }
    h2 { font-family: Arial, sans-serif; }
</style>

<title>Youth of Ōrākei | History</title>

<div class="block upcoming">
    <h2>Our past projects</h2>
    {#each projects as project,i}
        <div style={[
            "--primary:var(--YOO-green-lightest); --secondary:var(--YOO-green-light);",
            "--primary:var(--YOO-red-light); --secondary:var(--YOO-red-primary);",
            "--primary:var(--YOO-blue-light); --secondary:var(--YOO-blue-primary);"
        ][i%3]}>
            <Project
            name={project.title}
            date={project.date}
            description={project.description}
            photo={project.photo}
            align={["right","left"][i%2]}
            team = {project.team}
            />
        </div>
    {/each}
</div>