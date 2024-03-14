<template>
<!--  <modal-view/>-->
	<section class="flex bg-[#fffbde] mobile:h-[1100px] tablet:h-[1000px] flex-col gap-[35px] w-full h-screen z-50 justify-center">
      <div class="w-full mobile:px-[10px] tablet:px-32">
        <h1 class="uppercase text-[#df231d] flex flex-wrap items-center gap-[4px] font-bold text-[50px]">
          История
          <article class="text-[#fbd927]">роллтон</article>
        </h1>
      </div>
		<swiper
			:modules="modules"
			class="px-10 bg-transparent flex items-center justify-center flex-col"
			:slides-per-view="mobile ? 1 : 3"
			:space-between="mobile ? 150 : 50"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
		>
			<swiper-slide :lazy class="h-[800px]" v-for="(item, index) in items" :key="item.id">
				<slide-item :is-view-separator="index === items.length - 1" :url="item.url" @click="openModal(item)" :item="item"/>
			</swiper-slide>
      <modal-view v-if="showModal" @close="closeModal" :item="selectedItem"/>
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
import {reactive, ref, watch} from 'vue'
import ModalView from "./ModalView.vue";
import {useBreakpoints} from "@vueuse/core";
import promoService from "../services/promo.service.js";
export default {
	name: 'history-section',
	components: {
    ModalView,
		Swiper,
		SwiperSlide,
		SlideItem,
	},
	setup() {
    const screenWidth = ref(window.innerWidth)
    const showModal = ref(false)
    const breakpoints = useBreakpoints({
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    })

		const items = reactive(promoService.getPromoItems())
    const mobile = breakpoints.between('mobile', 'tablet')
    const selectedItem = ref(null)
    const openModal = (item) => {
      selectedItem.value = item
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };
    watch(showModal, (newValue, oldValue) => {
      console.log(showModal.value);
      if (newValue) {
        console.log(2);
        document.body.classList.add('modal-view');
      } else {
        console.log(1);
        document.body.classList.remove('modal-view');
      }
    });
		const onSwiper = swiper => {
			console.log(swiper)
		}
		const onSlideChange = () => {
			console.log('slide change')
		}
    // console.log(mobile)
    watch(mobile, (newValue, oldValue) => {
      console.log(oldValue, newValue)
    })
		return {
			onSwiper,
			onSlideChange,
			modules: [Navigation, Pagination, Scrollbar, A11y],
			items,
      screenWidth,
      showModal,
      openModal,
      selectedItem,
      closeModal,
      breakpoints,
      mobile
		}
	},
}
</script>

<style lang="scss" scoped>
//.history {
//	background-color: #fffbde;
//	display: flex;
//	flex-direction: column;
//  //padding: 100px 200px;
//	justify-content: center;
//	gap: 35px;
//	z-index: 10000;
//
//	.slider-container {
//    width: 100%;
//		height: 750px;
//		display: flex;
//		.slide {
//			height: 100%;
//			display: flex;
//			flex-direction: column;
//			align-items: center;
//			justify-content: center;
//			&:last-child {
//				svg {
//					display: none;
//				}
//			}
//		}
//	}
//	h1 {
//		font-family: 'Montserrat', sans-serif;
//		text-transform: uppercase;
//		color: #df231d;
//		display: flex;
//		align-items: center;
//		gap: 4px;
//		article {
//			color: #fbd927;
//		}
//	}
//}
</style>
