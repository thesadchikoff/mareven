<template>
	<div
		class="slide"
		@mouseenter="focused = true"
		@mouseleave="focused = false"
	>
		<div class="slider-body">
      <div class="content-blur">
        <div class="content">
          <img
              :class="{ active: focused }"
              :src="url"
              alt=""
          />
        </div>
      </div>
      <base-icon :name="separator" class="connector" v-if="!isViewSeparator"/>
    </div>
    <div class="slider-footer">
      <div  class="description">
        <h1>{{ startYear }}</h1>
        <span>{{ description }}</span>
      </div>
    </div>

	</div>
</template>

<script>
import { ref } from 'vue'
import { SwiperSlide } from 'swiper/vue'
import BaseIcon from "./ui/BaseIcon.vue";
export default {
	name: 'slider-item',
  components: {BaseIcon},
  props: {
    isViewSeparator: Boolean,
    url: String,
    description: String,
    startYear: Number,
    separator: String
  },
	setup() {
		const focused = ref(false)
		return {
			focused,
			SwiperSlide,
		}
	},
}
</script>

<style lang="scss" scoped>
.connector {
	position: absolute;
	right: -50px;
}
.active {
	transform: rotate(30deg) !important;
}
.slide {
  width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
  .slider-body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
	.content-blur {
    align-items: start;
    justify-content: start;
		width: 335px;
		height: 335px;
		display: flex;

		backdrop-filter: blur(5px);

		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		border-radius: 1000px;
		background: rgb(255, 241, 170);
		z-index: 1;
		.content {
			position: relative;
			z-index: 10;
			background: linear-gradient(
				208deg,
				rgb(225, 51, 32) 63.782%,
				rgb(241, 145, 39) 106.98%,
				rgb(254, 216, 50) 130.134%
			);
			width: 282px;
			height: 282px;
			border-radius: 1000px;
			img {
				transform: rotate(12.38deg);
				position: absolute;
				top: -100px;
				left: -50px;
				transition: transform 0.5s ease;
			}
		}
	}
  .slider-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    .description  {
      h1 {
        color: rgb(251, 217, 39);
        font-family: "Montserrat", sans-serif;
        font-size: 120px;
        margin: 0;
      }
      span {
        width: 250px;
        font-family: "Montserrat", sans-serif;
        font-size: 29px;
      }
    }
  }

}
</style>
