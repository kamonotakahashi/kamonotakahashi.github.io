<template>

    <div class="index-contents">
        <div class="person-items">
            <div class="person-items__inner-box-left"></div>
            <div class="person-items__inner-box-center">

                <h3 class="my-status-title">Skills</h3>
                <div class="my-status-markup">
                    <ul class="skills">
                        <li style="width:100%">aaa</li>
                        <li v-for="skill in skills" class="skills-box">
                            {{ skill.item }}
                            <span class="star-item">
                                <star-rating
                                            v-model="skill.level"
                                            :star-size="25"
                                            :readOnly="true"
                                            :show-rating="false"
                                            style="width:125px"
                                />
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="dummy-block"></div>

                <div class="border__inner"></div>

                <h3 class="my-status-title">My Effort</h3>

                <div class="my-status-markup">
                    <div class="markup-box">
                        <img src="media/img/market.png" alt="誠実・勤勉" @mouseover="mouseover" name="media/img/market_focus.png" :class="{active:imgActiveFlg[0]}" @mouseleave="mouseleave" data-no="0">
                        <span class="markup-box__inner-text">
                            <span v-if="imgActiveFlg[0]">
                                <dd>Down to earth</dd>
                                <dd>Diligence</dd>
                            </span>
                            <span v-else>堅実・勤勉</span>
                        </span>
                    </div>
                    <div class="markup-box">
                        <img src="media/img/challenges.png" alt="挑戦・自己研磨" @mouseover="mouseover" name="media/img/challenges_focus.png" :class="{active:imgActiveFlg[1]}" @mouseleave="mouseleave" data-no="1">
                        <span class="markup-box__inner-text">
                            <span v-if="imgActiveFlg[1]">
                                <dd>Challenging</dd>
                                <dd>Self polishing</dd>
                            </span>
                            <span v-else>挑戦・自己研磨</span>
                        </span>
                    </div>
                    <div class="markup-box">
                        <img src="media/img/idea.png" alt="アイデア・創作" @mouseover="mouseover" name="media/img/idea_focus.png" :class="{active:imgActiveFlg[2]}" @mouseleave="mouseleave" data-no="2">
                        <span class="markup-box__inner-text">
                            <span v-if="imgActiveFlg[2]">
                                <dd>Idea</dd>
                                <dd>Creation</dd>
                            </span>
                            <span v-else>アイデア・創作</span>
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
            imgActiveFlg : [false,false,false],
            imgActiveFlga : false,
            skills : [
                { item : "Java", level : 2 },
                { item : "JavaScript", level : 3 },
                { item : "PHP", level : 4 },
                { item : "Python", level : 2 },
                { item : "Python", level : 2 },
                { item : "VBA/VBS", level : 3 },
                { item : "Bash", level : 2 },
            ],
        }
    },
    methods : {
        mouseover : function(e) {
            let tmpImg = '';
            tmpImg = e.target.name;
            e.target.name = e.target.src;
            e.target.src = tmpImg;
            this.imgActiveFlg[Number(e.target.dataset.no)] = true;
            this.imgActiveFlg.splice();

        },
        mouseleave : function(e) {
            let tmpImg = '';
            tmpImg = e.target.name;
            e.target.name = e.target.src;
            e.target.src = tmpImg;
            this.imgActiveFlg[Number(e.target.dataset.no)] = false;
            this.imgActiveFlg.splice();
        }
    }
}
</script>

<style lang="sass">

</style>
