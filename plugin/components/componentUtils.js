/**
 * 颜色16进制+透明度
 * @param sHex 十六进制色值
 * @param alpha 为rgba的透明度
 * @returns { string } 返回带透明度的颜色
 */
export function colorRgba(sHex, alpha) {
  // 十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  let sColor = sHex.toLowerCase();
  if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
          let sColorNew = '#';
          for (let i = 1; i < 4; i += 1) {
              sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }
          sColor = sColorNew;
      }
      alpha = alpha % 256;
      alpha = alpha.toString(16);
      if(alpha.length == 1){
          alpha = `0${alpha}`;
      }
      return sColor.slice(0,7) + alpha;
  } else {
      return sColor;
  }
}