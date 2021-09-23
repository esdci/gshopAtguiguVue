<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont iconiconremovecircleoutline" v-if="food.count" @click.stop="updataFoodCount(true)"></div>
    </transition>

    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont iconicon_add-circle" @click.stop="updataFoodCount(false)"></div>
  </div>
</template>

<script>
export default {
  props:{
    food: Object
  },

  methods:{
    updataFoodCount(isAdd){
      this.$store.dispatch('updataFoodCount', {isAdd, food:this.food})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.cartcontrol
  font-size: 0
  .cart-decrease
    display: inline-block
    padding: 6px
    line-height: 24px
    font-size: 24px
    color: rgb(0, 160, 220)

  .iconiconremovecircleoutline
    display: inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color $green
    &.move-enter-active, &.move-leave-active
      transition all .3s
    &.move-enter, &.move-leave-to
      opacity 0
      transform translateX(15px) rotate(180deg)
  .cart-count
    display: inline-block
    vertical-align: top
    width: 12px
    padding-top: 6px
    line-height: 24px
    text-align: center
    font-size: 10px
    color: rgb(147, 153, 159)
  .iconicon_add-circle
    display: inline-block
    padding: 6px
    line-height: 24px
    font-size: 24px
    color $green
</style>
