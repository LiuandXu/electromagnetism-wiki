# 第6章 均匀平面波的反射与透射

### 6.1 对理想介质分界面的垂直入射

$z < 0$：媒质 1（$\varepsilon_1, \mu_1$），$z > 0$：媒质 2（$\varepsilon_2, \mu_2$）。

**反射系数：**

$$\Gamma = \frac{E_r}{E_i} = \frac{\eta_2 - \eta_1}{\eta_2 + \eta_1}$$

**传输系数：**

$$T = \frac{E_t}{E_i} = 1 + \Gamma = \frac{2\eta_2}{\eta_2 + \eta_1}$$

$\Gamma$ 范围：$-1 \leq \Gamma \leq 1$

**驻波比（SWR）：**

$$S = \frac{|E|_{\max}}{|E|_{\min}} = \frac{1 + |\Gamma|}{1 - |\Gamma|}$$

$S = 1$（$\Gamma = 0$）：全匹配，纯行波
$S = \infty$（$|\Gamma| = 1$）：全反射，纯驻波

**特殊情况：**
- $\eta_2 = \eta_1$：$\Gamma = 0$，阻抗匹配，无反射
- $\eta_1 \gg \eta_2$：$\Gamma \approx -1$，类似短路
- $\eta_2 \gg \eta_1$：$\Gamma \approx +1$，类似开路

!!! warning "真题"

    **真题 6.1（来源：2022秋季A卷）**
    **题目：** 均匀平面波的电场振幅 $E_0 = 100$ V/m，从空气中垂直入射到无损耗介质表面（$\varepsilon_r = 4$，$\mu_r = 1$，$\sigma = 0$）。求反射波和透射波的电场振幅。

    **解：**

    空气和介质的波阻抗分别为：

    $$\eta_1 = \eta_0 = 120\pi \;\Omega, \qquad \eta_2 = \frac{\eta_0}{\sqrt{\varepsilon_r}} = \frac{120\pi}{2} = 60\pi \;\Omega$$

    **反射系数：**

    $$\Gamma = \frac{\eta_2 - \eta_1}{\eta_2 + \eta_1} = \frac{60\pi - 120\pi}{60\pi + 120\pi} = \frac{-60}{180} = -\frac{1}{3}$$

    **透射系数：**

    $$T = 1 + \Gamma = 1 - \frac{1}{3} = \frac{2}{3}$$

    **反射波与透射波电场振幅：**

    $$|E_r| = |\Gamma| \cdot E_0 = \frac{1}{3} \times 100 \approx 33.3 \;\text{V/m}$$

    $$|E_t| = T \cdot E_0 = \frac{2}{3} \times 100 \approx 66.7 \;\text{V/m}$$

    反射系数为负表示反射波电场相位反转 $180°$。

    **真题 6.2（来源：2024秋季A卷）**
    **题目：** 一圆极化波从空气垂直入射到 $z = 0$ 处一无限大的理想介质板上，介质的波阻抗为 $\eta$。入射波电场为 $\dot{\mathbf{E}}_i = E_0(\hat{\mathbf{x}} + j\hat{\mathbf{y}})\,e^{-jk_0 z}$。求反射波和透射波的电场，并判断它们的极化类型。

    **解：**

    入射波为**左旋圆极化波**（$E_y$ 超前 $E_x$ 为 $90°$，沿 $+z$ 方向传播）。

    **反射系数和透射系数：**

    $$\Gamma = \frac{\eta - \eta_0}{\eta + \eta_0}, \qquad T = \frac{2\eta}{\eta + \eta_0} = 1 + \Gamma$$

    由于 $\eta$ 和 $\eta_0$ 均为实数（理想介质），$\Gamma$ 和 $T$ 也为实数，即反射和透射不改变各分量间的相位关系。

    **反射波：**

    $$\dot{\mathbf{E}}_r = \Gamma E_0(\hat{\mathbf{x}} + j\hat{\mathbf{y}})\,e^{+jk_0 z}$$

    反射波沿 $-z$ 方向传播。$E_y$ 仍超前 $E_x$ 为 $90°$，但传播方向反向后，观察到的旋向相反。因此反射波为**右旋圆极化波**。

    **透射波：**

    $$\dot{\mathbf{E}}_t = T E_0(\hat{\mathbf{x}} + j\hat{\mathbf{y}})\,e^{-jk_2 z}$$

    透射波沿 $+z$ 方向传播，极化旋向不变，仍为**左旋圆极化波**。

    **结论：** 圆极化波经介质面反射后旋向反转（左旋 $\to$ 右旋），透射后旋向保持不变。

### 6.2 对理想介质分界面的斜入射

**斯奈尔定律：**

反射定律：$\theta_r = \theta_i$

折射定律：$\sqrt{\mu_1\varepsilon_1}\sin\theta_i = \sqrt{\mu_2\varepsilon_2}\sin\theta_t$

