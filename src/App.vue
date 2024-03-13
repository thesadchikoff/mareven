<template lang="pug">
WelcomeSection
HistorySection
WarmMoments

</template>

<script>
import HistorySection from './components/HistorySection.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import WarmMoments from "./components/WarmMoments.vue";

export default {
	name: 'App',
	components: {
    WarmMoments,
		WelcomeSection,
		HistorySection,
	},
}
</script>
