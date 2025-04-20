<script>
    export let name;
    export let title;
    export let photo;
</script>

<style>
    .person {
        display: flex;
        flex-direction: column;
    }
    .role {
        background-color: green;
        border-radius: 10px;
        text-align: center;
        margin-top: 10px;
        background-color: var(--secondary);
    }
    img {
        border-radius: 50%;
        width: 280px;
        height: 280px;
        object-fit: cover;
    }
    h3, p {
        font-family: Arial, sans-serif;
        margin: 2px;
        color: var(--text-dark);
    }
</style>

<div class="person">
    <img src={'/people/'+photo} alt={name}/> <!--injection?-->
    <div class="role">
        <h3>{name}</h3>
        <p>{title}</p>
    </div>
</div>