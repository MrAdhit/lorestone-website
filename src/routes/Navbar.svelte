<div id="nav">
    <a href="/" class="logo"><img src="https://anonupload.tech/files/1681603239958_lorestone.png/view" alt=""></a>
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

        width: 90vw;

        padding: 20px;
        padding-left: 5vw;
        padding-right: 5vw;

        background-color: rgba($brown-rustic, $alpha: 0.5);
    }

    .logo {
        font-size: 42px;
        font-weight: 900;

        width: 200px;
    }

    .nav-items {
        margin-left: 7.5vw;

        > a {
            margin-left: 16px;
            margin-right: 16px;
        }
    }
</style>
