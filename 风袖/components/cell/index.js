Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cell: Object,
    x: Number,
    y: Number
  },
  observers: {
    'cell'(value) {
      console.log(value)
    }
  },
  
  /**
   * 组件的初始数据
   */
  data: {},
  
  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event) {
      console.log(this.properties)
      this.triggerEvent('celltap', {
        cell: this.properties.cell,
        x: this.properties.x,
        y: this.properties.y
      }, {bubbles: true, composed: true})
    }
  }
})
