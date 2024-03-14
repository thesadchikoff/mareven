<template lang="pug">
.welcome-section(class="mobile:py-[10px] tablet:py-[63px]  h-screen w-full")
  .content-container
    .logo-box(:class="scene === 'open-pack' ? 'align-start' : 'align-center'")
      img.logo(src="../assets/images/logo_before.svg", alt="" :class="scene === 'open-pack' ? 'minimal' : 'original'")
    .radial-blur(class="mobile:h-full tablet:h-[1454.19px]")
    .promo-block(v-if="scene === 'open-pack'" :class="'z-[5000000] bg-no-repeat bg-center mobile:bg-cover tablet:bg-auto absolute mobile:w-[300px] tablet:w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade animate-duration-[400ms] animate-delay-1000'")
    .pack(v-if="scene === 'default'" )
      .open-button(@mouseenter="isHover = true", @mouseleave="isHover = false" @click="scene = 'open-pack'")
        img.row(src="../assets/images/row.svg", alt="" class="tablet:left-[35%] mobile:leftt-0")
        span.btn-label(class="mobile:left-[10%] tablet:left-[35%] top-[20%] absolute") Открой меня
      img.pack__picture(
        src="../assets/images/pack.png",
        alt="",
        @mouseenter="isHover = true",
        @mouseleave="isHover = false",
        :class="isHover ? 'trigger' : 'swing'"
        class="mobile:w-[350px] tablet:w-max mobile:-bottom-8 tablet:-bottom-28 absolute tablet:block"
      )
    img.open-effect(v-if="scene === 'open-pack'" src="../assets/images/effect.svg")
    .open-pack(v-if="scene === 'open-pack'" )
      img.open-pack__picture(
        src="../assets/images/open_pack.png",
        alt="",
        :class="'animate-fade-up'"
        class="absolute -bottom-[80px]"
      )
</template>

<script>
import { gsap } from 'gsap'
import { onMounted, onUnmounted, ref } from 'vue'
export default {
	name: 'welcome-section',

	data() {
		return {
			isHover: false,
		}
	},
	setup() {
    const scene = ref("default")
		const scrolled = ref(0)
		const resizeble = ref(false)
		const screenWidth = ref(window.innerWidth)
		const resizeLogo = () => {
			resizeble.value = !resizeble.value
		}


		return {
			resizeLogo,
      scene
		}
	},
}
</script>

<style lang="scss" scoped>
$feature: max-width;
.welcome-section {
	position: sticky;
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
			background: linear-gradient(
				74.51deg,
				rgba(251, 217, 39, 0.74) -19.965%,
				rgba(251, 217, 39, 0.74) 50.33%
			);
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
        transition: all .3s ease;
        z-index: 500000;
      }
    }
	}
}

.promo-block {
  background-image: url("../assets/images/25.svg");
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
    transform: scale(.85);
  }
  50% {
    transform: scale(1);
  }
  to {
    transform: scale(.85);
  }
}
</style>
