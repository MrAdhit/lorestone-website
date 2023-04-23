<div id="about-us">
    <div class="description">
        <h2>About</h2>
        <h1><strong>Lorestone</strong></h1>
        <p>Lorestone is a Minecraft server community based in Indonesia that was formerly known as HariqMC. It has now collaborated with LightNetwork and transformed from a non-collaborative community to a collaborative server founded by Faiq and Cahaya.</p>
    </div>
    <div class="status">
        <h2>play.lorestone.net</h2>
        <h3>0 Online Players</h3>
    </div>
</div>

<style lang="scss">
    @import "var";

    #about-us {
        // padding-top: 20vh;
        margin-left: 5vw;
        margin-right: 5vw;
        height: 500px;
        width: 90vw;

        display: flex;
        align-items: center;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            align-items: start;
            height: fit-content;
        }

        > .description {
            width: 70%;
            margin-right: 10%;

            > p {
                width: 50%;
            }

            > h1 {
                font-size: 42px;
                font-weight: normal;
                margin: 0;
            }

            > h2 {
                font-size: 32px;
                margin: 0;
                text-transform: uppercase;
                color: $brown-old-paper;
            }

            @media screen and (max-width: 992px) {
                width: 100%;
                margin-right: 0;
                padding-bottom: 40px;

                > p {
                    width: 100%;
                }
            }
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

            @media screen and (max-width: 768px) {
                order: -1;
                align-self: center;
                align-items: center;
                padding-top: 40px;
                padding-bottom: 40px;
                margin-bottom: 40px;
                width: 100vw;
                border-bottom: solid 2px rgba($color: #FFF, $alpha: 0.2);

                border-bottom-style: solid;
                border-width: 5px;
                border-image-source: linear-gradient(124deg, rgba(228,205,152,1) 0%, rgba(233,194,73,1) 100%);
                border-image-slice: 1;
            }
        }
    }
</style>
