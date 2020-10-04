export const state = () => ({
	depth: {},
	symbol: 'BNBBTC'
})

export const mutations = {
	setDepth(state, depth) {
		state.depth = depth
	}
}

export const actions = {
	async fetch({commit, state}) {
		const depth = await fetch(`https://binance.com/api/v3/depth?symbol=${state.symbol}`)
		const parsed = await depth.json()
		commit('setDepth', parsed)
	},
	connect({state}) {
		let conn = new WebSocket('wss://stream.binance.com:9443/ws/bnbbtc@depth')
		conn.onmessage = (e) => {
			let data = JSON.parse(e.data)
			if (data.u <= state.lastUpdateId) {
				return
			}
			if (data.U <= state.lastUpdateId + 1 && data.u >= state.lastUpdateId + 1) {
				console.log(data)
			}
		}
	}
}

export const getters = {
	depth: state => state.depth
}