<template>
	<div>
		<teleport to="body">
			<div class="modal-wrapper" @click="close">
				<div
					@click.stop
					class="bg-white mobile:overflow-y-auto tablet:overflow-y-hidden flex flex-col tablet:px-10 mobile:w-full mobile:rounded-none tablet:rounded-2xl tablet:container mobile:h-full tablet:h-[500px] animate-fade-up animate-duration-[400ms] animate-delay-100 p-10 rounded-3xl"
				>
					<div class="flex items-center justify-end w-full h-max">
						<base-icon
							name="close_button"
							@click="close"
							size="57"
							color="#57A03C"
							class="cursor-pointer"
						/>
					</div>
					<div class="relative flex flex-1 mobile:flex-col tablet:flex-row">
						<div class="flex flex-col gap-5 mobile:w-full tablet:w-2/3">
							<div
								class="flex tablet:items-center tablet:justify-between mobile:flex-col tablet:flex-row"
							>
								<span class="text-[#FBD927] text-[100px] font-bold">{{
									$props.item.year
								}}</span>
								<base-icon
									name="right_row"
									size="150"
									fill="#FBD927"
									color="#FBD927"
									class="mobile:hidden tablet:block"
								/>
								<span class="text-[40px] font-sans w-[300px]">{{
									$props.item.description
								}}</span>
							</div>
							<div class="bg-row w-full h-[10px]" />
							<div class="flex flex-col w-full gap-5">
								<p>
									«Роллтон» – это любимые продукты миллионов потребителей.
									А всё потому, что вкус и качество ароматной кудрявой лапши
									и неповторимого нежного пюре остаются неизменными
									на протяжении более, чем 20 лет.
								</p>
								<p>
									«Роллтон» объединяет всех, независимо от пола и возраста,
									и всегда выручает горячим обедом! Где бы вас не настиг голод:
									на работе, в поездке или дома, ваш сытный перекус — всегда
									под рукой.
								</p>
							</div>
						</div>
						<div
							class="relative h-full mobile:mt-10 desktop:mt-0 mobile:w-full tablet:w-1/3"
							:style="{
								backgroundImage: `url(${item.url})`,
								backgroundPosition: 'center',
								backgroundSize: 'contain',
								backgroundRepeat: 'no-repeat',
								transform: 'rotate(13deg)',
							}"
						>
							<img
								class="absolute -left-16 -top-10"
								src="../assets/images/salad.png"
								alt=""
							/>
							<img
								class="absolute right-0 bottom-4"
								src="../assets/images/tomato.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</teleport>
	</div>
</template>

<script>
import { ref, watch } from 'vue'
import BaseIcon from './ui/BaseIcon.vue'

export default {
	name: 'ModalView',
	components: { BaseIcon },
	emits: ['close'],
	props: {
		show: Boolean,
		item: Object,
	},
	methods: {
		closeModal() {
			this.showModal = false
		},
	},
	setup(props, { emit }) {
		console.log(props.item)
		const show = ref(props.show)
		watch(
			() => props.show,
			newValue => {
				show.value = newValue
			}
		)
		const close = () => {
			emit('close')
		}
		return {
			show,
			close,
		}
	},
}
</script>

<style>
.modal-wrapper {
	position: fixed;
	top: 0;
	z-index: 9000000;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgb(87, 160, 60, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
}

.bg-row {
	background-image: url('../assets/images/section_separator.svg');
	background-size: cover;
}
</style>
