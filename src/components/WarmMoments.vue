<script setup>
import PlanetView from './ui/PlanetView.vue'
</script>

<template>
	<div class="w-full mobile:h-full py-10 tablet:h-screen bg-[#FBD927] flex">
		<div
			class="container flex justify-between md-auto mobile:flex-col tablet:flex-row"
		>
			<div class="mobile:w-full tablet:w-1/2 flex flex-col gap-[90px]">
				<h2
					class="uppercase text-[#DF231D] mobile:text-[40px] tablet:text-[50px] font-bold"
				>
					Теплые моменты с Роллтон
				</h2>
				<div class="flex flex-col gap-[20px]">
					<h1
						class="text-[#57A03C] mobile:text-[50px] tablet:text-[80px] font-bold uppercase"
					>
						Продали <br />
						2 млн км лапши
					</h1>
					<span class="font-medium text-[29px]"
						>что равно 50-ти обхватам <br />
						Земли</span
					>
				</div>
			</div>
			<div
				class="relative flex mobile:w-full tablet:w-1/2 mobile:justify-center mobile:items-center"
			>
				<!--      <img src="../assets/images/planet.png" alt="" class="mobile:relative mobile:-left-10">-->
				<planet-view />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
