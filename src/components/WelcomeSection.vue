<template lang="pug">
.welcome-section(:style="{ transform: `translateY(${scrolled}px)` }")
  .content-container
    .logo-box(:class="scene === 'open-pack' ? 'align-start' : 'align-center'")
      img.logo(src="../assets/images/logo_before.svg", alt="" :class="scene === 'open-pack' ? 'minimal' : 'original'")
    .radial-blur
    .pack(v-if="scene === 'default'" )
      .open-button(@mouseenter="isHover = true", @mouseleave="isHover = false" @click="scene = 'open-pack'")
        img.row(src="../assets/images/row.svg", alt="")
        span.btn-label Открой меня
      img.pack__picture(
        src="../assets/images/pack.png",
        alt="",
        @mouseenter="isHover = true",
        @mouseleave="isHover = false",
        :class="isHover ? 'trigger' : 'swing'"
      )
    img.open-effect(v-if="scene === 'open-pack'" src="../assets/images/effect.svg")
    .open-pack(v-if="scene === 'open-pack'" )
      img.open-pack__picture(
        src="../assets/images/open_pack.png",
        alt="",
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
		const handleScroll = () => {
			scrolled.value = window.pageYOffset * 0.5 // Изменяем значение scrolled при прокрутке
		}

		const handleResize = () => {
			screenWidth.value = window.innerWidth // Обновляем screenWidth при изменении размеров окна
		}

		onMounted(() => {
			// Добавляем обработчики событий при монтировании компонента
			window.addEventListener('scroll', handleScroll)
			window.addEventListener('resize', handleResize)
		})

		onUnmounted(() => {
			// Удаляем обработчики событий при демонтировании компонента
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleResize)
		})

		// Анимация с использованием GSAP
		gsap.to(scrolled, {
			value: window.pageYOffset * 0.5, // Анимируем значение scrolled при прокрутке
			ease: 'none',
			onUpdate: () => {
				// Обновляем значение scrolled при каждом обновлении анимации
				scrolled.value = scrolled.value
			},
		})

		gsap.to(window, {
			scrollTo: { y: scrolled }, // Анимируем прокрутку страницы к значению scrolled
			ease: 'power2.inOut', // Используем плавное ускорение для более плавного скролла
			onUpdate: () => {
				// Обновляем значение scrolled при каждом обновлении анимации
				scrolled.value = window.pageYOffset
			},
		})



		return {
			screenWidth,
			scrolled,
			resizeble,
			resizeLogo,
      scene
		}
	},
}
</script>

<style lang="scss" scoped>
$feature: max-width;
.welcome-section {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: sticky;
	padding: 63px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #df231d;
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
			z-index: 1;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			height: 1454.19px;
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
					left: 35%;
					top: -2rem;
					animation: swing 0.9s infinite alternate;
				}
			}
			.pack-picture {
				z-index: 5;
				position: absolute;
        bottom: -20px;
			}
			span {
				font-size: 30px;
				position: absolute;
				top: 20%;
				left: 35%;
				color: rgb(223, 35, 29);
				font-weight: 600;
				font-family: 'Montserrat', sans-serif;
			}
		}
    .open-effect {
      z-index: 10000;
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
      z-index: 500000;
      &__picture {
        position: relative;
        transition: all .3s ease;
        animation: visible .3 forwards;
        z-index: 500000;
      }
    }
		@media screen and ($feature: 500px) {
			.logo {
				width: 100px;
				height: 50px;
			}
		}
		@media screen and ($feature: 1400px) {
			.logo {
				widows: 1000;
				height: 490px;
			}
		}
	}
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
