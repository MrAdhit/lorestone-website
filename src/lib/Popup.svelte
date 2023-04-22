<script lang="ts">
    export let show: boolean;
</script>

{#if show}    
<div id="popup">
    <div on:mousedown={(e) => { show = false; }} class="overlay"></div>
    <div class="content">
        <slot/>
    </div>
</div>
{/if}

<style lang="scss">
    @import "../routes/var";

    #popup {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100vh;

        > .overlay {
            background-color: rgba($color: #000000, $alpha: 0.5);
            position: fixed;
            width: 100%;
            height: 100vh;
            z-index: 0;
        }

        > .content {
            z-index: 1000;
        }
    }
</style>