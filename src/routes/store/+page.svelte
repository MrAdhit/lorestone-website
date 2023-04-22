<script lang="ts">
    import Icon from '@iconify/svelte';

    import Popup from '../../lib/Popup.svelte';
    import { username } from './store';

    const items = [
        {
            id: "lgdx1",
            logo: "https://via.placeholder.com/100x100",
            name: "1,000 Gold",
            description: "Get 1,000 Gold to purchase premium stuff ingame.",
            price: "Rp.10,000"
        },
        {
            id: "lgdx3",
            logo: "https://via.placeholder.com/100x100",
            name: "2,000 Gold",
            description: "Get 1,000 Gold to purchase premium stuff ingame.",
            price: "Rp.20,000"
        },
        {
            id: "lgdx4",
            logo: "https://via.placeholder.com/100x100",
            name: "5,000 Gold",
            description: "Get 1,000 Gold to purchase premium stuff ingame.",
            price: "Rp.50,000"
        },
        {
            id: "lgdx5",
            logo: "https://via.placeholder.com/100x100",
            name: "10,000 Gold",
            description: "Get 1,000 Gold to purchase premium stuff ingame.",
            price: "Rp.100,000"
        },
        {
            id: "lgdx6",
            logo: "https://via.placeholder.com/100x100",
            name: "20,000 Gold",
            description: "Get 1,000 Gold to purchase premium stuff ingame.",
            price: "Rp.200,000"
        },
        {
            id: "lgdx7",
            logo: "https://via.placeholder.com/100x100",
            name: "50,000 Gold",
            description: "Get 1,000 Gold to purchase premium stuff ingame.",
            price: "Rp.500,000"
        },
        {
            id: "lgdx8",
            logo: "https://via.placeholder.com/100x100",
            name: "100,000 Gold",
            description: "Get 1,000 Gold to purchase premium stuff ingame.",
            price: "Rp.1,000,000",
            important: {
                message: "Bonus 10,000 Gold!"
            }
        },
        {
            id: "lgdx9",
            logo: "https://via.placeholder.com/100x100",
            name: "200,000 Gold",
            description: "Get 1,000 Gold to purchase premium stuff ingame.",
            price: "Rp.2,000,000"
        }
        
    ]

    $: loggedIn = ($username != null ? $username.length > 0 : false);
    $: len = ($username != null ? $username.length * 7 : 0);

    $: loginPopup = false;
    $: previewPopup = false;
    $: previewIndex = 0;

    function login() {
        console.log("login");
        let element = document.getElementById("username") as HTMLInputElement;

        $username = element.value;
        loginPopup = false;
    }

    function preview(which: number) {
        previewIndex = which;
        previewPopup = true;
    }

    function addToCart() {
        if (!loggedIn) { previewPopup = false; loginPopup = true; return; };

        location.href = "/store/cart";
    }
</script>

