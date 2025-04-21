<script>
    import '$lib/styles/global.css';
    import Person from '$lib/components/Person.svelte';

    const leadership = [
        {
            name : "Enya Grayson",
            title : "Co-Chairperson",
            photo : 'Enya-Grayson.webp'
        },
        {
            name : "Aaron Leong",
            title : "Co-Chairperson",
            photo : 'Aaron-Leong.webp'
        },
        {
            name : "Jamie Cartwright",
            title : "Secretary",
            photo : 'Jamie-Cartwright.webp'
        },
        {
            name : "Stella Casey",
            title : "Communications Lead",
            photo : 'Stella-Casey.webp'
        },
        {
            name : "Paidashe Patronella",
            title : "Council Engagement Lead",
            photo : 'Paidashe-Patronella.webp'
        },
        {
            name : "Toby Low",
            title : "Treasurer",
            photo : 'Toby-Low.webp'
        },
    ];

    const communications = [
        {
            name : "Chloe Buckley",
            title : "Communications Team Member",
            photo : "Chloe-Buckley.webp"
        },
        {
            name : "Dhivya Ramesh",
            title : "Communications Team Member",
            photo : "Dhivya-Ramesh.webp"
        },
        {
            name : "Anna Burgess",
            title : "Communications Team Member",
            photo : "Anna-Burgess.webp"
        },
        {
            name : "Ilyssa Hunt",
            title : "Communications Team Member",
            photo : "Ilyssa-Hunt.webp"
        },
    ];

    const teams = {
        "Two Leaf Clovers" : [
            {
                name : "Kate Hardie Neil",
                title : "Team Lead",
                photo : "Kate-Hardie-Neil.webp"
            },
            {
                name : "Cassandra Lu",
                title : "Project Delivery Team Member",
                photo : "Cassandra-Lu.webp"
            },
            {
                name : "Eassin Wang",
                title : "Project Delivery Team Member",
                photo : "Eassin-Wang.webp"
            },
            {
                name : "Reuben Burdekin",
                title : "Project Delivery Team Member",
                photo : "Reuben-Burdekin.webp"
            },
            {
                name : "Olivia Wei",
                title : "Project Delivery Team Member",
                photo : "Olivia-Wei.webp"
            },
        ],
        "Anemoi" : [
            {
                name : "Lola Beange",
                title : "Team Lead",
                photo : "Lola-Beange.webp"
            },
            {
                name : "Diep Ngoc Nguyen",
                title : "Project Delivery Team Member",
                photo : "Diep-Ngoc-Nguyen.webp"
            },
            {
                name : "Annissa Chu",
                title : "Project Delivery Team Member",
                photo : "Annissa-Chu.webp"
            },
            {
                name : "Will Dickson",
                title : "Project Delivery Team Member",
                photo : "Will-Dickson.webp"
            },
        ],
        "Trouvaille" : [
            {
                name : "Aahaan Melant",
                title : "Team Lead",
                photo : "Aahaan-Melant.webp"
            },
            {
                name : "Amie Hilliam",
                title : "Project Delivery Team Member",
                photo : "Amie-Hilliam.webp"
            },
            {
                name : "Tha Zin Christopher",
                title : "Project Delivery Team Member",
                photo : "Tha-Zin-Christopher.webp"
            },
            {
                name : "Jessica Lee",
                title : "Project Delivery Team Member",
                photo : "Jessica-Lee.webp"
            },
        ],
        "Avispas" : [
            {
                name : "Katherine Qin",
                title : "Team Lead",
                photo : "Katherine-Qin.webp"
            },
            {
                name : "Alice Pitchers",
                title : "Project Delivery Team Member",
                photo : "Alice-Pitchers.webp"
            },
            {
                name : "Emilia Reghenzani",
                title : "Project Delivery Team Member",
                photo : "Emilia-Reghenzani.webp"
            },
            {
                name : "James Harbour",
                title : "Project Delivery Team Member",
                photo : "James-Harbour.webp"
            },
        ]
    }
    
    let selected = "Two Leaf Clovers";
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
    h2, p, label {
        font-family: Arial, sans-serif;
        color: var(--text-dark);
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
</style>

<title>Youth of Ōrākei | Members</title>

<div class="wrapper">
    <div class="card" style="background-color:var(--YOO-blue-primary); --secondary:var(--YOO-blue-light)">
        <div class="col">
            <b><h2>Leadership Team</h2></b>
            <div>
                <p>The Leadership Team is comprised of the Co-Chairs, Secretary, Treasurer, Council Engagement Lead, and Communications Lead. This team is responsible for overseeing the council holistically, facilitating the upskilling of members, maintaining a positive council culture, and ensuring that the council remains aligned with its strategic goals.</p>
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
                <p>The Communications Team is responsible for promoting projects and events through engaging content across various platforms, including Instagram, TikTok, posters, pamphlets, and other general YOO promotions. The Communications Team does this by maintaining a youthful and vibrant yet professional brand image, upholding the council’s values and strategic goals.</p>
            </div>
        </div>
    </div>
    <div class="card" style="background-color:var(--YOO-red-primary); --secondary:var(--YOO-red-light)">
        <div class="col">
            <b><h2>{selected}</h2></b>
            <div>
                <p>View the teams!</p>
                {#each ["Two Leaf Clovers", "Anemoi", "Trouvaille", "Avispas"] as name} <!-- TODO get keys from data-->
                    {#if name==selected} <!-- this is hacky as hell, but it works-->
                        <label class="selected">
                            <input type="radio" name="Team" value={name} bind:group={selected}/> <!--I have no clue what the name attribute does-->
                            Team {name}
                        </label>
                    {:else}
                        <label>
                            <input type="radio" name="Team" value={name} bind:group={selected}/> <!--I have no clue what the name attribute does-->
                            Team {name}
                        </label>
                    {/if}
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
