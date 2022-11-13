// 以下是postcss v8的写法：

function pxtorpx(data) {
  const transformData = Number(data.slice(0, -2));

  return `${transformData}rpx`;
}


const plugin = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-plugin-px2rpx',
    Once(root, { result }) {
      // console.log('----------johnhomLogDebug root', root);
    },
    AtRule: {
      media: atRule => {
        // console.log('----------johnhomLogDebug atRule', atRule);
      }
    },
    // 这个declaration匹配到css的样式
    /**
     * decl.prop:  拿到css的属性，例如margin-top
     * decl.value: 拿到css的属性值，例如10px
     */
    Declaration(decl) {
      if (/\d+px/g.test(decl.value)) {
        const targetText = pxtorpx(decl.value);
        
        // 这里把转换之后的值赋值给value即可修改原有的值
        decl.value = targetText;
      }
    }
  }
}


plugin.postcss = true;

module.exports = plugin;
