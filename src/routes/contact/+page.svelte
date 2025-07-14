<style>
    .block {
        background-size: cover;
        padding-left: 15%;
        padding-right: 15%;
        background-image: url('/YOO_index-hero-bg-2.svg');
        padding-top: 100px;
        padding-bottom: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h2 {
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
    h2:hover {
        transform: rotate(5deg);
    }
    * {
        font-family: "Bricolage Grotesque", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "wdth" 100;
    }
    h2 {
        font-family: "Archivo Black", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    form {
        display: grid;
        width: 100%;
        background-color: rgba(241, 255, 246, 0.6);
        padding: 36px;
        border-radius: 16px;
        margin-top: 40px;
        margin-bottom: 40px;
    }
    input+label{
        margin-top: 30px;
    }
    label {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    input {
        height: 45px;
    }
    textarea {
        height: 150px;
        resize: vertical;
        margin-bottom: 40px;
    }
    input, textarea {
        border: 1px solid rgb(200,200,200);
        border-radius: 8px;
    }
    button {
        text-align: center;
        margin-top: 40px;
        height: 55px;
        background-color: #06687b;
        color: white;
        border-radius: 8px;
        font-size: 1rem;
    }
    .left {
        width: 40%;
    }
    img {
        width: 50%; 
        height: 50%; 
        object-fit: contain; 
    }
    @media screen and (max-width: 1200px){
        .block{
            padding-left: 10%;
            padding-right: 10%;
        }
    }
    @media screen and (max-width: 1000px){
        img {
            display: none;
        }
        .left {
            width: 100%;
        }
        form{
            width: auto;
        }
        .block {
            justify-content: center;
        }
    }
</style>

<title>Youth of Ōrākei | Contact</title>

<div class="block">
    <div class="left">
        <h2>Contact us</h2>
        <form method="POST">
            <label for="full-name">Your name</label>
            <input id="full-name" type="text" name="Name" required="">

            <label for="school">School or organisation <em>(optional)</em></label>
            <input id="school" type="text" name="School">

            <label for="email">Email</label>
            <input id="email" type="email" name="Email">

            <label for="message">Message</label>
            <textarea id="message" name="Message" required=""></textarea>

            <div class="h-captcha" data-sitekey="24ac9e2e-d24c-4482-8714-3518a5ac3106"></div>
            <script src="https://js.hcaptcha.com/1/api.js" async defer></script>

            <button type="submit">Submit</button>
        </form>
    </div>
    <img src="/generated/Contact Us Stock Photo.webp" alt="Beach clean-up"/>
</div>