<script>
    export let data;
    console.log("members",data);

    import '$lib/styles/global.css';
    import Person from '$lib/components/Person.svelte';

    const leadership = data.leadership.map(leader => ({
        name: leader.Name,
        title : leader.Role,
        photo : 'generated/'+leader.Headshot + ".webp" // this is ensured by the download in notionfetch.js
    }));

    const communications = data.leadership.map(comm => ({
        name: comm.Name,
        title : comm.Role,
        photo : 'generated/'+comm.Headshot + ".webp" // this is ensured by the download in notionfetch.js
    }));

    const members = data.members;
    let team_names = [];

    // get teams
    for(let member of data.members){
        if(!team_names.includes(member.Team)){
            team_names.push(member.Team);
        }
    }

    // assign teams
    let teams = {};
    for(let team of team_names){
        teams[team] = [];
    }

    // add members to teams
    for(let member of data.members){
        teams[member.Team].push({
            name : member.Name,
            title : member.Role,
            photo: 'generated/'+member.Headshot + ".webp"
        })
    }
    
    let selected = team_names[0];
    console.log(team_names);
    console.log(selected);
    console.log(teams);
</script>

<style>
    .wrapper {
        height: auto;
        background-image: url('/YOO_index-hero-bg-2.svg');
        background-size: cover;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 50px;
        padding-top: 40px;
    }
    .card {
        background-color: red;
        border-radius: 16px;
        padding-left: 2%;
        padding-right: 2%;
        display: flex;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    .card:first-of-type{
        margin-top: 10vh;
    }
    .col {
        width: 30%!important; /* flexbox is overriding this for the third card - fix? */
        flex-grow: 0;
        flex-shrink: 0;
    }
    b+div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    .people {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 30px;
        gap: 20px;
    }
    h2 {
        font-family: "Archivo Black", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    p, label {
        font-family: "Bricolage Grotesque", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "wdth" 100;
    }
    h2 {
        font-size: 40px;
    }
    p {
        font-size: 20px;
    }
    .col > div {
        background-color: var(--secondary);
        border-radius: 15px;
        padding: 15px;
    }
    .col > div > p {
        margin: 0;
        margin-top: 4px;
    }
    input {display:none;}
    label {
        background-color: var(--YOO-red-dark);
        width: 100%;
        text-align: center;
        color: white;
        padding: 10px;
        border-radius: 10px;
        border-right: 2px solid #979797;
        border-bottom: 2px solid #979797;
        border-left: 2px solid #e3e3e3;
        border-top: 2px solid #e3e3e3;
    }
    label.selected, label:hover {
        background-color: var(--YOO-red-primary);
    }
    @media screen and (max-width: 1000px){
        .card {
            flex-direction: column;
        }
        .col {
            width: inherit !important; /* this is probably a bad idea, work out how to get rid of it */
            margin-bottom: 20px;
        }
        .people+.col{order:-1;}
    }
</style>

<title>Youth of Ōrākei | Members</title>

<div class="wrapper">
    <div class="card" style="background-color:var(--YOO-blue-primary); --secondary:var(--YOO-blue-light)">
        <div class="col">
            <b><h2>Leadership Team</h2></b>
            <div>
                <p>{data.leadershipblurb}</p>
            </div>
        </div>
        <div class="people">
            {#each leadership as person (person.name)}
                <Person {...person}/>
            {/each}
        </div>
    </div>
    <div class="card" style="background-color:var(--YOO-green-light); --secondary:var(--YOO-green-lightest)">
        <div class="people">
            {#each communications as person (person.name)}
                <Person {...person}/>
            {/each}
        </div>
        <div class="col">
            <b><h2>Communications Team</h2></b>
            <div>
                <p>{data.commsblurb}</p>
            </div>
        </div>
    </div>
    <div class="card" style="background-color:var(--YOO-red-primary); --secondary:var(--YOO-red-light)">
        <div class="col">
            <b><h2>{selected}</h2></b>
            <div>
                <p>View the teams!</p>
                {#each team_names as name} <!-- TODO get keys from data-->
                    <label class:selected={name==selected}>
                        <input type="radio" checked={name===selected} on:change={()=>selected=name}/> <!-- magic -->
                        Team {name}
                    </label>
                {/each}
            </div>
        </div>
        <div class="people">
            {#each teams[selected] as person (person.name)}
                <Person {...person}/>
            {/each}
        </div>
    </div>
</div>
