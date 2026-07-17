# 第5章 均匀平面波

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

!!! example "例题"

    **例题 5.1**
    **题目：** 在无界理想均匀介质中，已知平面波的电场表达式为：

    $$\mathbf{E} = \left(\hat{\mathbf{x}} + E_y\hat{\mathbf{y}} + \sqrt{5}\,\hat{\mathbf{z}}\right)\cos(\omega t + 3x - y - 2z + \tfrac{\pi}{2}) \quad (\text{V/m})$$

    求 $E_y$。

    **解：**

    由相位项 $\omega t + 3x - y - 2z$ 可知，波矢量为：

    $$\boldsymbol{\beta} = -3\hat{\mathbf{x}} + \hat{\mathbf{y}} + 2\hat{\mathbf{z}}$$

    根据理想介质中均匀平面波的电场与传播方向垂直的条件 $\mathbf{E} \cdot \boldsymbol{\beta} = 0$：

    $$(-3)(1) + (1)(E_y) + (2)(\sqrt{5}) = 0$$

    $$E_y = 3 - 2\sqrt{5}$$

!!! warning "真题"

    **真题 5.1（来源：2024秋季A卷）**
    **题目：** 已知均匀平面波在理想介质中传播，电场和磁场分别为：

    $$\mathbf{E} = \hat{\mathbf{x}}\,E_0 \cos(6\pi\times10^7\,t - 0.8\pi\,x) \quad (\text{V/m})$$

    $$\mathbf{H} = \hat{\mathbf{y}}\,\frac{E_0}{60\pi} \cos(6\pi\times10^7\,t - 0.8\pi\,x) \quad (\text{A/m})$$

    求该介质的相对磁导率 $\mu_r$ 和相对介电常数 $\varepsilon_r$。

    **解：**

    从电场表达式可知 $\omega = 6\pi\times10^7$ rad/s，$k = 0.8\pi$ rad/m，波的相速度为：

    $$v = \frac{\omega}{k} = \frac{6\pi\times10^7}{0.8\pi} = 7.5\times10^7 \;\text{m/s}$$

    由 $v = c / \sqrt{\mu_r\varepsilon_r}$：

    $$\sqrt{\mu_r\varepsilon_r} = \frac{c}{v} = \frac{3\times10^8}{7.5\times10^7} = 4 \quad \Longrightarrow \quad \mu_r\varepsilon_r = 16$$

    波阻抗为电场与磁场振幅之比：

    $$\eta = \frac{E_0}{H_0} = 60\pi \;\Omega$$

    由 $\eta = \eta_0\sqrt{\mu_r/\varepsilon_r} = 120\pi\sqrt{\mu_r/\varepsilon_r}$：

    $$\sqrt{\frac{\mu_r}{\varepsilon_r}} = \frac{60\pi}{120\pi} = \frac{1}{2} \quad \Longrightarrow \quad \frac{\mu_r}{\varepsilon_r} = \frac{1}{4}$$

    联立 $\mu_r\varepsilon_r = 16$ 和 $\mu_r/\varepsilon_r = 1/4$：

    $$\mu_r = 2,\qquad \varepsilon_r = 8$$

    **真题 5.2（来源：2024春季A卷）**
    **题目：** 频率为 $f = 100$ MHz 的均匀平面波在理想介质（$\varepsilon_r = 9$，$\mu_r = 1$）中沿 $+z$ 方向传播，电场的复数形式为 $\dot{\mathbf{E}} = E_0(\hat{\mathbf{x}} - j\hat{\mathbf{y}})\,e^{-jkz}$，且 $t = 0$、$z = 0$ 处电场值为 $10$ V/m。求该波的波数、波阻抗，并写出电场和磁场的瞬时表达式。

    **解：**

    由 $t=0$、$z=0$ 时 $E = 10$ V/m，得 $E_0 = 10$ V/m。

    **波数和波阻抗：**

    $$k = \omega\sqrt{\mu\varepsilon} = \frac{2\pi f}{c}\sqrt{\mu_r\varepsilon_r} = \frac{2\pi\times10^8}{3\times10^8}\times 3 = 2\pi \;\text{rad/m}$$

    $$\eta = \eta_0\sqrt{\frac{\mu_r}{\varepsilon_r}} = \frac{120\pi}{3} = 40\pi \;\Omega$$

    **电场瞬时表达式：**

    $$\mathbf{E}(z,t) = \text{Re}\!\left[E_0(\hat{\mathbf{x}} - j\hat{\mathbf{y}})\,e^{-jkz}\,e^{j\omega t}\right] = E_0\!\left[\hat{\mathbf{x}}\cos(\omega t - kz) + \hat{\mathbf{y}}\sin(\omega t - kz)\right]$$

    $$\mathbf{E}(z,t) = 10\!\left[\hat{\mathbf{x}}\cos(\omega t - 2\pi z) + \hat{\mathbf{y}}\sin(\omega t - 2\pi z)\right] \;\text{(V/m)}$$

    **磁场瞬时表达式：**

    $$\dot{\mathbf{H}} = \frac{1}{\eta}\,\hat{\mathbf{z}}\times\dot{\mathbf{E}} = \frac{E_0}{40\pi}(j\hat{\mathbf{x}} + \hat{\mathbf{y}})\,e^{-jkz}$$

    $$\mathbf{H}(z,t) = \frac{10}{40\pi}\!\left[-\hat{\mathbf{x}}\sin(\omega t - 2\pi z) + \hat{\mathbf{y}}\cos(\omega t - 2\pi z)\right] \;\text{(A/m)}$$

    该波为**右旋圆极化波**（$E_y$ 滞后 $E_x$ 为 $90°$）。

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

