<template>
	<div
		class="flex flex-col items-center w-full h-full pt-32 bg-transparent cursor-pointer"
		@mouseenter="focused = true"
		@mouseleave="focused = false"
	>
		<div
			class="flex flex-col items-center justify-center w-full bg-transparent"
		>
			<div
				class="bg-[#FFF1AA] bg-blur w-[426px] h-[426px] bg-opacity-50 rounded-full relative flex items-center justify-center"
			>
				<div class="radial-bg w-[360px] h-[360px] rounded-full z-40">
					<img
						:class="{ active: focused }"
						:src="item.url"
						alt=""
						class="absolute top-[-20px] mobile:left-[25%] tablet:left-[-50px]"
					/>
				</div>
				<div
					v-html="item.separator"
					class="connector mobile:hidden tablet:block"
					v-if="!isViewSeparator"
				/>
			</div>
		</div>
		<div class="flex justify-end w-full">
			<div class="flex flex-col items-start justify-start gap-0">
				<h1 class="text text-[rgb(251, 217, 39)]">{{ item.year }}</h1>
				<span class="description w-[300px] text-start">{{
					item.description
				}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'
import { SwiperSlide } from 'swiper/vue'
import BaseIcon from './ui/BaseIcon.vue'
import ModalView from './ModalView.vue'
export default {
	name: 'slider-item',
	components: { ModalView, BaseIcon },
	props: {
		isViewSeparator: Boolean,
		item: Object,
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
	left: 270px;
	top: 50%;
	z-index: 10;
}
.active {
	transform: rotate(30deg) !important;
}
.radial-bg {
	background: linear-gradient(
		208deg,
		rgb(225, 51, 32) 63.782%,
		rgb(241, 145, 39) 106.98%,
		rgb(254, 216, 50) 130.134%
	);
}
.bg-blur::before {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	filter: blur(5px);
}
//.slide {
//  width: 100%;
//	display: flex;
//	flex-direction: column;
//	justify-content: center;
//  background: antiquewhite;
//  .slider-body {
//    width: 100%;
//    display: flex;
//    align-items: start;
//    justify-content: space-between;
//  }
//	.content-blur {
//    position: relative;
//    z-index: 10;
//		width: 335px;
//		height: 335px;
//		backdrop-filter: blur(5px);
//		box-sizing: border-box;
//		border-radius: 1000px;
//		background: rgb(255, 241, 170);
//		.content {
//      left: 50%;
//      top: 50%;
//      transform: translate(3%, 10%);
//			z-index: 10;
//			background: linear-gradient(
//				208deg,
//				rgb(225, 51, 32) 63.782%,
//				rgb(241, 145, 39) 106.98%,
//				rgb(254, 216, 50) 130.134%
//			);
//			width: 282px;
//			height: 282px;
//			border-radius: 1000px;
//			img {
//				transform: rotate(12.38deg);
//				position: absolute;
//				top: -100px;
//				left: -50px;
//				transition: transform 0.5s ease;
//			}
//		}
//	}
//  .slider-footer {
//    width: 100%;
//    display: flex;
//    align-items: center;
//    justify-content: end;
//    .description  {
//      h1 {
//        color: rgb(251, 217, 39);
//        font-size: 120px;
//        margin: 0;
//      }
//      span {
//        width: 250px;
//        font-size: 29px;
//      }
//    }
//  }

//}

img {
	transform: rotate(12.38deg);

	transition: all 0.5s ease;
}

.text {
	color: rgb(251, 217, 39);
	font-size: 120px;
	font-weight: bold;
	margin: 0;
	padding: 0;
}
.description {
	font-size: 40px;
	font-weight: 400;
	font-family: 'PT Sans Narrow', sans-serif;
}
</style>