非磁性介质（$\mu_1 = \mu_2 = \mu_0$）：$n_1\sin\theta_i = n_2\sin\theta_t$

**垂直极化（TE/$\perp$ 极化，电场垂直于入射面）：**

$$\Gamma_\perp = \frac{\eta_2\cos\theta_i - \eta_1\cos\theta_t}{\eta_2\cos\theta_i + \eta_1\cos\theta_t}$$

$$T_\perp = \frac{2\eta_2\cos\theta_i}{\eta_2\cos\theta_i + \eta_1\cos\theta_t}$$

**平行极化（TM/$\parallel$ 极化，磁场垂直于入射面）：**

$$\Gamma_\parallel = \frac{\eta_2\cos\theta_t - \eta_1\cos\theta_i}{\eta_2\cos\theta_t + \eta_1\cos\theta_i}$$

$$T_\parallel = \frac{2\eta_2\cos\theta_i}{\eta_2\cos\theta_t + \eta_1\cos\theta_i}$$

**布儒斯特角（Brewster Angle）：**

使 $\Gamma_\parallel = 0$ 的入射角：

$$\theta_B = \arctan\sqrt{\frac{\varepsilon_2}{\varepsilon_1}}$$

平行极化波以布儒斯特角入射时完全无反射，全透射。用于激光器布儒斯特窗。

**全反射与临界角（$n_1 > n_2$）：**

$$\theta_c = \arcsin\left(\frac{n_2}{n_1}\right)$$

$\theta_i > \theta_c$ 时发生全反射（$|\Gamma| = 1$），媒质 2 中出现倏逝波（evanescent wave）。

应用：光纤通信中光在纤芯-包层界面全内反射。

!!! example "例题"

    **例题 6.1**
    **题目：** 均匀平面波从介质 1（$\varepsilon_{r1} = 1$，$\mu_{r1} = 1$）斜入射到介质 2（$\varepsilon_{r2} = 3$，$\mu_{r2} = 1$）的分界面上。已知入射角 $\theta_i = 60°$，角频率 $\omega = 3\times10^8$ rad/s，电场振幅 $E_0 = 10$ V/m，垂直极化入射。求反射系数、透射系数、折射角，并验证边界条件。

    **解：**

    **(1) 求折射角**

    由斯涅尔定律 $n_1\sin\theta_i = n_2\sin\theta_t$：

    $$\sin\theta_t = \frac{\sin 60°}{\sqrt{\varepsilon_{r2}}} = \frac{\sqrt{3}/2}{\sqrt{3}} = \frac{1}{2}$$

    $$\theta_t = 30°$$

    **(2) 求反射系数和透射系数（垂直极化）**

    介质阻抗：$\eta_1 = \eta_0$，$\eta_2 = \eta_0/\sqrt{3}$

    $$\Gamma_\perp = \frac{\eta_2\cos\theta_i - \eta_1\cos\theta_t}{\eta_2\cos\theta_i + \eta_1\cos\theta_t} = \frac{\frac{1}{\sqrt{3}}\cdot\frac{1}{2} - \frac{\sqrt{3}}{2}}{\frac{1}{\sqrt{3}}\cdot\frac{1}{2} + \frac{\sqrt{3}}{2}} = \frac{\frac{1}{2\sqrt{3}} - \frac{\sqrt{3}}{2}}{\frac{1}{2\sqrt{3}} + \frac{\sqrt{3}}{2}} = \frac{-1}{2} = -\frac{1}{2}$$

    $$T_\perp = 1 + \Gamma_\perp = 1 - \frac{1}{2} = \frac{1}{2}$$

    **(3) 验证边界条件**

    分界面上切向电场连续：$E_i + E_r = E_t$，即：

    $$E_0 + \Gamma_\perp E_0 = T_\perp E_0 \implies 1 + (-\tfrac{1}{2}) = \tfrac{1}{2} \quad \checkmark$$

    反射波电场振幅 $|E_r| = |\Gamma_\perp|E_0 = 5$ V/m，折射波电场振幅 $|E_t| = T_\perp E_0 = 5$ V/m。

### 6.3 对理想导体分界面的垂直入射

理想导体 $\eta_2 = 0$，$\Gamma = -1$，$T = 0$，全反射。

媒质 1 中形成纯驻波：
$$E_x(z) = -2jE_i\sin(k_1 z)$$
$$H_y(z) = \frac{2E_i}{\eta_1}\cos(k_1 z)$$

- 导体表面（$z = 0$）：电场波节（$E = 0$），磁场波腹（$H = 2E_i/\eta_1$）
- 距表面 $\lambda/4$：电场波腹，磁场波节
- 电场与磁场在空间上错开 $\lambda/4$，时间上相位差 $90^\circ$
- 平均坡印廷矢量为零，无能量传输

