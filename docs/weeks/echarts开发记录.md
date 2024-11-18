---
updateTime: "2024-10-24 16:17:00"
desc: "react echarts项目遇到的一些问题和经验"
tags: "规范/优化/解决方案"
---

# 图表大屏项目

## 数据与 options 分离

封装 Echarts 组件,将 options 作为 props 进行暴露，封装 options 函数，将数据作为参数传入。

**业务图表组件**

```jsx
import EChartsCommon from "@/components/EChartsCommon";
import { xxxOptions } from "./options";
import useConfigStore from "@/store/index";

const xxxSituation = (props) => {
  const renderer = useConfigStore((state) => state.renderer);

  return (
    <div
      style={{
        width: "430px",
        height: "250px",
      }}
    >
      {props.xxxStatus ? (
        <EChartsCommon
          renderer={renderer}
          option={xxxOptions(props.xxxStatus)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default xxxSituation;
```

**通用 Echarts 组件**

1. 初始化图表：根据传入的 props 初始化 ECharts 实例，并设置初始选项。
2. 销毁图表：在组件卸载时销毁 ECharts 实例，释放资源。
3. 调整图表大小：监听窗口大小变化，自动调整图表大小。
4. 更新图表选项：当 props.option 发生变化时，更新图表的配置。

```jsx EChartsCommon.jsx
import { debounce } from 'lodash';
import { useCallback, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { EChartsType } from 'echarts';
import { RendererType } from 'echarts/types/src/util/types.js';
import china from '@/assets/map/china.json';
import { GeoJSONCompressed } from 'echarts/types/src/coord/geo/geoTypes.js';

type OptionType = {
  [T: string]: unknown
}

const state = {
  width: '100%',
  height: '100%',
};

echarts.registerMap('china', china as unknown as GeoJSONCompressed)

const EChartsCommon = (props: {
  renderer?: RendererType,
  notMerge?: boolean,
  lazyUpdate?: boolean,
  option: OptionType,
  instanceHandle?: (instance: EChartsType) => void
}) => {
  const drawDomRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<EChartsType | null>(null);

  const dispose = () => {
    if (!chartRef.current) {
      return;
    }
    chartRef.current.dispose();
    chartRef.current = null;
  };

  const resize = debounce(() => {
    chartRef.current && chartRef.current.resize();
  }, 100);


  const setOption = useCallback((option: OptionType) => {
    if (!chartRef.current) {
      return;
    }
    const notMerge = props.notMerge;
    const lazyUpdate = props.lazyUpdate;
    chartRef.current.setOption(option, notMerge, lazyUpdate);
  }, [props.notMerge, props.lazyUpdate]);


  // 初始化组件
  const initChart = (dom: HTMLDivElement | null) => {
    if (chartRef.current) return
    if (!dom) return
    // renderer 用于配置渲染方式 可以是 svg 或者 canvas
    const renderer = props.renderer || 'canvas';
    chartRef.current = echarts.init(dom, null, {
      renderer,
      width: 'auto',
      height: 'auto',
    });
    // 执行初始化的任务，例如注册地图
    if (props.instanceHandle) props.instanceHandle(chartRef.current)
    setOption(props.option);
    // 监听屏幕缩放，重新绘制 echart 图表
    window.addEventListener('resize', resize);
  }

  const initHandle = () => {
    // 还没实例走初始化
    if (!chartRef.current) {
      initChart(drawDomRef.current);
    } else {
      setOption(props.option);
    }
  }

  useEffect(() => {
    // 组件卸载
    return () => {
      window.removeEventListener('resize', resize);
      dispose()
    }
  }, [])

  // 每次更新组件都重置
  useEffect(() => {
    initHandle()
  }, [props.option])

  return (
    <div
      className='default-chart'
      ref={drawDomRef}
      style={{ width: state.width, height: state.height }}
    />
  )
}

export default EChartsCommon
```
