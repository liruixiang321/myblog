# 🖋每周总结

## 第一周

### 换炉

![高炉置换!](../public/weeks/图片1.png "高炉置换题目")
预定条件：在生产高炉数量固定，正在生产高炉数量为7，也可能是6 或者是5（原始总数是7），每座高炉对应的煤气值小于 标准值（比如1#是90000）且持续8分钟认为是正在换炉.

注：每座高炉每分钟采集数据得到对应的煤气值和是否停机信号，停机的不参与计算。
需要判断违规情况：

例如在运行高炉6炉情况下，有3炉 持续时间大于等于10分钟 则认为违规
有4炉 同时持续时间大于等于1分钟 则也认为违规。
在运行高炉为7炉情况下，另有上述类似的规则。

问题1：需要得到 不定数量高炉（参数不定即可配置）下 得到当前时间的高炉违规情况和信息

问题2：得到 一段时间内 高炉运行的 违规历史记录。

写一写 算法步骤（包括参数设定等情况）

```javascript
// 一共有m个高炉
// 假设当前正在运行的高炉数量为running，有replacing个正在置换，且到目前为止持续了n分钟，判断当前是否违规
// 问题1：需要得到 不定数量高炉（参数不定即可配置）下 得到当前时间的高炉违规情况和信息

function panduan(now) {
  let running = 0;
  let replacing = 0;
  let gaolu = []; //记录每个高炉的持续时间
  let public = infinity; //多炉同时运行的时间
  for (let i = 0; i < m; i++) {
    if (第i个高炉不停机) {
      let n = 0; //这个高炉的持续时间
      running++;
      // 从当前时间向前回溯
      while (回溯时间收集到的煤气小于标准值) {
        n++;
        now--;
      }
      gaolu.push(n);
    }
  }
  let res = true;
  for (let item of gaolu) {
    if (item > 0) {
      replacing++;
      if (public > item) {
        public = item;
      }
    }
  }
  if (replacing > Math.floor(running / 2)) {
      res = public>=1 ? false : true;
    }
  } else if (replacing === Math.floor(running / 2)) {
     res = public>=10 ? false : true;
  }
  return res;
}
// 得到 一段时间内 高炉运行的 违规历史记录。
function all(start, end) {
  let res = [];
  let s = new Date(start).getMinutes();
  let e = new Date(end).getMinutes();
  while (s <= e) {
    if (!panduan(s)) {
      res.push(s);
    }
    s++;
  }
  let result = [{'start':res[0],'end':res[0]}];
  for(let i=1;i<res.length;i++){
    if(res[i]-res[i-1]===1){  //如果相邻，进行合并
    result[result.length-1].end = res[i];
  } else {   //如果不相邻，则重新开启一个时间段
    result.push({'start':res[i],'end':res[i]})
}
}        
  return res;
}
```
