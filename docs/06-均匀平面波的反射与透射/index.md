# 第6章 均匀平面波的反射与透射

## 课件下载
[📄 16均匀平面波的反射与透射1-理想介质分界面的斜入射](../课程资料/16均匀平面波的反射与透射1-理想介质分界面的斜入射.pdf)
[📄 17第六章均匀平面波的反射与透射2-理想介质与其他媒质分界面](../课程资料/17第六章均匀平面波的反射与透射2-理想介质与其他媒质分界面.pdf)
[📄 18第六章均匀平面波的反射与透射3-均匀平面波对多层介质分界面的垂直入射](../课程资料/18第六章均匀平面波的反射与透射3-均匀平面波对多层介质分界面的垂直入射.pdf)

## 课程内容

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

## 例题与习题

### 例题 6.1
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

### 例题 6.2
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

## 历年真题精选

### 真题 6.1（来源：2022秋季A卷）
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

### 真题 6.2（来源：2024秋季A卷）
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

---

[← 上一章: 第5章 均匀平面波](../05-均匀平面波/index.md)
[← 返回首页](../index.md)
[→ 下一章: 第7章 导行电磁波](../07-导行电磁波/index.md)
