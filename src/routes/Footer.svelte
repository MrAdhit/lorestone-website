<script lang="ts">
    import Icon from  "@iconify/svelte";
</script>

<footer>
    <div class="wrapper">
        <div class="copyright">
            <img src="https://anonupload.tech/files/1681603239958_lorestone.png/view" alt="">
            <span>Copyright © 2023 Lorestone.</span>
            <span>All rights reserved</span>
            <div class="icon">
                <a class="discord" target=”_blank” href="https://discord.gg/lorestone"><Icon icon="fa6-brands:discord"/></a>
            </div>
        </div>
        <div class="links">
            <span>Quick Links</span>
            <div class="link">
                <a href="/store" class="link-item">Store</a>
                <a href="/staff" class="link-item">Staff</a>
            </div>
        </div>
        <div class="support">
            <span>Help & Support</span>
            <div class="link">
                <a href="https://discord.gg/lorestone" target=”_blank” class="link-item">Discord Server</a>
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
    @import "var";

    a {
        text-decoration: none;
    }

    footer {
        height: max-content;
        background-color: $brown-cold;

        padding-top: 8vh;
        padding-bottom: 8vh;

        display: flex;
        justify-content: center;
        align-items: center;

        .wrapper {
            display: flex;
            justify-content: space-around;
            align-items: start;

            width: 70vw;

            @media screen and (max-width: 768px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            > .support, .links {
                display: flex;
                flex-direction: column;

                > .link {
                    display: flex;
                    flex-direction: column;

                    @media screen and (max-width: 768px) {
                        align-items: center;
                        margin-bottom: 30px;
                    }

                    > .link-item {
                        margin-bottom: 5px;
                    }
                }

                > span {
                    margin-bottom: 20px;
                    font-weight: 700;
                }
            }

            > .copyright {
                display: flex;
                flex-direction: column;
                align-items: start;

                > img {
                    width: 200px;
                    margin-bottom: 20px;
                }

                > span {
                    margin-top: 5px;
                    margin-bottom: 5px;
                }

                > .icon {
                    margin-top: 20px;

                    > .discord {
                        aspect-ratio: 1;
                        font-size: 24px;
                    }
                }

                @media screen and (max-width: 768px) {
                    order: 100;
                    align-items: center;
                    margin-top: 50px;
                }
            }
        }

        
    }
</style>