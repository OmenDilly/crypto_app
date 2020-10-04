<template>
	<div class="filter__window">
		<h4>Фильтры</h4>
		<div class="filter__container">
			<span class="filter__item">
				<span>Символ:</span>
				<select name="choice" v-model="selected">
					<option v-for="(symbol, index) in symbols" :key="index">{{symbol}}</option>
				</select>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		symbols: [
			'BTCUSDT',
			'BNBBTC',
			'ETHBTC'
		],
		selected: 'BNBBTC'
	}),
	watch: {
		selected() {

		}
	}
}
</script>

<style lang='sass'>
	.filter__window
		background-color: $backgroundPrimary
		border-radius: $radius
		box-shadow: $shadow
		padding: 20px
		display: grid
		grid-template-rows: repeat(auto-fit, 50px)
</style>