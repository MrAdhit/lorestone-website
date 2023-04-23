<div id="nav">
    <a href="/" class="logo"><img src="https://anonupload.tech/files/1681603239958_lorestone.png/view" style="text-align: center" alt=""></a>
    <div class="nav-items">
        <a href="/" class="nav-item">Home</a>
        <a href="/staff" class="nav-item">Staff</a>
        <a href="/store" class="nav-item">Store</a>
    </div>
</div>

<style lang="scss">
    @import "var";

    #nav {
        display: flex;
        align-items: center;

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;

        padding: 20px;
        padding-left: 8vh;
        padding-right: 0;

        background-color: rgba($brown-rustic, $alpha: 0.5);

        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-left: 0;
        }

        > .logo {
            font-size: 42px;
            font-weight: 900;

            width: fit-content;
        }

        > .nav-items {
            margin-left: 7.5vw;

            display: flex;
            gap: 20px;

            > a {
                padding: 10px;
            }

            @media screen and (max-width: 768px) {
                margin-left: 0;

                > a {
                    margin-top: 10px;
                }
            }
        }   
    }
</style>
