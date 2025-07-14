<script>
    export let data;
    console.log("projects",data);

    const projects = data.projects_data.map(project => ({
        'date' : project.Date,
        'title' : project.Name,
        'description' : project.Description,
        'team' : project.Team,
        'photo' : "generated/"+project.Image+".webp"
    }));

    import Project from '$lib/components/Project.svelte';
</script>

<style>
    .block {
        height: 100vh;
        background-size: cover;
        padding-left: 10%;
        padding-right: 10%;
    }
    .upcoming {
        background-image: url('/generated/background.svg');
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
    h2 {
        font-family: "Archivo Black", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
</style>

<title>Youth of Ōrākei | Projects</title>

<div class="block upcoming">
    <h2>Upcoming events</h2>
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
            />
        </div>
    {/each}
</div>