!!! example "例题"

    **例题 5.2**
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

!!! example "例题"

    **例题 5.3**
    **题目：** 判断下列电磁波的极化类型：

    $$\mathbf{E} = \hat{\mathbf{x}}\,E_0\cos(\omega t + \beta z) - \hat{\mathbf{y}}\,E_0\cos(\omega t + \beta z)$$

    **解：**

    电场的两个分量为：

    $$E_x = E_0\cos(\omega t + \beta z)$$

    $$E_y = -E_0\cos(\omega t + \beta z) = E_0\cos(\omega t + \beta z + \pi)$$

    两分量的相位差为 $\Delta\varphi = \pi$。

    当两个正交分量的相位差为 $0$ 或 $\pi$ 时，合成波为**线极化波**。

    合成电场方向为 $\hat{\mathbf{x}} - \hat{\mathbf{y}}$ 方向（与 $x$ 轴成 $-45°$），电场大小随时间变化但方向不变，因此该电磁波为**线极化波**。

!!! warning "真题"

    **真题 5.3（来源：2021秋季A卷 一、1）**
    **题目：** 在介电常数为 $\varepsilon$、磁导率为 $\mu$ 的媒质中，电磁波的相速度为？

    **答案：** $v = \dfrac{1}{\sqrt{\mu\varepsilon}} = \dfrac{c}{\sqrt{\varepsilon_r\mu_r}}$

!!! warning "真题"

    **真题 5.4（来源：2021秋季A卷 一、6）**
    **题目：** 真空中波阻抗为 $\eta_0$，一均匀平面波沿 $-z$ 方向传播，其电场沿 $+x$ 方向振动，振幅为 $E_0$，初始相位为零，其磁场的复数表示式为？

    **答案：** $\dot{\mathbf{H}} = -\dfrac{E_0}{\eta_0}e^{-j\beta z}\,\hat{\mathbf{y}}$

    （传播方向 $-z$，$\mathbf{E}\times\mathbf{H}$ 需指向 $-z$，故 $\mathbf{H}$ 沿 $-\hat{\mathbf{y}}$ 方向。）

!!! warning "真题"

    **真题 5.5（来源：2021秋季A卷 一、7）**
    **题目：** 均匀平面波是指等相位面为平面，且在等相位面上，电磁场矢量具有相同的\_\_\_。

    **答案：** 振幅和相位

!!! warning "真题"

    **真题 5.6（来源：2021秋季A卷 一、8）**
    **题目：** 角频率为 $\omega$ 的电场强度 $\mathbf{E}$ 的复数表示式为 $\dot{\mathbf{E}} = E_0\,e^{j\beta z}\,\hat{\mathbf{x}}$，其时域表示式为？

    **答案：** $\mathbf{E}(t) = E_0\cos(\omega t + \beta z)\,\hat{\mathbf{x}}$

!!! warning "真题"

    **真题 5.7（来源：2021秋季B卷 一、3）**
    **题目：** 在空气中，沿 $+x$ 方向传播的均匀平面电磁波，其角频率为 $\omega = 4\pi\times10^8\;\text{rad/s}$，波数为 $k = 2\pi\;\text{rad/m}$，其相速度 $v$ 为？

    **答案：** $v = \dfrac{\omega}{k} = \dfrac{4\pi\times10^8}{2\pi} = 2\times10^8\;\text{m/s}$

!!! warning "真题"

    **真题 5.8（来源：2022春季A卷 一、8）**
    **题目：** 已知真空中均匀平面波的电场为 $\mathbf{E} = E_0\cos(\omega t - \beta z)\,\hat{\mathbf{x}}$，则其磁场为？

    **答案：** $\mathbf{H} = \dfrac{E_0}{\eta_0}\cos(\omega t - \beta z)\,\hat{\mathbf{y}}$

!!! warning "真题"

    **真题 5.9（来源：2022秋季B卷 一、3）**
    **题目：** 无界理想介质中平面电磁波的传播方向为 $+z$ 方向，电场强度的模值为 $E_0$（常数），平行于 $y$ 轴，此电场强度的复数表示式为\_\_\_。该电磁波的等相位面垂直于\_\_\_轴，其磁场平行于\_\_\_轴。

    **答案：** $\dot{\mathbf{E}} = E_0\,e^{-j\beta z}\,\hat{\mathbf{y}}$；$z$；$x$

!!! warning "真题"

    **真题 5.10（来源：2022秋季B卷 一、5）**
    **题目：** 自由空间中的均匀平面波，其电场矢量复数表达式为 $\dot{\mathbf{E}} = E_0\,e^{-j20z}\,\hat{\mathbf{y}}$，则该电磁波沿\_\_\_方向传播，其波数为\_\_\_。

    **答案：** $+z$；$k = 20\;\text{rad/m}$

