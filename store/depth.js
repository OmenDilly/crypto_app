export const state = () => ({
	depth: []
})

export const mutations = {
	setDepth(state, depth) {
		state.depth = depth
	}
}

export const actions = {
	async fetch({commit}) {
		const depth = await fetch('https://binance.com/api/v3/depth?symbol=BNBBTC')
		const parsed = await depth.json()
		commit('setDepth', parsed)
	}
}

export const getters = {
	depth: state => state.depth
}