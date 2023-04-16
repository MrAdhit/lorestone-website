<div id="temporary">
    {#each {length: 12} as _, i}
    <h1>This Page Is Subject To Change</h1>
    {/each}
</div>

<style lang="scss">
    #temporary {
        position: fixed;

        width: 100vw;
        height: 100vh;

        text-align: center;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 100px;

        overflow: hidden;

        opacity: 0.1;
        pointer-events: none;

        z-index: -100;
    }
</style>