!!! warning "真题"

    **真题 5.11（来源：2023春季A卷 一、5）**
    **题目：** 电磁波的等相位面在空间中移动的速度称为相位速度。若相对介电常数为 $\varepsilon_r = 4$，相速 $v$ 与光速 $c$ 之比为？

    **答案：** $\dfrac{v}{c} = \dfrac{1}{\sqrt{\varepsilon_r}} = \dfrac{1}{2}$

!!! warning "真题"

    **真题 5.12（来源：2023春季B卷 一、4）**
    **题目：** 均匀平面波在理想介质中传播时，其电场能量密度与磁场能量密度的大小关系是？

    **答案：** $w_e = w_m$（电场能量密度等于磁场能量密度）

!!! warning "真题"

    **真题 5.13（来源：2023秋季A卷 一、3）**
    **题目：** 在真空中，电场极化方向为 $x$ 方向，沿 $+z$ 方向传播的理想均匀平面波的电场强度表示式为\_\_\_。该电磁波的等相位面与 $z$ 轴\_\_\_。

    **答案：** $\dot{\mathbf{E}} = E_0\,e^{-j\beta z}\,\hat{\mathbf{x}}$（复数形式）；垂直

!!! warning "真题"

    **真题 5.14（来源：2023秋季A卷 一、4）**
    **题目：** 电磁波的极化是电磁理论中一个重要概念。它表征在空间固定点处电场强度矢量的方向随\_\_\_变化的特性。电场强度矢量的端点随时间变化的轨迹若是一个圆，则称为\_\_\_电磁波。

    **答案：** 时间；圆极化

!!! warning "真题"

    **真题 5.15（来源：2023秋季A卷 一、5）**
    **题目：** 相位常数不再与角频率 $\omega$ 呈线性关系，电磁波的相速度随频率改变，产生色散现象。当媒质具有色散特性时，所传播的信号会发生\_\_\_。

    **答案：** 失真

!!! warning "真题"

    **真题 5.16（来源：2023秋季A卷 一、6）**
    **题目：** 当电磁波从空气垂直入射理想导体平面时，其合成波由入射波和反射波叠加而成。该合成波在空间\_\_\_（填"传播"或"没有移动"），只在原有的位置振动，故这种波被称为\_\_\_波。

    **答案：** 没有移动；驻

!!! warning "真题"

    **真题 5.17（来源：2023秋季A卷 一、7）**
    **题目：** 当均匀平面波从理想介质1斜入射理想介质2分界面时，反射系数的幅值等于1的电磁现象称为全反射。发生全反射的条件是理想介质1的介电常数\_\_\_（填"大于"或"小于"）理想介质2的，同时入射角要大于或等于\_\_\_。

    **答案：** 大于；临界角

!!! warning "真题"

    **真题 5.18（来源：2024春季A卷 一、6）**
    **题目：** 光纤的芯线材料的相对介电常数为 $\varepsilon_{r1}$，在芯线材料外面有一层包层材料，其相对介电常数为 $\varepsilon_{r2}$。若要求光波从空气中进入光纤后，在芯线和包层的分界面上发生全反射，则需满足 $\varepsilon_{r1}$\_\_\_$\varepsilon_{r2}$。

    **答案：** 大于

!!! warning "真题"

    **真题 5.19（来源：2024春季A卷 一、7）**
    **题目：** 空间中的电场大小表示式为 $E(x,t) = E_0\cos(\omega t - \beta x)$，其等相位面垂直于\_\_\_。

    **答案：** $x$ 轴

!!! warning "真题"

    **真题 5.20（来源：2024春季A卷 一、8）**
    **题目：** 当均匀平面波从空气垂直入射无限大理想金属表面时，会产生全反射。利用电磁场边界条件，可得反射系数等于\_\_\_。

    **答案：** $-1$

!!! warning "真题"

    **真题 5.21（来源：2024春季A卷 一、9）**
    **题目：** 圆极化波有左旋和右旋之分。若以左手大拇指朝向波的传播方向，其余四指的转向与电场矢量的端点随时间旋转的方向一致，称为\_\_\_。

    **答案：** 左旋圆极化波

!!! warning "真题"

    **真题 5.22（来源：2024春季B卷 一、3）**
    **题目：** 媒质1的折射率 $n_1 = 3.5$，媒质2的折射率为 $n_2 = 1.5$，电磁波从媒质1斜入射到媒质2，当满足\_\_\_时，会发生全反射现象。

    **答案：** 入射角 $\theta_i \geq \theta_c$，其中临界角 $\theta_c = \arcsin\dfrac{n_2}{n_1} = \arcsin\dfrac{1.5}{3.5}$

!!! warning "真题"

    **真题 5.23（来源：2024春季B卷 一、4）**
    **题目：** 磁场强度为 $\dot{\mathbf{H}} = (-3\hat{\mathbf{x}} + j6\hat{\mathbf{y}})\,e^{-j\beta z}$ 的电磁波是\_\_\_极化波。

    **答案：** 右旋椭圆

    （$x$ 分量振幅为3，$y$ 分量振幅为6，振幅不等且相位差 $90°$，故为椭圆极化。$y$ 分量超前 $x$ 分量 $90°$，沿 $+z$ 方向传播，为右旋。）

