<script setup>
import HeartView from './ui/HeartView.vue'
</script>

<template>
	<div class="w-full h-screen bg-[#FFFBDE] flex">
		<div
			class="container flex items-center gap-[63px] mobile:flex-col desktop:flex-row"
		>
			<div>
				<HeartView />
			</div>
			<div class="flex-1 mobile:text-center desktop:text-start">
				<h1
					class="uppercase mobile:text-[55px] tablet:text-[80px] font-bold text-[#57A03C]"
				>
					На помощь деткам
				</h1>
				<span class="text-[29px] font-medium">пожертвования детским домам</span>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
