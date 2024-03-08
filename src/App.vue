<template lang="pug">
WelcomeSection
HistorySection


</template>

<script>
import HistorySection from './components/HistorySection.vue'
import WelcomeSection from './components/WelcomeSection.vue'

export default {
	name: 'App',
	components: {
		WelcomeSection,
		HistorySection,
	},
}
</script>
