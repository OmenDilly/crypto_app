<template>
	<div class="nav__container">
		<div class="logo">
			Кошелек
		</div>
		<div class="links">
			<select name="choice">
				<option value="first">First Value</option>
				<option value="second" selected>Second Value</option>
				<option value="third">Third Value</option>
			</select>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang='sass'>
	.nav__container
		background-color: $backgroundPrimary
		display: grid
		align-items: center
		grid-template-columns: repeat(2, 1fr)
		padding: 0 50px
		height: 50px
		font-weight: 600

		.links
			display: grid
			justify-self: end
			grid-template-columns: repeat(2, 1fr)
			gap: 20px
			align-items: center
			justify-items: center
			.active
				color: $primary
			.menu__item
				text-decoration: none
				transition: all .2s
				color: $fontPrimary
				&:hover
					color: $primary
</style>