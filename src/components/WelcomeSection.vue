<template>
	<div
		class="welcome-section mobile:py-[10px] tablet:py-[63px] h-screen w-full sticky"
	>
		<svg
			class="absolute top-0 left-0 w-full h-full animate-pulse animate-duration-[5s]"
			width="4874.000000"
			height="4616.000000"
			:viewBox="`${isMobile ? '800 860 874 616' : '400 500 1874 1616'}`"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<filter
					id="filter_70_1364_dd"
					x="-0.446289"
					y="-0.092285"
					width="2873.709961"
					height="2615.821045"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur stdDeviation="215.167" result="effect_layerBlur_1" />
				</filter>
				<linearGradient
					id="paint_linear_70_1364_0"
					x1="295.000427"
					y1="772.999512"
					x2="1447.000000"
					y2="1328.000244"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#FBD927" />
					<stop offset="1.000000" stop-color="#FBD927" />
				</linearGradient>
			</defs>
			<g filter="url(#filter_70_1364_dd)">
				<path
					id="Ellipse 2"
					d="M2140.71 1675.96C1907.95 1944.15 1134.79 2085.46 866.6 1852.7C598.41 1619.95 569.68 1213.85 802.44 945.66C1035.18 677.47 1558.67 527.84 1826.86 760.6C2095.05 993.36 2373.46 1407.77 2140.71 1675.96Z"
					fill="url(#paint_linear_70_1364_0)"
					fill-opacity="0.740000"
					fill-rule="nonzero"
				/>
			</g>
		</svg>
		<div
			:class="`content-container ${scene !== 'open-pack' && 'mobile:px-10'} tablet:px-0`"
		>
			<div
				:class="
					scene === 'open-pack'
						? 'logo-box align-start'
						: 'logo-box align-center'
				"
			>
				<img
					src="../assets/images/logo_before.svg"
					alt=""
					:class="scene === 'open-pack' ? 'minimal' : 'original'"
				/>
			</div>
			<!--  <div class="radial-blur mobile:h-full tablet:h-[1454.19px]"></div>-->
			<div
				v-if="scene === 'open-pack'"
				class="promo-block z-[5000000] bg-no-repeat bg-center mobile:bg-cover tablet:bg-auto absolute mobile:w-[300px] tablet:w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade animate-duration-[400ms] animate-delay-1000"
			></div>
			<div v-if="scene === 'default'" class="pack">
				<div
					@mouseenter="isHover = true"
					@mouseleave="isHover = false"
					@click="scene = 'open-pack'"
					class="open-button"
				>
					<img
						src="../assets/images/row.svg"
						alt=""
						class="tablet:left-[35%] row mobile:left-0"
					/>
					<span
						class="btn-label mobile:left-[10%] tablet:left-[35%] top-[20%] absolute"
						>Открой меня</span
					>
				</div>
				<img
					src="../assets/images/pack.png"
					alt=""
					@mouseenter="isHover = true"
					@mouseleave="isHover = false"
					:class="{ trigger: isHover, swing: !isHover }"
					class="pack__picture mobile:w-[350px] tablet:w-max mobile:-bottom-8 tablet:-bottom-28 absolute tablet:block -z-20"
				/>
			</div>
			<img
				v-if="scene === 'open-pack'"
				src="../assets/images/effect.svg"
				class="open-effect"
			/>
			<div v-if="scene === 'open-pack'" class="open-pack">
				<img
					src="../assets/images/open_pack.png"
					alt=""
					class="open-pack__picture absolute -bottom-[80px] animate-fade-up"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { onMounted, onUnmounted, ref } from 'vue'
import { useMobile } from '../hooks/useMobile.js'
export default {
	name: 'welcome-section',

	data() {
		return {
			isHover: false,
		}
	},
	setup() {
		const scene = ref('default')
		const resizeble = ref(false)
		const resizeLogo = () => {
			resizeble.value = !resizeble.value
		}
		const isMobile = useMobile()
		return {
			resizeLogo,
			scene,
			isMobile,
		}
	},
}
</script>

<style lang="scss" scoped>
$feature: max-width;
.welcome-section {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f34039;
	.content-container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 100vh;
		.logo-box {
			width: 100%;
			.logo {
				z-index: 5;
				transition: all 1s ease;
			}
		}
		.radial-blur {
			z-index: 4;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			top: 0;
			bottom: 29.9%;
			filter: blur(645.5px);
			//background: linear-gradient(
			//	74.51deg,
			//	rgba(251, 217, 39, 0.74) -19.965%,
			//	rgba(251, 217, 39, 0.74) 50.33%
			//);
		}
		.pack {
			position: relative;
			width: 100%;
			height: 100%;
			z-index: 5000;
			display: flex;
			flex-direction: column;
			align-items: center;
			.open-button {
				z-index: 10;
				position: relative;
				bottom: -5rem;
				width: 100%;
				.btn-label {
					cursor: pointer;
				}
				.row {
					position: absolute;
					top: -2rem;
					animation: swing 0.9s infinite alternate;
				}
			}
			.pack-picture {
				position: absolute;
				bottom: -20px;
				//z-index: -5;
			}
			span {
				font-size: 30px;
				color: rgb(223, 35, 29);
				font-weight: 600;
				font-family: 'Montserrat', sans-serif;
			}
		}
		.open-effect {
			//z-index: 10000;
			position: absolute;
			margin-left: auto;
			margin-right: auto;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
			animation: pulse 20s ease-in-out infinite;
		}
		.open-pack {
			//z-index: 500000;
			&__picture {
				position: relative;
				transition: all 0.3s ease;
				z-index: 5;
			}
		}
	}
}

.promo-block {
	background-image: url('../assets/images/25.svg');
}

.logo-box {
	transition: all 1s ease;
}
.swing {
	animation: swing 1s infinite alternate !important;
}
.trigger {
	animation: trigger 0.1s infinite alternate !important;
}
.minimal {
	width: 200px;
	height: 50px;
}
.original {
	width: 1200px;
	height: 490px;
}
.align-center {
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.align-start {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
}
@keyframes swing {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(10deg);
	}
}

@keyframes trigger {
	0% {
		transform: translateX(-20px);
	}
	100% {
		transform: translateX(20px);
	}
}

@keyframes visible {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes pulse {
	from {
		transform: scale(0.85);
	}
	50% {
		transform: scale(1);
	}
	to {
		transform: scale(0.85);
	}
}
</style>