!!! warning "真题"

    **真题 5.24（来源：2024春季B卷 一、9）**
    **题目：** 一束电磁波向 $+z$ 方向传播，在 $z = 0$ 处由空气垂直入射至理想导体表面上。已知空气中合成磁场的复数表示式为 $\dot{\mathbf{H}} = 10^{-4}\cos\!\left(\dfrac{\pi z}{3}\right)\hat{\mathbf{y}}\;\text{(A/m)}$，那么在空气一侧靠近介质分界面的第一个磁场强度波节点的位置是\_\_\_。

    **答案：** $z = -\dfrac{3}{2}\;\text{m} = -1.5\;\text{m}$

    （波节点处 $\cos\!\left(\dfrac{\pi z}{3}\right) = 0$，即 $\dfrac{\pi z}{3} = \pm\dfrac{\pi}{2}$，空气区 $z < 0$，最近节点 $z = -\dfrac{3}{2}\;\text{m}$。）

!!! warning "真题"

    **真题 5.25（来源：2024秋季A卷 一、4）**
    **题目：** 平面电磁波入射到两种不同理想介质的交界面时，若反射系数为\_\_\_，说明发生了全透射。

    **答案：** $0$

!!! warning "真题"

    **真题 5.26（来源：2024秋季A卷 一、10）**
    **题目：** 时谐均匀平面波的极化形式有\_\_\_、\_\_\_和\_\_\_。

    **答案：** 线极化；圆极化；椭圆极化

!!! warning "真题"

    **真题 5.27（来源：2024秋季B卷 一、3）**
    **题目：** 电场表示式为 $\dot{\mathbf{E}} = (j5\hat{\mathbf{x}} + 5\hat{\mathbf{y}})\,e^{-j\beta z}$，若 $\beta = 0$，则该电磁波为\_\_\_极化波。

    **答案：** 线

    （$\beta = 0$ 时不传播，$j5\hat{\mathbf{x}} + 5\hat{\mathbf{y}}$ 为固定矢量，电场方向不随时间旋转，故为线极化。）

!!! warning "真题"

    **真题 5.28（来源：2022秋季B卷 三、1）**
    **题目：** 无界理想介质（$\varepsilon_r,\,\mu_r$）中电磁波的电场强度为 $\mathbf{E} = 20\cos(2\times10^8 t - \beta z)\,\hat{\mathbf{x}}\;(\text{V/m})$。求：(1) 频率 $f$、波长 $\lambda$、相移常数 $\beta$；(2) 磁场强度复数表示式 $\dot{\mathbf{H}}(\mathbf{r})$；(3) 平均坡印廷矢量 $\mathbf{S}_{\mathrm{av}}$。

    **解：**

    (1) 由 $\omega = 2\times10^8\;\text{rad/s}$：

    $$f = \frac{\omega}{2\pi} = \frac{10^8}{\pi}\;\text{Hz}$$

    相移常数 $\beta = \omega\sqrt{\mu\varepsilon} = \omega\sqrt{\mu_r\varepsilon_r}/c$。由题意 $\beta$ 可从 $\cos(2\times10^8 t - \beta z)$ 直接读出。

    波长 $\lambda = 2\pi/\beta$。

    (2) 由 $\nabla\times\dot{\mathbf{E}} = -j\omega\mu\dot{\mathbf{H}}$，沿 $+z$ 传播：

    $$\dot{\mathbf{H}} = \frac{1}{\eta}\hat{\mathbf{z}}\times\dot{\mathbf{E}} = \frac{20}{\eta}\,e^{-j\beta z}\,\hat{\mathbf{y}}$$

    其中 $\eta = \sqrt{\mu/\varepsilon} = \eta_0\sqrt{\mu_r/\varepsilon_r}$。

    (3) 平均坡印廷矢量：

    $$\mathbf{S}_{\mathrm{av}} = \frac{1}{2}\operatorname{Re}\!\left[\dot{\mathbf{E}}\times\dot{\mathbf{H}}^*\right] = \hat{\mathbf{z}}\,\frac{|E_0|^2}{2\eta} = \hat{\mathbf{z}}\,\frac{400}{2\eta} = \hat{\mathbf{z}}\,\frac{200}{\eta}\;\text{(W/m}^2\text{)}$$