### 6.4 对多层介质分界面的垂直入射

**三层介质模型：** $\eta_1$ | $\eta_2$（厚度 $d$）| $\eta_3$

**输入阻抗：** 从媒质 1 向媒质 2/3 看去的等效阻抗：

$$\eta_{in} = \eta_2\frac{\eta_3 + j\eta_2\tan(\beta_2 d)}{\eta_2 + j\eta_3\tan(\beta_2 d)}$$

总反射系数：$\Gamma = \frac{\eta_{in} - \eta_1}{\eta_{in} + \eta_1}$

**半波长介质窗（$d = \lambda_2/2$，$\beta_2 d = \pi$）：**
$\eta_{in} = \eta_3$，媒质 2 如同不存在。$\Gamma$ 仅取决于 $\eta_1$ 和 $\eta_3$。

**四分之一波长阻抗变换器（$d = \lambda_2/4$，$\beta_2 d = \pi/2$）：**
$\eta_{in} = \eta_2^2/\eta_3$

若选择 $\eta_2 = \sqrt{\eta_1\eta_3}$，则 $\eta_{in} = \eta_1$，$\Gamma = 0$，实现完全匹配。

应用：天线罩、增透膜、阻抗匹配网络。

!!! example "例题"

    **例题 6.2**
    **题目：** 在理想导体（PEC）表面覆盖一层厚度为 $d_1$ 的理想介质膜（介电常数 $\varepsilon_1$），再涂一层厚度为 $d_2$ 的有耗介质（介电常数 $\varepsilon_2$，电导率 $\sigma$）。试确定消除电磁波从该多层结构表面反射的条件（隐身原理）。

    **解：**

    **(1) 分析思路**

    该问题可分解为三层结构：PEC | 介质层 $d_1$ | 有耗介质层 $d_2$ | 自由空间。利用传输线理论逐层求解等效阻抗，最终令分界面处的反射系数为零。

    **(2) 求各层等效阻抗**

    PEC 表面（$z=0$）为短路，输入阻抗 $Z_{\mathrm{in}}^{(0)} = 0$。

    介质层 $d_1$ 的输入阻抗（终端短路）：

    $$Z_{\mathrm{in}}^{(1)} = j\eta_1\tan(\beta_1 d_1)$$

    当 $d_1 = \lambda_1/4$ 时，$\tan(\beta_1 d_1) \to \infty$，短路经 $\lambda/4$ 变换为开路（$Z_{\mathrm{in}}^{(1)} \to \infty$）。

    有耗介质层 $d_2$ 的输入阻抗：

    $$Z_{\mathrm{in}}^{(2)} = \eta_2\,\frac{Z_{\mathrm{in}}^{(1)} + j\eta_2\tan(\beta_2 d_2)}{\eta_2 + jZ_{\mathrm{in}}^{(1)}\tan(\beta_2 d_2)}$$

    当 $Z_{\mathrm{in}}^{(1)} \to \infty$ 时：

    $$Z_{\mathrm{in}}^{(2)} = \frac{\eta_2}{j\tan(\beta_2 d_2)}$$

    **(3) 无反射条件**

    令 $Z_{\mathrm{in}}^{(2)} = \eta_0$（自由空间阻抗匹配），即：

    $$\frac{\eta_2}{j\tan(\beta_2 d_2)} = \eta_0$$

    当 $d_2 = \lambda_2/4$ 时，$\tan(\beta_2 d_2) \to \infty$，此时 $Z_{\mathrm{in}}^{(2)} = 0$，不满足匹配。故需选择 $d_2$ 使：

    $$\tan(\beta_2 d_2) = -j\,\frac{\eta_2}{\eta_0}$$

    **结论：** 消除反射的条件为介质层厚度 $d_1 = \lambda_1/4$（将 PEC 短路变换为开路），同时有耗介质层的厚度 $d_2$ 和参数 $\eta_2$ 满足 $Z_{\mathrm{in}}^{(2)} = \eta_0$，即有耗层的输入阻抗与自由空间匹配。这是隐身涂层的基本原理。

!!! warning "真题"

    **真题 6.3（来源：2024秋季B卷 二、2）**
    **题目：** 写出线极化、圆极化均匀平面波之间的相互关系。如果圆极化均匀平面波照射到金属球体上，分析其后向反射波的极化形式。

    **解：**

    **(1) 线极化与圆极化的关系：**

    圆极化波可以表示为两个正交的等幅、相差 $90°$ 的线极化波的叠加。

    线极化波可以分解为两个幅度相等、旋向相反的圆极化波的叠加。

    **(2) 圆极化波照射金属球的后向反射极化：**

    圆极化波可以分解为两个正交线极化分量。金属球具有旋转对称性，两个线极化分量反射后幅值不变、不产生相位差变化，因此反射波仍为圆极化波。

    但由于传播方向反向（后向反射），圆极化波的旋向发生改变：入射的右旋圆极化波变为左旋圆极化波，入射的左旋圆极化波变为右旋圆极化波。

