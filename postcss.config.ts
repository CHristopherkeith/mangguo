export default {
  unitToConvert: 'px', // 需要转换的单位，默认为"px"
  viewportWidth: 375, // 设计稿的视口宽度，一般是 750（对应 750px 设计稿）
  unitPrecision: 5, // 单位转换后保留的小数位数
  propList: ['*'], // 需要转换的属性列表，* 表示所有属性
  viewportUnit: 'vw', // 转换后的视口单位
  fontViewportUnit: 'vw', // 字体使用的视口单位
  selectorBlackList: [], // 不需要转换的选择器，保留为 px
  minPixelValue: 1, // 最小的转换数值，小于等于该值的 px 不转换
  mediaQuery: false, // 是否在媒体查询中转换 px
  replace: true, // 是否直接替换值而不添加备用单位
  exclude: undefined, // 忽略某些文件或文件夹，可以使用正则表达式
  include: undefined, // 包括某些文件或文件夹，可以使用正则表达式
  landscape: false, // 是否处理横屏情况
  landscapeUnit: 'vw', // 横屏时使用的单位
  landscapeWidth: 1334, // 横屏时的视口宽度
}