<Popup bind:show={loginPopup}>
    <div class="pop">
        <h5>Login with your username</h5>
        <input type="text" name="username" id="username" placeholder="Username">
        <button on:mousedown={login}>Login</button>
    </div>

    <style lang="scss">
        @import "../var";

        .pop {
            display: flex;
            align-items: center;
            flex-direction: column;

            background-color: $darker-black-rustic;

            border-style: solid;
            border-radius: 8px;
            border-width: 5px;
            border-color: $brown-cold;

            padding: 50px;
            font-size: 15px;

            > h5 {
                margin-top: 0;
                margin-bottom: 25px;
                font-size: 20px;
            }

            > input {
                padding: 0;
                padding-top: 10px;
                padding-bottom: 10px;
                text-align: center;

                background-color: rgba(#FFF, $alpha: 0.1);
                color: white;
                font-family: inherit;

                border: none;
                outline: none;
                font-size: inherit;
                width: 100%;
            }

            > button {
                color: black;
                background-color: $compliment;
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: inherit;
                width: 100%;
            }
        }
    </style>
</Popup>

<Popup bind:show={previewPopup}>
    <div class="pop">
        <img src="{items[previewIndex].logo}" alt="">
        <div class="name">{items[previewIndex].name}</div>
        <p class="description">{items[previewIndex].description}</p>
        <div class="bottom">
            <div class="price">{items[previewIndex].price}</div>
            <button on:mousedown={addToCart}>Add to Cart</button>
        </div>
    </div>

    <style lang="scss">
        @import "../var";

        .pop {
            display: flex;
            flex-direction: column;
            align-items: center;

            padding: 20px;

            background-color: $darker-black-rustic;

            border-style: solid;
            border-radius: 8px;
            border-width: 5px;
            border-color: $brown-cold;

            > img {
                margin-top: 20px;
                aspect-ratio: 1;
                width: 100px;
            }

            > .name {
                font-size: 24px;
                font-weight: bold;
                color: $compliment;
                
                margin-top: 10px;
                margin-bottom: 10px;
            }

            > .description {
                text-align: left;
                width: 100%;

                padding: 20px;

                border-top: solid 1px $brown-cold;
                border-bottom: solid 1px $brown-cold;
            }

            > .bottom {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                > .price {
                    font-weight: bold;
                }

                > button {
                    color: black;
                    padding: 5px;
                    padding-left: 20px;
                    padding-right: 20px;
                    background-color: $compliment;
                    border-radius: 25px;
                }
            }
        }
    </style>
</Popup>

<main>
    <div class="title">
        <div class="name"><strong>LoreGold</strong> Store</div>
        <div class="items">
            {#if loggedIn}
            <div class="login" on:mousedown={(e) => { $username = ""; }} style="--content: '{$username}'; --len: {len}px" data-logged-in></div>
            {:else}
            <div class="login" on:mousedown={(e) => { loginPopup = !loginPopup; }} style="--content: '{$username}'; --len: {len}px"></div>
            {/if}
            <div class="cart" on:mousedown={(e) => { location.href = "/store/cart/" }}><Icon icon="ic:baseline-shopping-cart" /></div>
        </div>
    </div>
    <div class="items">
        {#each items as item, index} 
        {#if item.important == null}
        <div class="item" id="{item.id}" on:mousedown={(e) => { preview(index) }}>
            <img src="{item.logo}" alt="gold" class="logo">
            <div class="name">{item.name}</div>
            <p class="description">{item.description}</p>
            <div class="price">{item.price}</div>
        </div>
        {:else}
        <div class="item" data-important style="--important: '{item.important.message}'" id="{item.id}" on:mousedown={(e) => { preview(index) }}>
            <img src="{item.logo}" alt="gold" class="logo">
            <div class="name">{item.name}</div>
            <p class="description">{item.description}</p>
            <div class="price">{item.price}</div>
        </div>
        {/if}
        {/each}
    </div>
</main>

<style lang="scss">
    @import "../var";

    main {
        padding-top: 15vh;
        padding-left: 15vh;
        padding-right: 15vh;

        > .title {
            display: flex;
            justify-content: space-between;

            width: 100%;

            > .name {
                font-size: 45px;
            }

            > .items {
                display: flex;
                justify-content: center;
                align-items: center;

                background-color: $darker-brown-rustic;

                height: 45px;

                border-radius: 2px;

                > .login {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    width: 80px;
                    height: inherit;

                    cursor: pointer;

                    &:hover {
                        background-color: rgba($color: #000000, $alpha: 0.3);
                    }

                    &::before {
                        content: "Login";
                    }

                    &[data-logged-in] {
                        width: calc(80px + var(--len));

                        &::before {
                            content: var(--content);
                        }

                        &:hover {
                            &::before {
                                content: "Logout";
                            }
                        }
                    }
                }

                > .cart {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    width: 50px;
                    height: inherit;

                    cursor: pointer;

                    &:hover {
                        background-color: rgba($color: #000000, $alpha: 0.3);
                    }
                }
            }
        }

        > .items {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

            > .item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;

                width: 200px;

                margin: 20px;

                padding: 50px;
                padding-bottom: 30px;

                border-style: solid;
                border-width: 2px;
                border-radius: 8px;
                border-color: $brown-cold;
                background-color: rgba($brown-cold, $alpha: 0.3);

                transition: box-shadow 100ms ease-in-out;

                cursor: pointer;
                user-select: none;

                > .name {
                    color: $compliment;
                    font-weight: bold;
                    font-size: 24px;
                    margin-top: 20px;
                }

                > .price {
                    font-weight: bold;
                    font-size: 18px;
                    margin-top: 20px;
                }

                &:hover {
                    box-shadow: 0px 0px 30px 0px rgba($compliment, $alpha: 0.3);
                }

                &[data-important] {
                    outline: $compliment;
                    outline-width: 5px;
                    outline-style: solid;
                    overflow: hidden;
                    border: none;

                    &::before {
                        color: black;
                        font-weight: bold;
                        content: var(--important);
                        margin-top: -52px;
                        margin-bottom: 20px;
                        padding: 50px;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        background-color: $compliment;
                        width: 110%;
                    }
                }
            }
        }
    }
</style>