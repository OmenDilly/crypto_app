<template>
	<div class="diff__stream__window">
		<div class="diff__container">
			hello
		</div>
	</div>
</template>

<script>
export default {
	mounted() {

	}
}
</script>

<style lang='sass'>
	.diff__stream__window
		background-color: $backgroundPrimary
		border-radius: $radius
		box-shadow: $shadow
		padding: 20px
		display: grid
		grid-template-rows: repeat(auto-fit, 50px)
</style>