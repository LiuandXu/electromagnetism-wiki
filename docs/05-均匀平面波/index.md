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

## 例题与习题

### 例题 5.1
**题目：** 在无界理想均匀介质中，已知平面波的电场表达式为：

$$\mathbf{E} = \left(\hat{\mathbf{x}} + E_y\hat{\mathbf{y}} + \sqrt{5}\,\hat{\mathbf{z}}\right)\cos(\omega t + 3x - y - 2z + \tfrac{\pi}{2}) \quad (\text{V/m})$$

求 $E_y$。

**解：**

由相位项 $\omega t + 3x - y - 2z$ 可知，波矢量为：

$$\boldsymbol{\beta} = -3\hat{\mathbf{x}} + \hat{\mathbf{y}} + 2\hat{\mathbf{z}}$$

根据理想介质中均匀平面波的电场与传播方向垂直的条件 $\mathbf{E} \cdot \boldsymbol{\beta} = 0$：

$$(-3)(1) + (1)(E_y) + (2)(\sqrt{5}) = 0$$

$$E_y = 3 - 2\sqrt{5}$$

### 例题 5.2
**题目：** 海水的电磁参数为 $\varepsilon_r = 81$，$\mu_r = 1$，$\sigma = 4$（S/m）。对于频率为 $f_1 = 3\,\text{kHz}$ 和 $f_2 = 30\,\text{MHz}$ 的两种电磁波，求电场强度由 $1\,\text{V/m}$ 衰减到 $1\,\mu\text{V/m}$ 的传播距离 $l$。哪种波更适合用于潜艇水下通信？

**解：**

先判断海水是否为良导体。对 $f_1 = 3\,\text{kHz}$：

$$\frac{\sigma}{\omega\varepsilon} = \frac{4}{2\pi\times3000\times81\times8.854\times10^{-12}} \approx 2.95\times10^5 \gg 1$$

海水在两种频率下均为良导体，衰减常数近似为：

$$\alpha \approx \sqrt{\pi f\mu\sigma}$$

**(1) $f_1 = 3\,\text{kHz}$ 时：**

$$\alpha_1 = \sqrt{\pi\times3000\times4\pi\times10^{-7}\times4} \approx 0.218 \;\text{Np/m}$$

电场衰减比 $|E/E_0| = 10^{-6}$，故：

$$l_1 = \frac{1}{\alpha_1}\ln(10^6) = \frac{6\ln 10}{0.218} \approx 63.4 \;\text{m}$$

**(2) $f_2 = 30\,\text{MHz}$ 时：**

$$\alpha_2 = \sqrt{\pi\times30\times10^6\times4\pi\times10^{-7}\times4} \approx 21.8 \;\text{Np/m}$$

$$l_2 = \frac{6\ln 10}{21.8} \approx 0.634 \;\text{m}$$

**结论：** $f_1 = 3\,\text{kHz}$ 时衰减距离为 63.4 m，$f_2 = 30\,\text{MHz}$ 时仅为 0.634 m。低频波衰减远小于高频波，因此 $3\,\text{kHz}$ 更适合用于潜艇水下通信。

### 例题 5.3
**题目：** 判断下列电磁波的极化类型：

$$\mathbf{E} = \hat{\mathbf{x}}\,E_0\cos(\omega t + \beta z) - \hat{\mathbf{y}}\,E_0\cos(\omega t + \beta z)$$

**解：**

电场的两个分量为：

$$E_x = E_0\cos(\omega t + \beta z)$$

$$E_y = -E_0\cos(\omega t + \beta z) = E_0\cos(\omega t + \beta z + \pi)$$

两分量的相位差为 $\Delta\varphi = \pi$。

当两个正交分量的相位差为 $0$ 或 $\pi$ 时，合成波为**线极化波**。

合成电场方向为 $\hat{\mathbf{x}} - \hat{\mathbf{y}}$ 方向（与 $x$ 轴成 $-45°$），电场大小随时间变化但方向不变，因此该电磁波为**线极化波**。

---

[← 上一章: 第4章 时变电磁场](../04-时变电磁场/index.md)
[← 返回首页](../index.md)
[→ 下一章: 第6章 均匀平面波的反射与透射](../06-均匀平面波的反射与透射/index.md)