!!! warning "真题"

    **真题 6.4（来源：2021秋季B卷 三、3）**
    **题目：** 一左旋圆极化波垂直入射到位于 $z=0$ 的理想导体板上，其电场强度的复数表示式为：

    $$\dot{\mathbf{E}}^i = (j5\hat{\mathbf{x}} + 5\hat{\mathbf{y}})\,e^{-j\beta z} \;\text{(V/m)}$$

    (1) 确定反射波的极化方式；(2) 求导体板上的感应电流；(3) 总电场强度的瞬时表示式；(4) 总磁场强度的瞬时表示式。

    **解：**

    **(1) 反射波的极化：**

    理想导体表面反射系数 $\Gamma = -1$，反射波电场为：

    $$\dot{\mathbf{E}}^r = -(j5\hat{\mathbf{x}} + 5\hat{\mathbf{y}})\,e^{j\beta z} = (-j5\hat{\mathbf{x}} - 5\hat{\mathbf{y}})\,e^{j\beta z}$$

    反射波沿 $-z$ 方向传播。入射波为左旋圆极化，反射后旋向改变，反射波为**右旋圆极化波**。

    **(2) 导体板上的感应电流：**

    入射波磁场：

    $$\dot{\mathbf{H}}^i = \frac{1}{\eta_0}\hat{\mathbf{z}}\times\dot{\mathbf{E}}^i = \frac{5}{\eta_0}(-\hat{\mathbf{x}} + j\hat{\mathbf{y}})\,e^{-j\beta z}$$

    反射波磁场：

    $$\dot{\mathbf{H}}^r = \frac{1}{\eta_0}(-\hat{\mathbf{z}})\times\dot{\mathbf{E}}^r = \frac{5}{\eta_0}(-\hat{\mathbf{x}} + j\hat{\mathbf{y}})\,e^{j\beta z}$$

    表面总磁场（$z=0$）：

    $$\dot{\mathbf{H}}\big|_{z=0} = \dot{\mathbf{H}}^i + \dot{\mathbf{H}}^r = \frac{10}{\eta_0}(-\hat{\mathbf{x}} + j\hat{\mathbf{y}})$$

    感应电流密度：

    $$\mathbf{J}_s = \hat{\mathbf{n}}\times\dot{\mathbf{H}}\big|_{z=0} = \hat{\mathbf{z}}\times\frac{10}{\eta_0}(-\hat{\mathbf{x}} + j\hat{\mathbf{y}}) = \frac{10}{\eta_0}(-\hat{\mathbf{y}} - j\hat{\mathbf{x}})$$

    **(3) 总电场瞬时表示式：**

    $$\dot{\mathbf{E}} = \dot{\mathbf{E}}^i + \dot{\mathbf{E}}^r = (j5\hat{\mathbf{x}} + 5\hat{\mathbf{y}})(e^{-j\beta z} - e^{j\beta z}) = -2j(j5\hat{\mathbf{x}} + 5\hat{\mathbf{y}})\sin\beta z$$

    $$= (10\hat{\mathbf{x}} - 10j\hat{\mathbf{y}})\sin\beta z$$

    $$\mathbf{E}(z,t) = \mathrm{Re}\!\left[\dot{\mathbf{E}}\,e^{j\omega t}\right] = 10\sin\beta z\left[\hat{\mathbf{x}}\cos\omega t + \hat{\mathbf{y}}\sin\omega t\right] \;\text{(V/m)}$$

    **(4) 总磁场瞬时表示式：**

    $$\dot{\mathbf{H}} = \frac{5}{\eta_0}(-\hat{\mathbf{x}} + j\hat{\mathbf{y}})(e^{-j\beta z} + e^{j\beta z}) = \frac{10}{\eta_0}(-\hat{\mathbf{x}} + j\hat{\mathbf{y}})\cos\beta z$$

    $$\mathbf{H}(z,t) = \frac{10}{\eta_0}\cos\beta z\left[-\hat{\mathbf{x}}\cos\omega t - \hat{\mathbf{y}}\sin\omega t\right] \;\text{(A/m)}$$

