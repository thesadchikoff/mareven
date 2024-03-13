<template>
<!--  <modal-view/>-->
	<section class="flex bg-[#fffbde] flex-col gap-[35px] w-full h-screen z-50 justify-center">
      <div class="w-full mobile:px-[10px] tablet:px-32">
        <h1 class="uppercase text-[#df231d] flex flex-wrap items-center gap-[4px] font-bold text-[50px]">
          История
          <article class="text-[#fbd927]">роллтон</article>
        </h1>
      </div>
		<swiper
			:modules="modules"
			class="px-10 h-[1500px] bg-transparent flex items-center justify-center flex-col"
			:slides-per-view="3"
			:space-between="50"
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
		const items = reactive([
      {
        id: 1,
        url: Pack,
        year: 1999,
        description: "Первая пачка вермишели",
        separator: `<svg width="363.095215" height="93.571655" viewBox="0 0 363.095 93.5717" fill="none"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <desc>
      </desc>
      <defs>
        <linearGradient id="paint_linear_36_1924_0" x1="204.097382" y1="72.072845" x2="25.886444" y2="-25.108719"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0.004629" stop-color="#FAB65B"/>
          <stop offset="1.000000" stop-color="#FFFBDE"/>
        </linearGradient>
      </defs>
      <path id="Vector"
            d="M361.879 41.9022C344.132 36.2393 286.883 38.7587 266.588 29.9365C209.148 4.96655 289.687 -9.39368 288.038 22.3726C287.289 36.8206 280.843 48.4291 272.961 58.6241C265.079 68.8191 251.326 76.0878 233.094 72.5216C212.839 68.5581 198.585 38.9612 179.881 44.7277C169.339 47.9812 157.633 65.8987 151.12 75.1361C133.602 99.9803 139.414 93.2745 115.748 51.0107C47.4348 -70.994 -34.4875 136.041 53.25 51.373C75.146 30.2432 39.1455 26.3745 12.4954 11.8429C13.2957 1.53711 1.34033 29.8811 4.57471 20.4563"
            stroke="url(#paint_linear_36_1924_0)" stroke-opacity="1.000000" stroke-width="8.000000"/>
    </svg>`
      },
      {
        id: 2,
        url: Pure,
        year: 2001,
        description: "Запуск картофельного пюре",
        separator: `<svg width="464.920776" height="113.534790" viewBox="0 0 464.921 113.535" fill="none"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
          </desc>
          <defs>
            <linearGradient id="paint_linear_36_1923_0" x1="3.380432" y1="67.789215" x2="464.206207" y2="42.494263"
                            gradientUnits="userSpaceOnUse">
              <stop stop-color="#FAB65B"/>
              <stop offset="1.000000" stop-color="#FCDA28"/>
            </linearGradient>
          </defs>
          <path id="Vector"
                d="M1.33105 30.4547C184.602 -34.225 229.371 104.256 174.487 109.452C149.884 111.777 149.609 59.9684 163.455 43.0165C178.652 24.4116 192.762 9.29419 219.765 5.39148C319.72 -9.05408 364.92 93.4825 462.267 7.16516"
                stroke="url(#paint_linear_36_1923_0)" stroke-opacity="1.000000" stroke-width="8.000000"/>
        </svg>`

      },
      {
        id: 3,
        url: Broth,
        year: 2002,
        description: "Запуск бульонов",
        separator: `<svg width="375.316162" height="53.670044" viewBox="0 0 375.316 53.67" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
          </desc>
          <defs>
            <linearGradient id="paint_linear_36_1922_0" x1="205.485016" y1="35.685127" x2="-172.324341" y2="-126.991112" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FBD927"/>
              <stop offset="1.000000" stop-color="#E22726"/>
            </linearGradient>
          </defs>
          <path id="Vector" d="M373.368 50.1763C145.939 -76.6118 163.438 107.586 1.91577 19.4584" stroke="url(#paint_linear_36_1922_0)" stroke-opacity="1.000000" stroke-width="8.000000"/>
        </svg>`

      },
			{
        id: 4,
				url: Pack,
        year: 2003,
        description: "Первая пачка вермишели",
        separator: `<svg width="363.095215" height="93.571655" viewBox="0 0 363.095 93.5717" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
          </desc>
          <defs>
            <linearGradient id="paint_linear_36_1924_0" x1="204.097382" y1="72.072845" x2="25.886444" y2="-25.108719" gradientUnits="userSpaceOnUse">
              <stop offset="0.004629" stop-color="#FAB65B"/>
              <stop offset="1.000000" stop-color="#FFFBDE"/>
            </linearGradient>
          </defs>
          <path id="Vector" d="M361.879 41.9022C344.132 36.2393 286.883 38.7587 266.588 29.9365C209.148 4.96655 289.687 -9.39368 288.038 22.3726C287.289 36.8206 280.843 48.4291 272.961 58.6241C265.079 68.8191 251.326 76.0878 233.094 72.5216C212.839 68.5581 198.585 38.9612 179.881 44.7277C169.339 47.9812 157.633 65.8987 151.12 75.1361C133.602 99.9803 139.414 93.2745 115.748 51.0107C47.4348 -70.994 -34.4875 136.041 53.25 51.373C75.146 30.2432 39.1455 26.3745 12.4954 11.8429C13.2957 1.53711 1.34033 29.8811 4.57471 20.4563" stroke="url(#paint_linear_36_1924_0)" stroke-opacity="1.000000" stroke-width="8.000000"/>
        </svg>`

      },
			{
        id: 5,
				url: Pure,
        year: 2004,
        description: "Запуск картофельного пюре",
        separator: `<svg width="464.920776" height="113.534790" viewBox="0 0 464.921 113.535" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
          </desc>
          <defs>
            <linearGradient id="paint_linear_36_1923_0" x1="3.380432" y1="67.789215" x2="464.206207" y2="42.494263" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FAB65B"/>
              <stop offset="1.000000" stop-color="#FCDA28"/>
            </linearGradient>
          </defs>
          <path id="Vector" d="M1.33105 30.4547C184.602 -34.225 229.371 104.256 174.487 109.452C149.884 111.777 149.609 59.9684 163.455 43.0165C178.652 24.4116 192.762 9.29419 219.765 5.39148C319.72 -9.05408 364.92 93.4825 462.267 7.16516" stroke="url(#paint_linear_36_1923_0)" stroke-opacity="1.000000" stroke-width="8.000000"/>
        </svg>`

      },
			{
        id: 6,
				url: Broth,
        year: 2005,
        description: "Запуск бульонов",
        separator: `<svg width="375.316162" height="53.670044" viewBox="0 0 375.316 53.67" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>
          </desc>
          <defs>
            <linearGradient id="paint_linear_36_1922_0" x1="205.485016" y1="35.685127" x2="-172.324341" y2="-126.991112" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FBD927"/>
              <stop offset="1.000000" stop-color="#E22726"/>
            </linearGradient>
          </defs>
          <path id="Vector" d="M373.368 50.1763C145.939 -76.6118 163.438 107.586 1.91577 19.4584" stroke="url(#paint_linear_36_1922_0)" stroke-opacity="1.000000" stroke-width="8.000000"/>
        </svg>`

      },
		])
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
		return {
			onSwiper,
			onSlideChange,
			modules: [Navigation, Pagination, Scrollbar, A11y],
			items,
      screenWidth,
      showModal,
      openModal,
      selectedItem,
      closeModal
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
