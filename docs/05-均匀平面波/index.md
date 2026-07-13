# 第5章 均匀平面波

## 课件下载
[📄 13均匀平面波1-理想介质中的传播](../课程资料/13均匀平面波1-理想介质中的传播.pdf)
[📄 14均匀平面波2-导电媒质中的传播](../课程资料/14均匀平面波2-导电媒质中的传播.pdf)
[📄 15均匀平面波3-电磁波的极化](../课程资料/15均匀平面波3-电磁波的极化.pdf)

## 课程内容

### 5.1 均匀平面波在理想介质中的传播

均匀平面波是最基本的电磁波形式，等相位面和等振幅面均为平面且重合。

**亥姆霍兹方程的解：**

设波沿 $+z$ 方向传播，电场仅有 $x$ 分量：

$$\dot{E}_x(z) = \dot{E}_0^+ e^{-jkz} + \dot{E}_0^- e^{+jkz}$$

时域形式：$E_x(z, t) = E_0^+\cos(\omega t - kz + \phi^+) + E_0^-\cos(\omega t + kz + \phi^-)$

第一项为 $+z$ 方向行波，第二项为 $-z$ 方向行波。

**传播常数：** 理想介质中 $k = \omega\sqrt{\mu\varepsilon}$ 为实数，无衰减。

**波阻抗（本征阻抗）：**

$$\eta = \frac{E_x}{H_y} = \sqrt{\frac{\mu}{\varepsilon}}$$

真空中：$\eta_0 = \sqrt{\frac{\mu_0}{\varepsilon_0}} \approx 120\pi \approx 377\,\Omega$

**相速度与波长：**

$$v_p = \frac{\omega}{k} = \frac{1}{\sqrt{\mu\varepsilon}},\quad \lambda = \frac{2\pi}{k} = \frac{v_p}{f}$$

**TEM 波特性：** $\mathbf{E} \perp \mathbf{k}$，$\mathbf{H} \perp \mathbf{k}$，$\mathbf{E} \perp \mathbf{H}$，$\hat{\mathbf{k}} = \frac{\mathbf{E} \times \mathbf{H}}{|\mathbf{E} \times \mathbf{H}|}$

### 5.2 均匀平面波在导电媒质中的传播

导电媒质（$\sigma \neq 0$）中传播常数为复数：

$$\gamma = \alpha + j\beta = j\omega\sqrt{\mu\varepsilon_c},\quad \varepsilon_c = \varepsilon - j\frac{\sigma}{\omega}$$

**衰减常数与相位常数：**

$$\alpha = \omega\sqrt{\frac{\mu\varepsilon}{2}\left[\sqrt{1 + \left(\frac{\sigma}{\omega\varepsilon}\right)^2} - 1\right]}$$

$$\beta = \omega\sqrt{\frac{\mu\varepsilon}{2}\left[\sqrt{1 + \left(\frac{\sigma}{\omega\varepsilon}\right)^2} + 1\right]}$$

**趋肤深度（穿透深度）：**

$$\delta = \frac{1}{\alpha}$$

场强衰减到表面值 $1/e$ 时的深度。频率越高，趋肤深度越小。

**良导体近似（$\sigma \gg \omega\varepsilon$）：**

$$\alpha \approx \beta \approx \sqrt{\frac{\omega\mu\sigma}{2}} = \sqrt{\pi f\mu\sigma}$$

$$\delta = \frac{1}{\sqrt{\pi f\mu\sigma}}$$

波阻抗：$\eta_c = (1 + j)\sqrt{\frac{\omega\mu}{2\sigma}} = (1 + j)\frac{1}{\sigma\delta}$

良导体中磁场相位滞后电场 $45^\circ$，相速度远小于光速。

### 5.3 电磁波的极化

极化描述电场矢量端点随时间变化的轨迹。

设沿 $+z$ 传播的均匀平面波电场：

$$\mathbf{E}(z, t) = \hat{\mathbf{x}}E_x\cos(\omega t - kz + \phi_x) + \hat{\mathbf{y}}E_y\cos(\omega t - kz + \phi_y)$$

**线极化：** $\Delta\phi = \phi_y - \phi_x = 0$ 或 $\pi$

电场矢量沿直线振动，方向由 $E_x/E_y$ 决定。

**圆极化：** $E_x = E_y$ 且 $\Delta\phi = \pm \pi/2$
- $\Delta\phi = +\pi/2$：右旋圆极化（RCP）
- $\Delta\phi = -\pi/2$：左旋圆极化（LCP）

**椭圆极化（一般情况）：** $E_x \neq E_y$ 或 $\Delta\phi \neq 0, \pm\pi/2, \pi$

椭圆参数：
- 轴比（AR）：$AR = E_{\max}/E_{\min}$
- 倾角 $\tau$：$\tan 2\tau = \frac{2E_x E_y\cos\Delta\phi}{E_x^2 - E_y^2}$

**工程应用：**
- 圆极化天线可接收任意方向的线极化波（极化失配 3dB 损失）
- 线极化天线接收正交极化波时完全失配（极化隔离）
- 极化分集可增加通信信道容量

---

[← 上一章: 第4章 时变电磁场](../04-时变电磁场/index.md)
[← 返回首页](../index.md)
[→ 下一章: 第6章 均匀平面波的反射与透射](../06-均匀平面波的反射与透射/index.md)