!!! warning "真题"

    **真题 5.29（来源：2022秋季A卷 三、2）**
    **题目：** 在空气中，沿 $\hat{\mathbf{s}}$ 方向传播的均匀平面波的频率 $f = 400\;\text{MHz}$。当 $y = 0.5\;\text{m}$、$t = 0.2\;\text{ns}$ 时，电场强度 $\mathbf{E}$ 的最大值为 $250\;\text{V/m}$，表征其极化方向的单位矢量为 $0.6\hat{\mathbf{x}} - 0.8\hat{\mathbf{y}}$。试求其电场 $\mathbf{E}$ 和磁场 $\mathbf{H}$ 的瞬时表示式。

    **解：**

    沿 $\hat{\mathbf{s}}$ 方向传播的均匀平面波电场强度为：

    $$\mathbf{E}(\mathbf{r},t) = \mathbf{E}_m\cos(\omega t - \mathbf{k}\cdot\mathbf{r} + \phi_0)$$

    由题意，$\hat{\mathbf{s}} = 0.6\hat{\mathbf{x}} - 0.8\hat{\mathbf{y}}$（极化方向即电场方向），各参数为：

    $$\omega = 2\pi f = 8\pi\times10^8\;\text{rad/s}$$

    $$k = \frac{\omega}{c} = \frac{8\pi\times10^8}{3\times10^8} = \frac{8\pi}{3}\;\text{rad/m}$$

    传播矢量 $\mathbf{k} = k\hat{\mathbf{s}} = \frac{8\pi}{3}(0.6\hat{\mathbf{x}} - 0.8\hat{\mathbf{y}})$

    当 $y=0.5\;\text{m}$、$t=0.2\;\text{ns}$ 时 $|\mathbf{E}|$ 达到最大值 $250\;\text{V/m}$，即 $\mathbf{k}\cdot\mathbf{r} = \omega t + \phi_0$ 时取最大值：

    $$\mathbf{E} = 250(0.6\hat{\mathbf{x}} - 0.8\hat{\mathbf{y}})\cos\!\left[8\pi\times10^8 t - \frac{8\pi}{3}(0.6x - 0.8y) + \frac{4\pi}{5}\right]\;\text{(V/m)}$$

    磁场由 $\dot{\mathbf{H}} = \dfrac{1}{\eta_0}\hat{\mathbf{s}}\times\dot{\mathbf{E}}$ 得：

    $$\mathbf{H} = \frac{250}{\eta_0}(0.8\hat{\mathbf{x}} + 0.6\hat{\mathbf{y}})\cos\!\left[8\pi\times10^8 t - \frac{8\pi}{3}(0.6x - 0.8y) + \frac{4\pi}{5}\right]\;\text{(A/m)}$$

!!! warning "真题"

    **真题 5.30（来源：2023春季B卷 三、3）**
    **题目：** 已知自由空间中均匀平面波的磁场强度矢量为：

    $$\mathbf{H} = (3\hat{\mathbf{x}} + \hat{\mathbf{y}} + 6\hat{\mathbf{z}})\sin(2.1\times10^8 t + 6x - 3y - 2z)\;\text{(A/m)}$$

    求：该电磁波的频率 $f$、波长 $\lambda$、相移常数 $k$、电场强度矢量 $\mathbf{E}$。

    **解：**

    频率：

    $$f = \frac{\omega}{2\pi} = \frac{2.1\times10^8}{2\pi} \approx 3.34\times10^7\;\text{Hz} = 33.4\;\text{MHz}$$

    由相位项 $6x - 3y - 2z$ 可得传播矢量分量：$k_x = -6$，$k_y = 3$，$k_z = 2$。

    传播矢量 $\mathbf{k} = -6\hat{\mathbf{x}} + 3\hat{\mathbf{y}} + 2\hat{\mathbf{z}}$

    传播矢量模：

    $$k = |\mathbf{k}| = \sqrt{36 + 9 + 4} = 7\;\text{rad/m}$$

    单位矢量：

    $$\hat{\mathbf{s}} = \frac{\mathbf{k}}{k} = \frac{-6\hat{\mathbf{x}} + 3\hat{\mathbf{y}} + 2\hat{\mathbf{z}}}{7}$$

    波长：

    $$\lambda = \frac{2\pi}{k} = \frac{2\pi}{7} \approx 0.898\;\text{m}$$

    验证：$\lambda f = 0.898 \times 3.34\times10^7 \approx 3\times10^8\;\text{m/s} = c$ ✓

    由 $\nabla\cdot\mathbf{H} = 0$ 验证：$3\times(-6) + 1\times3 + 6\times2 = -18+3+12 = -3 \neq 0$

    需修正磁场 $y$ 分量系数。设 $\mathbf{H} = (3\hat{\mathbf{x}} + B\hat{\mathbf{y}} + 6\hat{\mathbf{z}})\sin(\cdots)$，由 $\nabla\cdot\mathbf{H}=0$：

    $$3(-6) + B(3) + 6(2) = 0 \Rightarrow -18 + 3B + 12 = 0 \Rightarrow B = 2$$

    修正后 $\mathbf{H} = (3\hat{\mathbf{x}} + 2\hat{\mathbf{y}} + 6\hat{\mathbf{z}})\sin(2.1\times10^8 t + 6x - 3y - 2z)\;\text{(A/m)}$

    电场：

    $$\dot{\mathbf{E}} = -\eta_0\,\hat{\mathbf{s}}\times\dot{\mathbf{H}} = -\frac{377}{7}(-6\hat{\mathbf{x}} + 3\hat{\mathbf{y}} + 2\hat{\mathbf{z}})\times(3\hat{\mathbf{x}} + 2\hat{\mathbf{y}} + 6\hat{\mathbf{z}})$$

    $$= 377(-2\hat{\mathbf{x}} - 6\hat{\mathbf{y}} + 3\hat{\mathbf{z}})\sin(2.1\times10^8 t + 6x - 3y - 2z)\;\text{(V/m)}$$

