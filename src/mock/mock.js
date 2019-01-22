import Mock from 'mockjs'

Mock.mock('/hot_list', {
	"code": 0,
	"result": ["区块链", "小程序", "vue", "毕业", "PHP", "故事", "flutter", "理财", "美食", "投稿", "手帐", "书法", "PPT", "穿搭", "打碗碗花", "简书", "姥姥的澎湖湾", "设计", "创业", "交友", "籽盐", "教育", "思维导图", "疯哥哥", "梅西", "时间管理", "golang", "连载", "自律", "职场", "考研", "慢世人", "悦欣", "一纸vr", "spring", "eos", "足球", "程序员", "林露含", "彩铅", "金融", "木风杂谈", "日更", "成长", "外婆是方言", "docker"]
})

Mock.mock('/articles_list', {
	"code": 0,
	"result": [{
		"link": "/1",
		"id": 1,
		"title": "要想不受人欺，一定要学学王阳明！",
		"desc": "守正出奇。 这四个字被商界的许多企业家挂在办公室的墙上，奉为自己经商的圭臬，期许自己能够达到阴阳交融、机变如神的境界。 但实际上呢，大多数人都是...",
		"cover": "//upload-images.jianshu.io/upload_images/8742036-12f0db5438630777?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
	}, {
		"link": "/2",
		"id": 2,
		"title": "过来人提醒男人：无论是否结婚，都别去“撩”四十岁左右的女人",
		"desc": "01. 很多人以为女人过了四十岁就开始掉价了，很难再吸引到更优秀的男人。但其实在生活中，常常会看到身边有很多女人，虽然不再年轻，可是却依然充满魅...",
		"cover": "//upload-images.jianshu.io/upload_images/15524861-6f29e6cdb4cad842?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
	}, {
		"link": "/3",
		"id": 3,
		"title": "长相知道你累世修行如何？",
		"desc": "累世修行如何，看你的长相就知道了 我们都知道，道是很难琢磨的，主要要靠自己去悟，但是悟并不容易，所以才有了各种修道的方法，比如山医命卜相。 山医...",
		"cover": ""
	}, {
		"link": "/4",
		"id": 4,
		"title": "请活下去",
		"desc": "文/熊ʕ•ᴥ•ʔ 即使再吵再闹，我活下去的唯一理由，就是为了生我养我的父母。 在痛苦也要继续活下去… 请微笑着活下去。 对，这是我，我不怕别人知...",
		"cover": "//upload-images.jianshu.io/upload_images/14780814-dac72d6b9b982b04.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
	}, {
		"link": "/5",
		"id": 5,
		"title": "“老公，再不回家，我锁门了”四位男士看到信息，个个回复真绝呀",
		"desc": "解析情感案例，传递生活正能量，发现世间真善美。我是白苏，我在这里等你。 上学时住过校的都应该知道，学校宿舍里一到时间就会落锁，不知道大家有没有在...",
		"cover": "//upload-images.jianshu.io/upload_images/13860577-93735c574313d5fa?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
	}]
})