!!! warning "真题"

    **真题 6.5（来源：2022秋季A卷 三、4）**
    **题目：** 频率为 $f = 100\;\text{MHz}$、沿 $y$ 方向极化的均匀平面波从空气（$x<0$ 区域）中垂直入射到位于 $x=0$ 的理想导体板上。设入射波电场 $\mathbf{E}$ 的振幅为 $E_0 = 10\;\text{V/m}$，试求：

    (1) 入射波的平均坡印廷矢量的模值；
    (2) 反射波的电磁场复矢量；
    (3) 合成波的电磁场复矢量；
    (4) 距离导体平面最近的合成波电场为零的位置；
    (5) 距离导体平面最近的合成波磁场为零的位置。

    **解：**

    由 $f = 100\;\text{MHz}$ 得：

    $$\omega = 2\pi f = 2\pi\times10^8\;\text{rad/s},\quad k = \frac{\omega}{c} = \frac{2\pi}{3}\;\text{rad/m},\quad \lambda = \frac{c}{f} = 3\;\text{m}$$

    入射波沿 $+x$ 方向传播，电场沿 $\hat{\mathbf{y}}$ 方向：

    $$\dot{\mathbf{E}}^i = E_0\,e^{-jkx}\,\hat{\mathbf{y}} = 10\,e^{-jkx}\,\hat{\mathbf{y}} \;\text{(V/m)}$$

    $$\dot{\mathbf{H}}^i = \frac{E_0}{\eta_0}\,e^{-jkx}\,\hat{\mathbf{z}} = \frac{10}{120\pi}\,e^{-jkx}\,\hat{\mathbf{z}} \;\text{(A/m)}$$

    **(1) 入射波平均坡印廷矢量模值：**

    $$|\mathbf{S}_{\mathrm{av}}| = \frac{E_0^2}{2\eta_0} = \frac{100}{240\pi} \approx 0.133\;\text{W/m}^2$$

    **(2) 反射波（$\Gamma = -1$）：**

    $$\dot{\mathbf{E}}^r = -E_0\,e^{jkx}\,\hat{\mathbf{y}} = -10\,e^{jkx}\,\hat{\mathbf{y}} \;\text{(V/m)}$$

    $$\dot{\mathbf{H}}^r = \frac{E_0}{\eta_0}\,e^{jkx}\,\hat{\mathbf{z}} = \frac{10}{120\pi}\,e^{jkx}\,\hat{\mathbf{z}} \;\text{(A/m)}$$

    （反射波 $\mathbf{E}$ 反向、$\mathbf{H}$ 同向，保证 $\mathbf{E}^r\times\mathbf{H}^r$ 指向 $-x$。）

    **(3) 合成波：**

    $$\dot{\mathbf{E}} = \dot{\mathbf{E}}^i + \dot{\mathbf{E}}^r = E_0(e^{-jkx} - e^{jkx})\,\hat{\mathbf{y}} = -2jE_0\sin(kx)\,\hat{\mathbf{y}}$$

    $$\dot{\mathbf{H}} = \dot{\mathbf{H}}^i + \dot{\mathbf{H}}^r = \frac{E_0}{\eta_0}(e^{-jkx} + e^{jkx})\,\hat{\mathbf{z}} = \frac{2E_0}{\eta_0}\cos(kx)\,\hat{\mathbf{z}}$$

    合成波为**驻波**，电场和磁场在空间上错开 $\lambda/4$。

    **(4) 电场零点位置：**

    $\sin(kx) = 0 \Rightarrow kx = -n\pi \Rightarrow x = -n\lambda/2 = -n\times1.5\;\text{m}$

    最近导体面（$x<0$）：$x = -1.5\;\text{m}$

    **(5) 磁场零点位置：**

    $\cos(kx) = 0 \Rightarrow kx = -(2n+1)\pi/2 \Rightarrow x = -(2n+1)\lambda/4 = -(2n+1)\times0.75\;\text{m}$

    最近导体面：$x = -0.75\;\text{m}$

!!! warning "真题"

    **真题 6.6（来源：2022春季A卷 三、1）**
    **题目：** 一平面电磁波从无界理想介质（$\varepsilon_r$，$\mu_r = 1$）向 $z=0$ 处的无限大理想导体平面斜入射，磁场强度为 $\dot{\mathbf{H}}^i = H_0\,e^{-j\mathbf{k}\cdot\mathbf{r}}\;\hat{\mathbf{y}}$。求：(1) 入射角；(2) 入射波电场；(3) 反射波电场和磁场；(4) 合成波的电场和磁场；(5) 导体表面上的感应电流密度。

    **解：**

    **(1) 入射角**

    由磁场表达式可得波矢量 $\mathbf{k}$。由 $\mathbf{k}\cdot\mathbf{r} = k_x x + k_z z$，且 $k_x = k$，$k_z = k$，则入射角 $\theta_i = 45°$。

    **(2) 入射波电场**

    由 $\dot{\mathbf{E}}^i = -\eta\,\hat{\mathbf{k}}\times\dot{\mathbf{H}}^i$，$\eta = 120\pi$（空气）：

    $$\dot{\mathbf{E}}^i = -120\pi H_0(\hat{\mathbf{x}} + \hat{\mathbf{z}})\times\hat{\mathbf{y}}\,e^{-j(x+z)}$$

    入射角 $\theta_i = 45°$，$k_x = k_z = \pi$。

    **(3) 反射波**

    理想导体反射系数 $\Gamma = -1$。反射波传播方向 $k_z \to -k_z$：

    $$\dot{\mathbf{E}}^r = -\dot{\mathbf{E}}^i\big|_{k_z \to -k_z}, \quad \dot{\mathbf{H}}^r = \dot{\mathbf{H}}^i\big|_{k_z \to -k_z}$$

    **(4) 合成波**

    $$\dot{\mathbf{E}} = \dot{\mathbf{E}}^i + \dot{\mathbf{E}}^r$$

    入射波与反射波叠加，$z$ 方向形成驻波。

    **(5) 感应电流密度**

    $$\mathbf{J}_s = \hat{\mathbf{n}}\times\dot{\mathbf{H}}\big|_{z=0}$$

