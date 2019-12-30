var vm = new Vue({
  el: '#LG',
  data: {
    // 顶部左侧信息
    message: [{
        name: '首页',
        href: 'homepage.html'
      },
      {
        name: '产品',
        href: ''
      },
      {
        name: '资源',
        href: ''
      }
    ],
    leftselectes: [{
        name: '前端学习资料',
        urlName: 'http://baidu.com',
      },
      {
        name: '后端学习资料',
        urlName: 'http://baidu.com',
      },
      {
        name: '随身笔记',
        urlName: 'http://baidu.com',
      },
    ],
    // 顶部右侧信息
    rightselectes: [{
        name: '账号管理',
        urlName: 'http://baidu.com',
      },
      {
        name: '个人首页',
        urlName: 'http://baidu.com',
      },
      {
        name: '浏览记录',
        urlName: 'http://baidu.com',
      },
    ],
    // 右侧搜索
    breadcrumb: [{
        name: '已关注',
        href: '',
        klass: ''
      },
      {
        name: '未关注',
        href: '',
        klass: ''
      },
      {
        name: '查找',
        href: '',
        klass: 'lookup'
      },
    ],
    // 手风琴
    accordion: [{
      name: '数据',
      url: '../es6-main.html',
    }],
    // 中间内容
    mainNav: ['主页', '关于', '联系我们'],
    jumbotron: [{
      head: '欢迎来到博客网站',
      texts: '请未注册的游客注册账号，已有账号的游客请先登陆。',
    }, ],
    marketing: [{
        title: '纳米学位：机器学习进阶',
        texts: '此教程由gymrat投稿 纳米学位：机器学习进阶',
      },
      {
        title: '小象大数据视频教程',
        texts: '小象大数据视频教程',
      },
      {
        title: '私塾java软件架构师教程阶段二',
        texts: '私塾java软件架构师教程阶段二',
      },
      {
        title: 'Python3.5-零基础-高级-项目实战最新教程',
        texts: 'Python3.5-零基础-高级-项目实战最新教程 ',
      },
      {
        title: '2018年达内web开发视频教程',
        texts: '2018年达内web开发视频教程',
      },
      {
        title: 'Spark 2.0入门+项目实战',
        texts: 'Spark 2.0入门+项目实战',
      },
    ],
    tableThead: ['编号', '产品', '交付时间', '状态'],
    tbodyTr: [{
        kclass: '',
        num: 1,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Default'
      },
      {
        kclass: 'success',
        num: 2,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Approved'
      },
      {
        kclass: 'error',
        num: 3,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Declined'
      },
      {
        kclass: 'warning',
        num: 4,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Pending'
      },
      {
        kclass: 'info',
        num: 5,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Call in to confirm'
      },
      {
        kclass: '',
        num: 1,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Default'
      }, {
        kclass: 'success',
        num: 2,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Approved'
      }, {
        kclass: 'error',
        num: 3,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Declined'
      }, {
        kclass: 'warning',
        num: 4,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Pending'
      }, {
        kclass: 'info',
        num: 5,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Call in to confirm'
      },
      {
        kclass: '',
        num: 1,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Default'
      }, {
        kclass: 'success',
        num: 2,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Approved'
      }, {
        kclass: 'error',
        num: 3,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Declined'
      }, {
        kclass: 'warning',
        num: 4,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Pending'
      }, {
        kclass: 'info',
        num: 5,
        product: 'TB - Monthly',
        time: '01/04/2012',
        title: 'Call in to confirm'
      },
    ],
    // 右侧广告
    sowingmap: [{
        imgurl: 'img/1.jpg',
        htext: '棒球',
        title: '棒球运动是一种以棒打球为主要特点，集体性、对抗性很强的球类运动项目，在美国、日本尤为盛行。'
      },
      {
        imgurl: 'img/2.jpg',
        htext: '冲浪',
        title: '冲浪是以海浪为动力，利用自身的高超技巧和平衡能力，搏击海浪的一项运动。运动员站立在冲浪板上，或利用腹板、跪板、充气的橡皮垫、划艇、皮艇等驾驭海浪的一项水上运动。'
      },
      {
        imgurl: 'img/3.jpg',
        htext: '自行车',
        title: '以自行车为工具比赛骑行速度的体育运动。1896年第一届奥林匹克运动会上被列为正式比赛项目。环法赛为最著名的世界自行车锦标赛。'
      },
    ],
    advertisementUL: ['新闻资讯', '体育竞技', '娱乐八卦', '前沿科技', '环球财经', '天气预报', '房产家居', '网络游戏'],
    advertisementDL: [{
        head: 'Rolex',
        title: '劳力士创始人为汉斯.威尔斯多夫，1908年他在瑞士将劳力士注册为商标。'
      },
      {
        head: 'Vacheron Constantin',
        title: '始创于1775年的江诗丹顿已有250年历史，是世界上历史最悠久、延续时间最长的名表之一。'
      },
      {
        head: 'IWC',
        title: '创立于1868年的万国表有“机械表专家”之称。'
      },
      {
        head: 'Cartier',
        title: '卡地亚拥有150多年历史，是法国珠宝金银首饰的制造名家。'
      },
    ],
  },
  methods: {
    leftgetsrc: function (url) {
      $("iframe").src(url);
    }
  },
});
