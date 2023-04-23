<script lang="ts">
    import Icon from  "@iconify/svelte";
</script>

<footer>
    <div class="wrapper">
        <div class="copyright">
            <img src="https://anonupload.tech/files/1681603239958_lorestone.png/view" alt="">
            <span>Lorestone. © 2023</span>
            <div class="icon">
                <a class="discord" target=”_blank” href="https://discord.gg/lorestone"><Icon icon="fa6-brands:discord"/></a>
            </div>
        </div>
        <div class="links">
            <a href="/store" class="link">Store</a>
            <a href="/staff" class="link">Staff</a>
            <a href="/rules" class="link">Rules</a>
            <a href="https://discord.gg/lorestone" target=”_blank” class="link">Discord Server</a>
        </div>
    </div>
</footer>

<style lang="scss">
    @import "var";

    a {
        text-decoration: none;
    }

    footer {
        height: min-content;
        background-color: $brown-cold;

        padding-top: 40px;
        padding-bottom: 40px;

        font-size: 13px;
        color: rgba(#FFF, $alpha: 0.5);

        display: flex;
        justify-content: center;
        align-items: center;

        .wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;

            height: fit-content;
            width: 65%;

            @media screen and (max-width: 768px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            > .links {
                display: flex;
                flex-direction: column;
                height: 120px;
                flex-wrap: wrap;
                flex: 1;

                font-size: 14px;

                @media screen and (max-width: 768px) {
                    margin-top: 20px;
                    align-items: center;
                }

                > .link {
                    padding: 5px;
                    width: fit-content;

                    &:hover {
                        color: rgba(#FFF, $alpha: 1);
                    }
                }
            }

            > .copyright {
                display: flex;
                flex-direction: column;
                align-items: start;
                padding-right: 50px;

                > img {
                    width: 150px;
                }

                > span {
                    margin-top: 10px;
                }

                > .icon {
                    margin-top: 5px;
                    > .discord {
                        aspect-ratio: 1;
                        font-size: 16px;

                        &:hover {
                            color: #7289DA;
                        }
                    }
                }

                @media screen and (max-width: 768px) {
                    align-items: center;
                    padding-right: 0;
                }
            }
        }        
    }
</style>