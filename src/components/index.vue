<template>

    <div class="index-contents">
        <div class="person-items">
            <div class="person-items__inner-box-left"></div>
            <div class="person-items__inner-box-center">

                <h3 class="my-status-title">My Status</h3>
                <div class="my-status-markup">

                    <ul>
                        <li v-for="skill in skills">
                            {{ skill.item }}
                            {{ skill.level }}
                        </li>
                    </ul>

                </div>

                <div class="dummy-block"></div>

                <div class="border__inner"></div>

                <h3 class="my-status-title">My Status</h3>

                <div class="my-status-markup">
                    <div class="markup-box">
                        <img src="media/img/market.png" alt="誠実・勤勉">
                        <span class="markup-box__inner-text">
                            堅実・勤勉
                        </span>
                    </div>
                    <div class="markup-box">
                        <img src="media/img/challenges.png" alt="挑戦・自己研磨">
                        <span class="markup-box__inner-text">
                            挑戦・自己研磨
                        </span>
                    </div>
                    <div class="markup-box">
                        <img src="media/img/idea.png" alt="アイデア・創作">
                        <span class="markup-box__inner-text">
                            アイデア・創作
                        </span>
                    </div>
                </div>

            </div>
            <div class="person-items__inner-box-right"></div>
        </div>
    </div>

</template>

<script>
export default {
    name: "index",
    data: function() {
        return {
            skills : [
                {
                    item : "Java",
                    level : 3
                },
                {
                    item : "JavaScript",
                    level : 3
                }
            ],
        }
    },
}
</script>

<style lang="sass">

</style>
