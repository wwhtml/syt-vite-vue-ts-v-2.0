<script lang="ts" setup>
//列表数据

interface Props {
  hosList: HosListContentItem[] | undefined;
  loading: boolean;
}

withDefaults(defineProps<Props>(), {
  hosList: () => [],
  loading: false
});
</script>

<template>
  <div class="home-hos-list">
    <!-- <div v-if="!loading"> -->

    <div class="loading" v-loading="loading" v-if="loading"></div>

    <template v-if="!loading">
      <div class="hos-list-wrap" v-if="hosList && hosList.length">
        <div
          class="card"
          v-for="item in hosList"
          :key="item.id"
          @click="$router.push(`/hospital/${item.hoscode}/home`)"
        >
          <div class="left">
            <div class="hos-title">{{ item.hosname }}</div>
            <div class="content">
              <div class="level">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dengji"></use>
                </svg>
                <span>{{ item.param.hostypeString }}</span>
              </div>
              <div class="time">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-time"></use>
                </svg>
                <span>每天 {{ item.bookingRule.releaseTime }} 放号</span>
              </div>
            </div>
          </div>
          <div class="right">
            <img :src="`data:image/jpeg;base64,${item.logoData}`" alt="" />
          </div>
        </div>
      </div>

      <el-empty :image-size="120" description="暂无数据" v-else />
    </template>

    <!-- </div> -->
  </div>
</template>

<style scoped lang="scss">
.home-hos-list {
  min-height: 200px;
  padding-left: 10px;

  .loading {
    height: 160px;
  }
  .hos-list-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      // background-color: #fff;
      margin-top: 30px;

      width: 440px;
      height: 98px;
      padding: 0 10px 0 20px;
      cursor: pointer;

      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.04);
      transition: all 0.3s ease;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 78px;
        .hos-title {
          height: 42px;
          line-height: 42px;
          letter-spacing: 1px;
          font-size: 16px;
          color: $dark-color;
        }
        .content {
          width: 250px;
          display: flex;
          justify-content: space-between;

          color: $light-color;
          .icon {
            margin-right: 5px;
          }
        }
      }
      .right {
        width: 80px;
        height: 80px;
      }

      &:hover {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);

        .left {
          .hos-title {
            font-weight: 700;
          }
        }
        .right {
          transform: scale(1.04);
        }
      }
    }
  }
}
</style>