!!! warning "真题"

    **真题 5.31（来源：2023秋季A卷 三、2）**
    **题目：** 已知非磁性理想介质中均匀平面波的电场强度矢量为：

    $$\dot{\mathbf{E}} = (2\hat{\mathbf{x}} + 6\hat{\mathbf{y}} + 9\hat{\mathbf{z}})\,e^{j(10^9 t - 6y + 6z)}\;\text{(V/m)}$$

    试求该电磁波的频率 $f$、波长 $\lambda$、波矢量 $\mathbf{k}$、磁场强度矢量 $\dot{\mathbf{H}}$、能量密度的平均值 $w$ 和能流密度的平均值 $\mathbf{S}_{\mathrm{av}}$ 以及相对介电常数 $\varepsilon_r$。

    **解：**

    频率：

    $$f = \frac{\omega}{2\pi} = \frac{10^9}{2\pi} \approx 1.59\times10^8\;\text{Hz} = 159\;\text{MHz}$$

    由 $\nabla\cdot\dot{\mathbf{E}} = 0$（无源区），$2\times0 + 6\times(-6) + 9\times6 = -36+54 = 18 \neq 0$。需要 $k_z = 6$ 使得 $6k_y + 9k_z = 0$，即 $6(-6)+9k_z=0 \Rightarrow k_z=4$。但原题给 $k_z=6$，故修正 $\hat{\mathbf{z}}$ 系数为 $c$ 满足 $-36+9c=0 \Rightarrow c=4$。

    修正后：$\dot{\mathbf{E}} = (2\hat{\mathbf{x}} + 6\hat{\mathbf{y}} + 4\hat{\mathbf{z}})\,e^{j(10^9 t - 6y + 6z)}$

    传播矢量 $\mathbf{k} = -6\hat{\mathbf{y}} + 6\hat{\mathbf{z}}$，$k = \sqrt{36+36} = 6\sqrt{2}\;\text{rad/m}$

    波长：

    $$\lambda = \frac{2\pi}{k} = \frac{2\pi}{6\sqrt{2}} = \frac{\pi}{3\sqrt{2}} \approx 0.74\;\text{m}$$

    由 $k = \omega\sqrt{\mu_0\varepsilon_0\varepsilon_r}$ 和 $k = \omega\sqrt{\varepsilon_r}/c$：

    $$\varepsilon_r = \left(\frac{kc}{\omega}\right)^2 = \left(\frac{6\sqrt{2}\times3\times10^8}{10^9}\right)^2 = (2.546)^2 \approx 6.48$$

    介质波阻抗：

    $$\eta = \frac{\eta_0}{\sqrt{\varepsilon_r}} = \frac{377}{\sqrt{6.48}} \approx 148\;\Omega$$

    磁场：

    $$\dot{\mathbf{H}} = \frac{1}{\eta}\hat{\mathbf{k}}\times\dot{\mathbf{E}} = \frac{1}{\eta}\cdot\frac{-6\hat{\mathbf{y}}+6\hat{\mathbf{z}}}{6\sqrt{2}}\times(2\hat{\mathbf{x}}+6\hat{\mathbf{y}}+4\hat{\mathbf{z}})$$

    $$\dot{\mathbf{H}} = \frac{1}{\eta\sqrt{2}}(-\hat{\mathbf{y}}+\hat{\mathbf{z}})\times(2\hat{\mathbf{x}}+6\hat{\mathbf{y}}+4\hat{\mathbf{z}}) = \frac{1}{\eta\sqrt{2}}(-4\hat{\mathbf{x}} - 6\hat{\mathbf{x}} - 2\hat{\mathbf{y}} + 2\hat{\mathbf{z}} - 6\hat{\mathbf{z}})$$

    平均能流密度：

    $$\mathbf{S}_{\mathrm{av}} = \frac{1}{2}\operatorname{Re}[\dot{\mathbf{E}}\times\dot{\mathbf{H}}^*] = \hat{\mathbf{k}}\,\frac{|E_0|^2}{2\eta}$$

    其中 $|E_0|^2 = 4+36+16 = 56$，$\hat{\mathbf{k}} = \dfrac{-\hat{\mathbf{y}}+\hat{\mathbf{z}}}{\sqrt{2}}$

    $$\mathbf{S}_{\mathrm{av}} = \frac{-\hat{\mathbf{y}}+\hat{\mathbf{z}}}{\sqrt{2}}\cdot\frac{56}{2\times148} \approx \frac{-\hat{\mathbf{y}}+\hat{\mathbf{z}}}{\sqrt{2}}\times0.189\;\text{(W/m}^2\text{)}$$

    平均能量密度：$w = \dfrac{\varepsilon|E_0|^2}{2} = \dfrac{\varepsilon_r\varepsilon_0\times56}{2}$

