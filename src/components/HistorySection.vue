<template>
	<section class="history">
		<h1>
			История
			<article>роллтон</article>
		</h1>
		<swiper
			:modules="modules"
			class="slider-container"
			:slides-per-view="3"
			:space-between="50"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
		>
			<swiper-slide :lazy class="slider" v-for="(item, index) in items" :key="item">
				<slide-item :is-view-separator="index === items.length - 1" :url="item.url" :separator="item.separator" :start-year="item.year" :description="item.description"/>
			</swiper-slide>
		</swiper>
	</section>
</template>

<script>
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/vue'
import Pack from '../assets/images/pack_small.png'
import Pure from '../assets/images/pure.png'
import Broth from '../assets/images/broth.png'

import SlideItem from './SlideItem.vue'
import {reactive, ref} from 'vue'
export default {
	name: 'history-section',
	components: {
		Swiper,
		SwiperSlide,
		SlideItem,
	},
	setup() {
    const screenWidth = ref(window.innerWidth)
		const items = reactive([
			{
				url: Pack,
        year: 1999,
        description: "Первая пачка вермишели",
        separator: 'separator_1'
			},
			{
				url: Pure,
        year: 2001,
        description: "Запуск картофельного пюре",
        separator: 'separator_2'
			},
			{
				url: Broth,
        year: 2002,
        description: "Запуск бульонов",
        separator: 'separator_3'
			},
			{
				url: Pack,
        year: 2003,
        description: "Первая пачка вермишели",
        separator: 'separator_1'
			},
			{
				url: Pure,
        year: 2004,
        description: "Запуск картофельного пюре",
        separator: 'separator_2'
			},
			{
				url: Broth,
        year: 2005,
        description: "Запуск бульонов",
        separator: 'separator_3'
			},
		])
		const onSwiper = swiper => {
			console.log(swiper)
		}
		const onSlideChange = () => {
			console.log('slide change')
		}
		return {
			onSwiper,
			onSlideChange,
			modules: [Navigation, Pagination, Scrollbar, A11y],
			items,
      screenWidth
		}
	},
}
</script>

<style lang="scss" scoped>
.history {
	background-color: #fffbde;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 35px;
	z-index: 10000;
	padding: 100px 0;
	h1 {
		padding-left: 150px;
	}
	.slider-container {
		width: 100%;
		height: 750px;
		display: flex;
		.slide {
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			&:last-child {
				svg {
					display: none;
				}
			}
		}
	}
	h1 {
		font-family: 'Montserrat', sans-serif;
		text-transform: uppercase;
		color: #df231d;
		display: flex;
		align-items: center;
		gap: 4px;
		article {
			color: #fbd927;
		}
	}
}
</style>
