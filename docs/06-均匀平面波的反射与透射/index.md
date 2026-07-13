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

---

[← 上一章: 第5章 均匀平面波](../05-均匀平面波/index.md)
[← 返回首页](../index.md)
[→ 下一章: 第7章 导行电磁波](../07-导行电磁波/index.md)
