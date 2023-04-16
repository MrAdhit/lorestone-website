<script lang="ts">
    import About from "./About.svelte";
</script>

<main>
    <h1><strong>Lorestone</strong></h1>
    <span>Unleash your creativity and join the adventure!</span>
    <p>Join us today and embark on an exciting adventure in the Minecraft RPG world.</p>
    <button>Join Now!</button>
</main>
<About/>

<style lang="scss">
    @import "var";

    main {
        padding-top: 30vh;
        padding-left: 5vw;
        padding-right: 5vw;

        height: 70vh;

        background-image: url(https://images.unsplash.com/photo-1661969090887-9797a6a23191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2978&q=80);
        background-repeat: no-repeat;
        background-size: cover;

        > h1 {
            font-size: 48px;
            font-weight: normal;
            margin-bottom: 0;
            margin-top: 0;
        }

        > span {
            font-size: 28px;
            font-weight: 600;
            color: $compliment;
        }

        > p {
            margin-top: 50px;
            margin-bottom: 50px;
        }

        > button {
            padding: 20px;
            padding-left: 30px;
            padding-right: 30px;
            font-size: 18px;
            font-weight: 900;
            border-radius: 8px;
            border-color: white;
            border-style: solid;
            text-shadow: 0px 0px 5px black;

            background: url("https://anonupload.tech/files/1681607321509_image%20(3).png/view");
            background-position: 100% 100%;
            transition: background-position 500ms ease-in-out;

            &:hover {
                background-position: 0% 0%;
            }
        }
    }
</style>
