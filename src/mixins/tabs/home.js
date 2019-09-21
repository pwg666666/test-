import wepy from 'wepy'
export default class Home extends wepy.mixin {
  data = {
    swiperList: [],
    cateItem: [],
    floorList: []
  }

  onLoad() {
    this.getSwipeData()
    this.getCateItem()
    this.getFloorList()
  }

  // 点击图片编程式导航到商品列表页面
  methods = {
    goGoods(url) {
      wx.navigateTo({
        url: url
      })
    }
  }
  // 获取楼层区域数据
  async getFloorList() {
    const {
      data: res
    } = await wepy.get('/home/floordata')
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.floorList = res.message
    // 强制监听页面变化并赋值
    this.$apply()
    console.log(this.floorList)
  }

  // 获取分类商品数据
  async getCateItem() {
    const {
      data: res
    } = await wepy.get('/home/catitems')
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.cateItem = res.message
    // 强制监听页面变化并赋值
    this.$apply()
  }

  // 获取轮播图数据
  async getSwipeData() {
    const {
      data: res
    } = await wepy.get('/home/swiperdata')
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.swiperList = res.message
    // 强制监听页面变化并赋值
    this.$apply()
  }
}
