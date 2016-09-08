<template>
    <div class=" tabbar">
        <a v-link="'/health'" @click="clickTab('health')" class="tabbar-item" :class="{'active': isActive('health')}">
            <p class=" tabbar-label">口腔健康</p>
        </a>
        <a v-link="'/mine'" @click="clickTab('mine')" class="tabbar-item" :class="{'active': isActive('mine')}">
            <p class=" tabbar-label">我的信息</p>
        </a>
    </div>
</template>
<script>
import {activeTab} from '../vuex/getters'
import {updateActiveTab, updateHeadline} from '../vuex/actions'
export default {

  vuex: {
    getters: {
      activeTab
    },
    actions: {
      updateHeadline,
      updateActiveTab
    }
  },
  methods: {
    clickTab (value) {
      this.updateActiveTab(value)
    },
    isActive (value) {
      return this.activeTab === value
    }
  }
}
</script>
<style lang="scss" scoped>
@Import '../styles/css/variable';
@import '../styles/css/util/border';
.tabbar {
    position: absolute;
    display: flex;
    height: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    @extend .ui-border-t;
    text-align: center;

    .tabbar-item {
        display: inline-block;
        width: 50%;
        background-color: $tab-bg;
        border-right: 1px solid $bordercolor;

        .tabbar-label {
            color: $txt-default;
            font-size: 36px;/*px*/
            line-height: 100px;
        }
        &.active .tabbar-label {
            color: $theme-blue;
        }
    }
    .tabbar-item:last-child {
        border: none;
    }
}
</style>