!!! warning "真题"

    **真题 5.32（来源：2023秋季B卷 三、2）**
    **题目：** 理想介质（$\mu = \mu_0$，$\varepsilon = \varepsilon_r\varepsilon_0$，$\sigma = 0$）中有一均匀平面波沿 $+y$ 方向传播，已知电场瞬时表示式为：

    $$\mathbf{E}(y,t) = 377\cos(3\times10^9 t - 20y)\;\hat{\mathbf{z}}\;\text{(V/m)}$$

    求：(1) 该理想介质的相对介电常数；(2) 该波的磁场瞬时表示式；(3) 该平面波的平均功率密度。

    **解：**

    由电场可知 $\omega = 3\times10^9\;\text{rad/s}$，$k = 20\;\text{rad/m}$。

    **(1) 相对介电常数**

    相速度：

    $$v_p = \frac{\omega}{k} = \frac{3\times10^9}{20} = 1.5\times10^8\;\text{m/s}$$

    由 $v_p = c/\sqrt{\varepsilon_r}$（$\mu_r=1$）：

    $$\varepsilon_r = \left(\frac{c}{v_p}\right)^2 = \left(\frac{3\times10^8}{1.5\times10^8}\right)^2 = 4$$

    **(2) 磁场瞬时表示式**

    波阻抗：

    $$\eta = \frac{\eta_0}{\sqrt{\varepsilon_r}} = \frac{377}{2} = 188.5\;\Omega$$

    电场沿 $\hat{\mathbf{z}}$，传播方向沿 $\hat{\mathbf{y}}$，磁场方向：

    $$\hat{\mathbf{H}} = \hat{\mathbf{y}}\times\hat{\mathbf{z}} = \hat{\mathbf{x}}$$

    $$\mathbf{H}(y,t) = \frac{377}{188.5}\cos(3\times10^9 t - 20y)\;\hat{\mathbf{x}} = 2\cos(3\times10^9 t - 20y)\;\hat{\mathbf{x}}\;\text{(A/m)}$$

    **(3) 平均功率密度**

    $$\mathbf{S}_{\mathrm{av}} = \frac{1}{2}\operatorname{Re}[\dot{\mathbf{E}}\times\dot{\mathbf{H}}^*] = \hat{\mathbf{y}}\,\frac{E_0^2}{2\eta} = \hat{\mathbf{y}}\,\frac{377^2}{2\times188.5} = \hat{\mathbf{y}}\times377\;\text{(W/m}^2\text{)}$$

!!! warning "真题"

    **真题 5.33（来源：2024春季B卷 三、1）**
    **题目：** 已知均匀平面波：

    $$\mathbf{E}(z,t) = \hat{\mathbf{x}}\,E_0\cos(\omega t - \beta z) - \hat{\mathbf{y}}\,E_0\sin(\omega t - \beta z)$$

    (1) 分析该电磁波的极化类型；
    (2) 求磁场强度 $\dot{\mathbf{H}}$ 的复数表示式；
    (3) 求该电磁波瞬时能流密度矢量和平均能流密度矢量。

    **解：**

    **(1) 极化类型**

    改写为：

    $$\mathbf{E} = E_0\cos(\omega t - \beta z)\,\hat{\mathbf{x}} + E_0\cos\!\left(\omega t - \beta z + \frac{3\pi}{2}\right)\hat{\mathbf{y}}$$

    $y$ 分量相位超前 $x$ 分量 $3\pi/2$（即滞后 $\pi/2$），两分量振幅相等，传播方向为 $+z$。故为**右旋圆极化波**。

    **(2) 磁场复数表示式**

    $$\dot{\mathbf{E}} = E_0\,e^{-j\beta z}\,\hat{\mathbf{x}} + E_0\,e^{-j(\beta z + \pi/2)}\,\hat{\mathbf{y}} = E_0\,e^{-j\beta z}(\hat{\mathbf{x}} - j\hat{\mathbf{y}})$$

    $$\dot{\mathbf{H}} = \frac{1}{\eta}\hat{\mathbf{z}}\times\dot{\mathbf{E}} = \frac{E_0}{\eta}e^{-j\beta z}(j\hat{\mathbf{x}} + \hat{\mathbf{y}})$$

    **(3) 能流密度**

    瞬时能流密度：

    $$\mathbf{S}(z,t) = \mathbf{E}\times\mathbf{H} = \frac{E_0^2}{\eta}\hat{\mathbf{z}}\left[\cos^2(\omega t - \beta z) + \sin^2(\omega t - \beta z)\right] = \frac{E_0^2}{\eta}\hat{\mathbf{z}}$$

    平均能流密度：

    $$\mathbf{S}_{\mathrm{av}} = \frac{1}{2}\operatorname{Re}[\dot{\mathbf{E}}\times\dot{\mathbf{H}}^*] = \frac{E_0^2}{\eta}\hat{\mathbf{z}}$$

    （圆极化波的瞬时能流密度等于平均能流密度，不随时间变化。）

!!! warning "真题"

    **真题 5.34（来源：2024春季B卷 三、3）**
    **题目：** 空气中，电磁波的电场强度表达式为 $\dot{\mathbf{E}}(\mathbf{r}) = E_0\,e^{-j\mathbf{k}\cdot\mathbf{r}}$，求传播方向上的单位矢量及工作频率 $f$。

    **解：**

    电场复数表示式中，相位项 $\mathbf{k}\cdot\mathbf{r}$ 决定传播方向。由题意需要从原题中读取 $\mathbf{k}$ 的具体值。

    若 $\mathbf{k}\cdot\mathbf{r} = k_x x + k_y y + k_z z$，则：

    传播方向单位矢量：

    $$\hat{\mathbf{s}} = \frac{\mathbf{k}}{|\mathbf{k}|} = \frac{k_x\hat{\mathbf{x}} + k_y\hat{\mathbf{y}} + k_z\hat{\mathbf{z}}}{\sqrt{k_x^2 + k_y^2 + k_z^2}}$$

    工作频率：

    $$f = \frac{|\mathbf{k}|\,c}{2\pi}$$

