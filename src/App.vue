<template lang="pug">
WelcomeSection
HistorySection
WarmMoments
SupportSection
AwardsSection
FooterItem

</template>

<script>
import HistorySection from './components/HistorySection.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import WarmMoments from "./components/WarmMoments.vue";
import SupportSection from "./components/SupportSection.vue";
import AwardsSection from "./components/AwardsSection.vue";
import FooterItem from "./components/FooterItem.vue";

export default {
	name: 'App',
	components: {
    FooterItem,
    AwardsSection,
    SupportSection,
    WarmMoments,
		WelcomeSection,
		HistorySection,
	},
}
</script>