!!! warning "真题"

    **真题 6.7（来源：2022春季B卷 三、3）**
    **题目：** 一角频率为 $\omega$ 的均匀平面波由空气向 $z=0$ 处的理想导体斜入射，入射角为 $\theta_i$，电场矢量垂直于入射面 $xoz$ 面。求：(1) 导体表面上的感应电流密度；(2) 合成波在空气中的平均坡印廷矢量。

    **解：**

    电场垂直入射面（s 极化），$\dot{\mathbf{E}}^i = \hat{\mathbf{y}}\,E_0\,e^{-j(k_x x + k_z z)}$，其中 $k_x = k\sin\theta_i$，$k_z = k\cos\theta_i$。

    入射波磁场：

    $$\dot{\mathbf{H}}^i = \frac{E_0}{\eta_0}(\cos\theta_i\,\hat{\mathbf{x}} - \sin\theta_i\,\hat{\mathbf{z}})\,e^{-j(k_x x + k_z z)}$$

    反射系数 $\Gamma_s = -1$，反射波：

    $$\dot{\mathbf{E}}^r = -\hat{\mathbf{y}}\,E_0\,e^{-j(k_x x - k_z z)}$$

    $$\dot{\mathbf{H}}^r = \frac{E_0}{\eta_0}(-\cos\theta_i\,\hat{\mathbf{x}} - \sin\theta_i\,\hat{\mathbf{z}})\,e^{-j(k_x x - k_z z)}$$

    **(1) 感应电流密度**

    合成波磁场在 $z=0$ 处：

    $$\dot{\mathbf{H}}\big|_{z=0} = \frac{E_0}{\eta_0}\left[\cos\theta_i\,\hat{\mathbf{x}}\left(e^{-jk_x x} - e^{-jk_x x}\right) - 2\sin\theta_i\,\hat{\mathbf{z}}\,e^{-jk_x x}\right]$$

    实际上 $H_x$ 分量在 $z=0$ 处为 $0$（驻波节点），$H_z$ 分量加倍：

    $$\mathbf{J}_s = \hat{\mathbf{z}}\times\dot{\mathbf{H}}\big|_{z=0} = -\hat{\mathbf{x}}\,\frac{2E_0\sin\theta_i}{\eta_0}e^{-jk_x x}$$

    **(2) 平均坡印廷矢量**

    合成波电场 $z$ 方向为驻波，$x$ 方向有行波分量：

    $$\mathbf{S}_{\mathrm{av}} = \hat{\mathbf{x}}\,\frac{2E_0^2\sin\theta_i}{\eta_0}\sin^2(k_z z)\;\text{(W/m}^2\text{)}$$

    （合成波沿 $x$ 方向传播，$z$ 方向为驻波，平均坡印廷矢量沿导体表面方向。）

