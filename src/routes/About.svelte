<div id="about-us">
    <div class="description">
        <h2>About</h2>
        <h1><strong>Lorestone</strong></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere officia natus odio, vero consequuntur at tempore quia, sapiente vitae dolore hic repudiandae mollitia rem eveniet ab maxime porro eius quasi. Laudantium vel, ea ipsam ipsum nesciunt voluptatum consequatur similique, error voluptate ipsa sed, quisquam alias dolorum ad nobis nisi!    </p>
    </div>
    <div class="status">
        <h2>play.lorestone.net</h2>
        <h3>0 Online Players</h3>
    </div>
</div>

<style lang="scss">
    @import "var";

    #about-us {
        padding-top: 20vh;
        margin-left: 5vw;
        margin-right: 5vw;
        height: 50vh;
        width: 90vw;

        display: flex;

        > .description {
            width: 70%;
            margin-right: 10%;
        }

        > .status {
            display: flex;
            flex-direction: column;
            align-items: end;

            > h2 {
                margin: 0;
                color: $compliment;
            }

            > h3 {
                margin: 0;
            }
        }


        > .description > h2 {
            font-size: 32px;
            margin: 0;
            text-transform: uppercase;
            color: $brown-old-paper;
        }
        > .description > h1 {
            font-size: 42px;
            font-weight: normal;
            margin: 0;
        }
    }
</style>