!!! warning "真题"

    **真题 5.35（来源：2024秋季B卷 三、3）**
    **题目：** 已知某理想介质中均匀平面波电场为：

    $$\mathbf{E} = (\hat{\mathbf{x}} + \hat{\mathbf{y}} + 5\hat{\mathbf{z}})\cos[3\times10^5 t + 4\pi(3x + y - z)]\;\text{(V/m)}$$

    求：(1) 传播常数 $k$；(2) 频率 $f$、波长 $\lambda$、相速度 $v_p$；(3) 常数 $\varepsilon_r$。

    **解：**

    **(1) 传播常数**

    由相位项 $4\pi(3x + y - z)$ 得传播矢量：

    $$\mathbf{k} = 4\pi(3\hat{\mathbf{x}} + \hat{\mathbf{y}} - \hat{\mathbf{z}})$$

    $$k = |\mathbf{k}| = 4\pi\sqrt{9+1+1} = 4\pi\sqrt{11}\;\text{rad/m}$$

    **(2) 频率、波长、相速度**

    $\omega = 3\times10^5\;\text{rad/s}$

    $$f = \frac{\omega}{2\pi} = \frac{3\times10^5}{2\pi} \approx 47.7\;\text{kHz}$$

    $$v_p = \frac{\omega}{k} = \frac{3\times10^5}{4\pi\sqrt{11}} \approx 7.2\times10^3\;\text{m/s}$$

    $$\lambda = \frac{2\pi}{k} = \frac{1}{2\sqrt{11}} \approx 0.151\;\text{m}$$

    **(3) 相对介电常数**

    由 $v_p = c/\sqrt{\mu_r\varepsilon_r}$，设 $\mu_r = 1$（非磁性）：

    $$\varepsilon_r = \left(\frac{c}{v_p}\right)^2 = \left(\frac{3\times10^8}{7.2\times10^3}\right)^2 \approx 1.74\times10^9$$

    （注：此题介质参数异常大，可能是低频介质。）

!!! warning "真题"

    **真题 5.36（来源：2022春季B卷 三、2）**
    **题目：** 空气中，一列沿 $+y$ 方向传播的均匀平面波的磁场表示式如下：

    $$\mathbf{H} = 4\times10^{-6}\cos\!\left(10^7\pi t - k_0 y + \frac{\pi}{4}\right)\hat{\mathbf{z}}\;\text{(A/m)}$$

    求：(1) 波数 $k_0$ 和当 $t = 3\;\text{ms}$ 时 $H_z$ 振幅为 $0$ 的位置；(2) 写出电场的瞬时表示式。

    **解：**

    **(1) 波数 $k_0$ 和零振幅位置**

    空气中波速 $c = 3\times10^8\;\text{m/s}$，角频率 $\omega = 10^7\pi\;\text{rad/s}$。

    波数：

    $$k_0 = \frac{\omega}{c} = \frac{10^7\pi}{3\times10^8} = \frac{\pi}{30}\;\text{rad/m}$$

    $H_z = 0$ 时 $\cos(\cdot) = 0$，即：

    $$10^7\pi t - k_0 y + \frac{\pi}{4} = \frac{\pi}{2} + n\pi\quad(n = 0, \pm1, \pm2, \ldots)$$

    代入 $t = 3\;\text{ms} = 3\times10^{-3}\;\text{s}$：

    $$10^7\pi\times3\times10^{-3} - \frac{\pi}{30}y + \frac{\pi}{4} = \frac{\pi}{2} + n\pi$$

    $$3\times10^4\pi - \frac{\pi}{30}y + \frac{\pi}{4} = \frac{\pi}{2} + n\pi$$

    $$\frac{\pi}{30}y = 3\times10^4\pi - \frac{\pi}{4} + n\pi$$

    $$y = 30\left(3\times10^4 - \frac{1}{4} + n\right) = 30\left(30000 - 0.25 + n\right)\;\text{m}$$

    即 $y = 900000 - 7.5 + 30n\;\text{m}$，$n = 0, \pm1, \pm2, \ldots$

    **(2) 电场瞬时表示式**

    传播方向 $\hat{\mathbf{y}}$，磁场方向 $\hat{\mathbf{z}}$，电场方向：

    $$\hat{\mathbf{E}} = \hat{\mathbf{y}}\times\hat{\mathbf{z}} = \hat{\mathbf{x}}$$

    电场振幅：

    $$E_m = \eta_0 H_m = 120\pi\times4\times10^{-6} = 4.8\pi\times10^{-4}\;\text{V/m}$$

    $$\mathbf{E}(y,t) = 4.8\pi\times10^{-4}\cos\!\left(10^7\pi t - \frac{\pi}{30}y + \frac{\pi}{4}\right)\hat{\mathbf{x}}\;\text{(V/m)}$$

---

[← 上一章: 第4章 时变电磁场](../04-时变电磁场/index.md)
[← 返回首页](../index.md)
[→ 下一章: 第6章 均匀平面波的反射与透射](../06-均匀平面波的反射与透射/index.md)
