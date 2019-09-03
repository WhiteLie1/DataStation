Component({
	data: {
		active: 0,
		list: [
			{
				icon: {
					normal: '/icons/outline_home_black_48dp.png',
					active: '/icons/baseline_home_black_48dp.png'
				},
				url: '/pages/index/index',
				// text: '首页'
			},
			{
				icon: {
					normal: '/icons/outline_category_black_48dp.png',
					active: '/icons/baseline_category_black_48dp.png'
				},
				url: '/pages/classify/classify',
				// text: '分类'
			},
			{
				icon: {
					normal: '/icons/outline_build_black_48dp.png',
					active: '/icons/baseline_build_black_48dp.png'
				},
				url: '/pages/custom-product/custom-product',
				// text: '定制'
			},
			{
				icon: {
					normal: '/icons/outline_shopping_cart_black_48dp.png',
					active: '/icons/baseline_shopping_cart_black_48dp.png'
				},
				url: '/pages/cart/cart',
			},
			{
				icon: {
					normal: '/icons/outline_person_black_48dp.png',
					active: '/icons/baseline_person_black_48dp.png'
				},
				url: '/pages/my/my',
				// text: '我的'
			}			
			// {
			// 	icon: {
			// 		normal: '/resources/icon/outline_question_answer_black_48dp.png',
			// 		active: '/resources/icon/baseline_question_answer_black_48dp.png'
			// 	},
			// 	url: '/pages/community/community'
			// },
			
			// {
			// 	icon: {
			// 		normal: '/resources/icon/outline_shopping_cart_black_48dp.png',
			// 		active: '/resources/icon/baseline_shopping_cart_black_48dp.png'
			// 	},
			// 	url: '/pages/cart/cart'
			// },

		]
	},

	methods: {
		onChange(event) {
			wx.switchTab({
				url: this.data.list[event.detail].url
			})
		}
	}
});