!!! warning "真题"

    **真题 6.8（来源：2022秋季B卷 三、3）**
    **题目：** 空气中，电场极化方向为 $x$ 方向的均匀平面波（$\mathrm{TEM}$），沿 $+z$ 方向传播，其工作频率为 $0.1\;\text{GHz}$，该波垂直入射置于 $z=0$ 处的理想导体平面。若该波电场 $\mathbf{E}$ 的最大振幅为 $1\;\text{V/m}$，求：(1) 入射电场 $\dot{\mathbf{E}}$ 和磁场 $\dot{\mathbf{H}}$ 的频域和时域表示式；(2) 反射电场 $\dot{\mathbf{E}}^r$ 和磁场 $\dot{\mathbf{H}}^r$ 的频域和时域表示式。

    **解：**

    由 $f = 0.1\;\text{GHz}$ 得：

    $$\omega = 2\pi f = 2\pi\times10^8\;\text{rad/s}$$

    $$k = \frac{\omega}{c} = \frac{2\pi}{3}\;\text{rad/m}$$

    $$\eta_0 = 120\pi\;\Omega$$

    **(1) 入射波**

    频域：

    $$\dot{\mathbf{E}}^i = e^{-jkz}\,\hat{\mathbf{x}} = e^{-j2\pi z/3}\,\hat{\mathbf{x}}\;\text{(V/m)}$$

    $$\dot{\mathbf{H}}^i = \frac{1}{\eta_0}e^{-jkz}\,\hat{\mathbf{y}} = \frac{1}{120\pi}e^{-j2\pi z/3}\,\hat{\mathbf{y}}\;\text{(A/m)}$$

    时域：

    $$\mathbf{E}^i(z,t) = \cos\!\left(2\pi\times10^8 t - \frac{2\pi}{3}z\right)\hat{\mathbf{x}}\;\text{(V/m)}$$

    $$\mathbf{H}^i(z,t) = \frac{1}{120\pi}\cos\!\left(2\pi\times10^8 t - \frac{2\pi}{3}z\right)\hat{\mathbf{y}}\;\text{(A/m)}$$

    **(2) 反射波**（$\Gamma = -1$）

    频域：

    $$\dot{\mathbf{E}}^r = -e^{jkz}\,\hat{\mathbf{x}}\;\text{(V/m)}$$

    $$\dot{\mathbf{H}}^r = \frac{1}{\eta_0}e^{jkz}\,\hat{\mathbf{y}}\;\text{(A/m)}$$

    时域：

    $$\mathbf{E}^r(z,t) = -\cos\!\left(2\pi\times10^8 t + \frac{2\pi}{3}z\right)\hat{\mathbf{x}}\;\text{(V/m)}$$

    $$\mathbf{H}^r(z,t) = \frac{1}{120\pi}\cos\!\left(2\pi\times10^8 t + \frac{2\pi}{3}z\right)\hat{\mathbf{y}}\;\text{(A/m)}$$

!!! warning "真题"

    **真题 6.9（来源：2023春季A卷 三、2）**
    **题目：** 一均匀平面电磁波从 $\varepsilon_r = 4$、$\mu_r = 1$ 的半无界理想介质斜入射到与空气相交的平面 $z=0$ 上。已知入射面为 $y=0$，入射场的电场强度为 $\dot{\mathbf{E}}^i = E_0\,e^{-j\mathbf{k}\cdot\mathbf{r}}\;\hat{\mathbf{y}}$。求：(1) 入射波的波长、相速、频率和磁场强度；(2) 入射角、反射角和透射角；(3) 反射波的电场和磁场；(4) 透射波的平均功率密度。

    **解：**

    **(1) 入射波参数**

    介质中波数 $k = \omega\sqrt{\mu\varepsilon} = \dfrac{\omega}{c}\sqrt{\varepsilon_r} = \dfrac{2\omega}{c}$

    波长 $\lambda = \dfrac{2\pi}{k} = \dfrac{\pi c}{\omega}$，相速 $v_p = \dfrac{c}{\sqrt{\varepsilon_r}} = \dfrac{c}{2}$

    频率 $f = \dfrac{\omega}{2\pi}$

    磁场：$\dot{\mathbf{H}}^i = \dfrac{1}{\eta}\hat{\mathbf{k}}\times\dot{\mathbf{E}}^i$，$\eta = \dfrac{\eta_0}{\sqrt{\varepsilon_r}} = \dfrac{\eta_0}{2} = 60\pi\;\Omega$

    **(2) 入射角、反射角、透射角**

    由 $\mathbf{k}$ 可确定入射角 $\theta_i$。反射角 $\theta_r = \theta_i$。

    透射角由 Snell 定律：$\sqrt{\varepsilon_r}\sin\theta_i = \sin\theta_t$，即 $2\sin\theta_i = \sin\theta_t$

    **(3) 反射波**

    s 极化（电场垂直入射面），反射系数：

    $$\Gamma_s = \frac{\eta_2\cos\theta_i - \eta_1\cos\theta_t}{\eta_2\cos\theta_i + \eta_1\cos\theta_t}$$

    其中 $\eta_1 = 60\pi$，$\eta_2 = 120\pi$。

    **(4) 透射波平均功率密度**

    $$\mathbf{S}_{\mathrm{av}}^t = \hat{\mathbf{k}}_t\,\frac{|E_t|^2}{2\eta_2}$$

    其中 $|E_t| = |T_s|\,|E_0|$，$T_s = 1 + \Gamma_s$。

