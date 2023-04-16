<script lang="ts">
    let staff = [
        {
            name: "Faiq",
            avatar: "https://minotar.net/helm/idkmanwafer/100",
            roles: ["Owner", "Marketing"]
        },
        {
            name: "Cahaya",
            avatar: "https://minotar.net/helm/idkmanwafer/100",
            roles: ["Owner", "Marketing"]
        },
        {
            name: "Hendra",
            avatar: "https://minotar.net/helm/idkmanwafer/100",
            roles: ["Developer"]
        },
        {
            name: "Ziddan",
            avatar: "https://minotar.net/helm/idkmanwafer/100",
            roles: ["Developer"]
        },
        {
            name: "Andi",
            avatar: "https://minotar.net/helm/idkmanwafer/100",
            roles: ["Developer"]
        },
        {
            name: "Kenvan",
            avatar: "https://minotar.net/helm/idkmanwafer/100",
            roles: ["Developer"]
        },
        {
            name: "MrAdhit",
            avatar: "https://minotar.net/helm/MrAdhit/100",
            roles: ["Developer"]
        },
        {
            name: "Honjo?",
            avatar: "https://minotar.net/helm/idkmanwafer/100",
            roles: ["Designer"]
        },
        {
            name: "mr1170",
            avatar: "https://minotar.net/helm/idkmanwafer/100",
            roles: ["Designer"]
        },
        {
            name: "NexsanDayan",
            avatar: "https://minotar.net/helm/idkmanwafer/100",
            roles: ["Builder", "Marketing"]
        },
        {
            name: "Lonely_Ma_",
            avatar: "https://minotar.net/helm/idkmanwafer/100",
            roles: ["Builder"]
        },
        {
            name: "ZenW&",
            avatar: "https://minotar.net/helm/idkmanwafer/100",
            roles: ["Helper"]
        },
        {
            name: "Yuki1140",
            avatar: "https://minotar.net/helm/idkmanwafer/100",
            roles: ["Marketing"]
        }
    ]
</script>

<div id="staff">
    <h1>Server Staff</h1>
    <div class="staffs">
        {#each staff as staff}
        <div class="staff">
            <img src="{staff.avatar}" alt="{staff.name}" class="avatar">
            <div class="title">{staff.name}</div>
            <div class="roles">
                {#each staff.roles as role}
                <span>{role}</span>
                {/each}
            </div>
        </div>
        {/each}
    </div>
</div>

<style lang="scss">
    @import "../var";

    #staff {
        padding-top: 15vh;
        padding-left: 15vh;
        padding-right: 15vh;

        > h1 {
            font-size: 48px;
        }

        > .staffs {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 50px 100px;
            margin-bottom: 100px;

            > .staff {
                border-width: 2px;
                border-color: $brown-cold;
                border-style: solid;
                border-radius: 8px;
                background-color: rgba($brown-cold, $alpha: 0.3);
                padding: 30px;
                padding-top: 20px;
                padding-bottom: 20px;

                width: 300px;
                
                display: flex;
                flex-direction: column;
                align-items: center;

                > .avatar {
                    aspect-ratio: 1;
                    width: 100px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }

                > .title {
                    font-size: 24px;
                }

                > .roles {
                    margin-top: 20px;
                    display: flex;
                    gap: 5px 5px;

                    > span {
                        padding: 5px;
                        padding-left: 10px;
                        padding-right: 10px;

                        background-color: $brown-rustic;

                        border-radius: 4px;

                        font-size: 12px;
                        font-weight: 800;
                    }
                }
            }
        }
    }
</style>