!!! warning "真题"

    **真题 6.10（来源：2023秋季A卷 三、3）**
    **题目：** 一均匀平面电磁波由空气中入射到相对介电常数和磁导率分别为 $\varepsilon_r = 3$ 和 $\mu_r = 1$ 的介质中。已知入射面为 $y=0$，两种介质的分界面为 $x=0$。入射波的电场矢量为 $\dot{\mathbf{E}}^i = E_0\,e^{-j\mathbf{k}\cdot\mathbf{r}}\;\hat{\mathbf{y}}$。试求反射波和折射波的电场强度和磁场强度。

    **解：**

    入射波从空气（$\eta_1 = 120\pi$）入射到介质（$\eta_2 = 120\pi/\sqrt{3}$）。

    s 极化（电场沿 $\hat{\mathbf{y}}$，垂直入射面 $xoz$），反射系数：

    $$\Gamma_s = \frac{\eta_2\cos\theta_i - \eta_1\cos\theta_t}{\eta_2\cos\theta_i + \eta_1\cos\theta_t}$$

    透射系数：$T_s = 1 + \Gamma_s$

    由 Snell 定律：$\sin\theta_t = \dfrac{\sin\theta_i}{\sqrt{\varepsilon_r}} = \dfrac{\sin\theta_i}{\sqrt{3}}$

    反射波：

    $$\dot{\mathbf{E}}^r = \Gamma_s E_0\,e^{-j\mathbf{k}_r\cdot\mathbf{r}}\,\hat{\mathbf{y}}$$

    $$\dot{\mathbf{H}}^r = \frac{\Gamma_s E_0}{\eta_1}\,\hat{\mathbf{k}}_r\times\hat{\mathbf{y}}\,e^{-j\mathbf{k}_r\cdot\mathbf{r}}$$

    透射波：

    $$\dot{\mathbf{E}}^t = T_s E_0\,e^{-j\mathbf{k}_t\cdot\mathbf{r}}\,\hat{\mathbf{y}}$$

    $$\dot{\mathbf{H}}^t = \frac{T_s E_0}{\eta_2}\,\hat{\mathbf{k}}_t\times\hat{\mathbf{y}}\,e^{-j\mathbf{k}_t\cdot\mathbf{r}}$$

!!! warning "真题"

    **真题 6.11（来源：2024春季A卷 三、2）**
    **题目：** 左旋圆极化波从 $z<0$ 的空气区域垂直入射至位于 $z=0$ 的无限大理想导体板上，其电场强度的瞬时表示式为：

    $$\mathbf{E}(z,t) = (\hat{\mathbf{x}} + j\hat{\mathbf{y}})\,E_0\cos(\omega t - \beta z)$$

    (1) 确定反射波的极化；(2) 求 $z<0$ 区域中合成波的电场强度的瞬时表示式；(3) 求板上的感应面电流密度的复数表示式。

    **解：**

    **(1) 反射波极化**

    垂直入射理想导体，反射系数 $\Gamma = -1$。入射波复数形式：

    $$\dot{\mathbf{E}}^i = (\hat{\mathbf{x}} + j\hat{\mathbf{y}})\,E_0\,e^{-j\beta z}$$

    反射波：

    $$\dot{\mathbf{E}}^r = -(\hat{\mathbf{x}} + j\hat{\mathbf{y}})\,E_0\,e^{j\beta z}$$

    反射波沿 $-z$ 方向传播，$y$ 分量超前 $x$ 分量 $\pi/2$，对于 $-z$ 传播方向，这为**右旋圆极化波**。

    **(2) 合成波电场**

    $$\dot{\mathbf{E}} = \dot{\mathbf{E}}^i + \dot{\mathbf{E}}^r = (\hat{\mathbf{x}} + j\hat{\mathbf{y}})\,E_0(e^{-j\beta z} - e^{j\beta z}) = -2j(\hat{\mathbf{x}} + j\hat{\mathbf{y}})\,E_0\sin\beta z$$

    瞬时形式（以余弦为基准）：

    $$\mathbf{E}(z,t) = 2E_0\sin\beta z\left[\hat{\mathbf{x}}\sin\omega t - \hat{\mathbf{y}}\cos\omega t\right]\;\text{(V/m)}$$

    **(3) 感应面电流密度**

    入射波磁场：

    $$\dot{\mathbf{H}}^i = \frac{E_0}{\eta_0}(-j\hat{\mathbf{x}} + \hat{\mathbf{y}})\,e^{-j\beta z}$$

    反射波磁场（$\Gamma_H = 1$）：

    $$\dot{\mathbf{H}}^r = \frac{E_0}{\eta_0}(j\hat{\mathbf{x}} + \hat{\mathbf{y}})\,e^{j\beta z}$$

    合成波磁场在 $z=0$：

    $$\dot{\mathbf{H}}\big|_{z=0} = \frac{2E_0}{\eta_0}\,\hat{\mathbf{y}}$$

    $$\mathbf{J}_s = \hat{\mathbf{n}}\times\dot{\mathbf{H}}\big|_{z=0} = (-\hat{\mathbf{z}})\times\frac{2E_0}{\eta_0}\hat{\mathbf{y}} = \hat{\mathbf{x}}\,\frac{2E_0}{\eta_0}\;\text{(A/m)}$$

---

[← 上一章: 第5章 均匀平面波](../05-均匀平面波/index.md)
[← 返回首页](../index.md)
[→ 下一章: 第7章 导行电磁波](../07-导行电磁波/index.md)
